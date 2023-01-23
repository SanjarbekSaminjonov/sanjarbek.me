import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {FullUnitObj} from "../../types";
import {getData} from "../../apiCalls/axios";
import {Loader} from "../../components/Loader";
import {UnitContext} from "../../context/Academy/UnitLessons";
import {Navbar} from "../../components/Navbar";
import {Container} from "../../components/Container";

export const Unit = () => {
  const pathname = window.location.pathname
  const {fullUnits, setFullUnits} = useContext(UnitContext)
  const [unit, setUnit] = useState(
    fullUnits.find((unit) => unit.slug === pathname.split("/")[3]) || {} as FullUnitObj
  )

  useEffect(() => {
    if (unit.id) return
    getData(pathname).then((unit) => {
      setFullUnits([...fullUnits, unit])
      setUnit(unit)
    })
  }, [pathname, setFullUnits, fullUnits, unit])

  return (
    <>{
      unit.id ? (
        <div>
          <Navbar items={[
            {title: "Academy", link: "/academy"},
            {title: unit.course.title, link: `/academy/${unit.course.slug}`}
          ]} currentPath={unit.title}/>
          <Container>
            <div dangerouslySetInnerHTML={{__html: unit.description}}></div>
            <ul>
              {unit.lessons?.map((lesson, index) => {
                return (
                  <li className={"my-2"} key={lesson.id}>
                    <span className={"font-bold"}>{index + 1}. </span>
                    <Link to={`/academy/${unit.course.slug}/${unit.slug}/${lesson.slug}`}>{lesson.title}</Link>
                  </li>
                )
              })}
            </ul>
          </Container>
        </div>
      ) : <div className={"flex justify-center"}><Loader/></div>
    }</>
  )
}
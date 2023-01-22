import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {FullUnitObj} from "../types";
import {getData} from "../apiCalls/axios";

export const Unit = () => {
  const pathname = window.location.pathname
  const [unit, setUnit] = useState({} as FullUnitObj)

  useEffect(() => {
    getData(pathname).then((unit) => setUnit(unit))
  }, [pathname])

  return (
    <div>
      <Link to={"/academy"}>Academy</Link> {" > "}
      <Link to={`/academy/${unit.course?.slug}`}>{unit.course?.title}</Link> {" > " + unit.title}
      <h1 className={"text-center text-4xl my-5"}>{unit.title}</h1>
      <div dangerouslySetInnerHTML={{__html: unit.description}}></div>
      <ul>
        {unit.lessons?.map((lesson) => {
          return (
            <li className={"my-2"} key={lesson.id}>
              <Link to={`/academy/${unit.course.slug}/${unit.slug}/${lesson.slug}`}>{lesson.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
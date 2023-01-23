import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {Loader} from "../../components/Loader";
import {CourseContext} from "../../context/Academy/CourseUnits";
import {getData} from "../../apiCalls/axios";
import {FullCourseObj} from "../../types";
import {Navbar} from "../../components/Navbar";
import {Container} from "../../components/Container";

export const Course = () => {
  const pathname = window.location.pathname
  const {fullCourses, setFullCourses} = useContext(CourseContext)
  const [course, setCourse] = useState<FullCourseObj>(
    fullCourses.find((course) => course.slug === pathname.split("/")[2]) || {} as FullCourseObj
  )

  useEffect(() => {
    if (course.id) return
    getData(pathname).then((course) => {
      const courses = [...fullCourses, course]
      setFullCourses(courses)
      setCourse(course)
    })
  }, [pathname, setFullCourses, fullCourses, course])

  return (
    <>{
      course.id ? (
        <div>
          <Navbar items={[{title: "Academy", link: "/academy"}]} currentPath={course.title}/>
          <Container>
            <img src={course.image} className={"h-24 mx-auto"} alt={course.title}/>
            <div dangerouslySetInnerHTML={{__html: course.description}}></div>
            <ul>
              {course.units.map((unit, index) => {
                return (
                  <li className={"my-2"} key={unit.id}>
                    <span className={"font-bold"}>{index + 1}. </span>
                    <Link to={`/academy/${course.slug}/${unit.slug}`}>{unit.title} [{unit.lessons_count}]</Link>
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
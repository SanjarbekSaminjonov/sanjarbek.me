import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {FullCourseObj} from "../types";
import {getData} from "../apiCalls/axios";

export const Course = () => {
  const pathname = window.location.pathname
  const [course, setCourse] = useState({} as FullCourseObj)

  useEffect(() => {
    getData(pathname).then((course) => setCourse(course))
  }, [pathname])

  return (
    <div>
      <Link to={"/academy"}>Academy</Link> {" > " + course.title}
      <h1 className={"text-center text-4xl my-5"}>{course.title}</h1>
      <img src={course.image} className={"h-24 mx-auto"} alt={course.title}/>
      <div dangerouslySetInnerHTML={{__html: course.description}}></div>
      <ul>
        {course.units?.map((unit) => {
          return (
            <li className={"my-2"} key={unit.id}>
              <Link to={`/academy/${course.slug}/${unit.slug}`}>{unit.title} [{unit.lessons_count}]</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
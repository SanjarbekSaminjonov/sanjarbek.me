import {useContext, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import {getData} from "../../apiCalls/axios";
import {Navbar} from "../../components/Navbar";
import {Loader} from "../../components/Loader";
import {Container} from "../../components/Container";
import {CourseContext} from "../../context/Academy/CourseUnits";
import {FullCourseObj} from "../../types";

export const Course = () => {
  const {courseSlug} = useParams()
  const {fullCourses, setFullCourses} = useContext(CourseContext)
  const [course, setCourse] = useState<FullCourseObj>(
    fullCourses.find((course) => course.slug === courseSlug) || {} as FullCourseObj
  )

  useEffect(() => {
    if (course.id) return
    getData(`/academy/${courseSlug}/`).then((course) => {
      const courses = [...fullCourses, course]
      setFullCourses(courses)
      setCourse(course)
    })
  }, [courseSlug, setFullCourses, fullCourses, course])

  return (
    <>{
      course.id ? (
        <div>
          <Navbar items={[
            {title: "Academy", link: "/academy"}
          ]} currentPath={course.title}/>
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
      ) : <Loader/>
    }</>
  )
}
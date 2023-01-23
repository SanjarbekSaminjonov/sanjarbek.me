import React, {useEffect, useContext} from "react";
import {Link} from "react-router-dom";


import {AcademyCoursesContext} from "../../context/Academy/AcademyCourses";
import {Loader} from "../../components/Loader";
import {getData} from "../../apiCalls/axios";
import {Navbar} from "../../components/Navbar";
import {Container} from "../../components/Container";

export const Academy = () => {
  const pathname = window.location.pathname
  const {courses, setCourses} = useContext(AcademyCoursesContext)

  useEffect(() => {
    if (courses.length === 0) {
      getData(pathname).then((courses) => setCourses(courses))
    }
  }, [courses, setCourses, pathname])

  return (
    <div>
      <Navbar items={[]} currentPath={"Academy"}/>
      <Container>
        <>{
          courses.length ? (
            <>{
              courses.map((course) => (
                <div key={course.id}
                     className={"flex flex-wrap  sm:flex-nowrap items-center justify-center sm:justify-between border my-4"}>
                  <div className={"w-1/4"}>
                    <img src={course.image} className={"p-3"} alt={course.title} width={200} height={200}/>
                  </div>
                  <div className={"w-3/4"}>
                    <Link className={"text-2xl"} to={`/academy/${course.slug}`}>
                      {course.title} [{course.units_count}]
                    </Link>
                    <div dangerouslySetInnerHTML={{__html: course.description}}></div>
                  </div>
                </div>
              ))
            }</>
          ) : <div className={"flex justify-center"}><Loader/></div>
        }</>
      </Container>
    </div>
  )
}
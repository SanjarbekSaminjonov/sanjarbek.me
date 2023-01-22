import React, {useEffect, useState} from "react";
import {getData} from "../apiCalls/axios";

import {CourseObj} from "../types";
import {Link} from "react-router-dom";
import {Loader} from "../components/Loader";

export const Academy = () => {
  const pathname = window.location.pathname
  const [courses, setCourses] = useState([] as CourseObj[])

  useEffect(() => {
    getData(pathname).then((courses) => setCourses(courses))
  }, [pathname])


  return (
    <div>
      <h1 className={"text-center text-4xl my-5"}>Academy</h1>

      <>{
        courses.length ? (
          <>{
            courses.map((course) => (
              <div key={course.id}
                   className={"flex flex-wrap  sm:flex-nowrap items-center justify-center sm:justify-between border my-4"}>
                <div className={"w-1/4"}>
                  <img src={course.image} className={"p-3"} alt={course.title}/>
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

    </div>
  )
}
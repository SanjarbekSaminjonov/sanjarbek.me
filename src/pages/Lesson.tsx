import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {FullLessonObj} from "../types";
import {getData} from "../apiCalls/axios";

export const Lesson = () => {
  const pathname = window.location.pathname
  const [lesson, setLesson] = useState({} as FullLessonObj)

  useEffect(() => {
    getData(pathname).then((Lesson) => setLesson(Lesson))
  }, [pathname])

  return (
    <div>
      <Link to={"/academy"}>Academy</Link> {" > "}
      <Link to={`/academy/${lesson.course?.slug}`}>{lesson.course?.title}</Link> {" > "}
      <Link to={`/academy/${lesson.course?.slug}/${lesson.unit?.slug}`}>{lesson.unit?.title}</Link> {" > " + lesson.title}
      <h1 className={"text-center text-4xl my-5"}>{lesson.title}</h1>
      <div dangerouslySetInnerHTML={{__html: lesson.description}}></div>
    </div>
  )
}
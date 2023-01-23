import {useContext, useEffect, useState} from "react";
import {FullLessonObj} from "../../types";
import {getData} from "../../apiCalls/axios";
import {Loader} from "../../components/Loader";
import {LessonContext} from "../../context/Academy/LessonContents";
import {Navbar} from "../../components/Navbar";
import {Container} from "../../components/Container";

export const Lesson = () => {
  const pathname = window.location.pathname
  const {fullLessons, setFullLessons} = useContext(LessonContext)
  const [lesson, setLesson] = useState(
    fullLessons.find((lesson) => lesson.slug === pathname.split("/")[4]) || {} as FullLessonObj
  )

  useEffect(() => {
    if (lesson.id) return
    getData(pathname).then((lesson) => {
      setFullLessons([...fullLessons, lesson])
      setLesson(lesson)
    })
  }, [pathname, setFullLessons, fullLessons, lesson])

  return (
    <>{
      lesson.id ? (
        <div>
          <Navbar items={[
            {title: "Academy", link: "/academy"},
            {title: lesson.course.title, link: `/academy/${lesson.course.slug}`},
            {title: lesson.unit.title, link: `/academy/${lesson.course.slug}/${lesson.unit.slug}`}
          ]} currentPath={lesson.title}/>
          <Container>
            <div dangerouslySetInnerHTML={{__html: lesson.description}}></div>
          </Container>
        </div>
      ) : <div className={"flex justify-center"}><Loader/></div>
    }</>
  )
}
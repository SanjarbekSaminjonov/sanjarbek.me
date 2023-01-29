import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {getData} from "../../apiCalls/axios";
import {Loader} from "../../components/Loader";
import {Navbar} from "../../components/Navbar";
import {Container} from "../../components/Container";
import {LessonContext} from "../../context/Academy/LessonContents";
import {FullLessonObj} from "../../types";

export const Lesson = () => {
  const {courseSlug, unitSlug, lessonSlug} = useParams()
  const {fullLessons, setFullLessons} = useContext(LessonContext)
  const [lesson, setLesson] = useState(
    fullLessons.find((lesson) => lesson.slug === lessonSlug) || {} as FullLessonObj
  )

  useEffect(() => {
    if (lesson.id) return
    getData(`/academy/${courseSlug}/${unitSlug}/${lessonSlug}/`).then((lesson) => {
      setFullLessons([...fullLessons, lesson])
      setLesson(lesson)
    })
  }, [courseSlug, unitSlug, lessonSlug, setFullLessons, fullLessons, lesson])

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
      ) : <Loader/>
    }</>
  )
}
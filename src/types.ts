import React from "react";

export type ChildrenProps = {
  children: React.ReactNode
}

export type NavbarProps = {
  items: {
    title: string
    link: string
  }[]
  currentPath: string
}

export type LessonObj = {
  id: number
  title: string
  slug: string
}

export type FullLessonObj = {
  id: number
  title: string
  slug: string
  description: string
  unit: UnitObj
  course: CourseObj
}

export type UnitObj = {
  id: number
  title: string
  slug: string
  lessons_count: number
}

export type FullUnitObj = {
  id: number
  title: string
  slug: string
  description: string
  lessons: LessonObj[]
  course: CourseObj
}

export type CourseObj = {
  id: number
  title: string
  description: string
  image: string
  slug: string
  units_count: number
}

export type FullCourseObj = {
  id: number
  title: string
  description: string
  image: string
  slug: string
  units: UnitObj[]
}

export type AcademyCoursesContextType = {
  courses: CourseObj[]
  setCourses: React.Dispatch<React.SetStateAction<CourseObj[]>>
}

export type CourseContextType = {
  fullCourses: FullCourseObj[]
  setFullCourses: React.Dispatch<React.SetStateAction<FullCourseObj[]>>
}

export type UnitContextType = {
  fullUnits: FullUnitObj[]
  setFullUnits: React.Dispatch<React.SetStateAction<FullUnitObj[]>>
}

export type LessonContextType = {
  fullLessons: FullLessonObj[]
  setFullLessons: React.Dispatch<React.SetStateAction<FullLessonObj[]>>
}

export type PostObj = {
  title: string
  slug: string
  date: string
}

export type FullPostObj = {
  title: string
  slug: string
  description: string
  image: string
  date: string
}
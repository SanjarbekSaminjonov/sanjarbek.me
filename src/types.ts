import React from "react";

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

export type ChildrenProps = {
  children: React.ReactNode
}
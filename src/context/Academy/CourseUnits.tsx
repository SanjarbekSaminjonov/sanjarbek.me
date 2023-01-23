import {createContext, useState} from "react";
import {ChildrenProps, CourseContextType, FullCourseObj} from "../../types";

export const CourseContext = createContext<CourseContextType>({} as CourseContextType);

export const CourseProvider = ({children}: ChildrenProps) => {
  const [fullCourses, setFullCourses] = useState<FullCourseObj[]>([]);

  return (
    <CourseContext.Provider value={{fullCourses, setFullCourses}}>
      {children}
    </CourseContext.Provider>
  );
};

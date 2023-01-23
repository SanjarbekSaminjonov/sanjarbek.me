import {createContext, useState} from "react";
import {CourseObj, ChildrenProps, AcademyCoursesContextType} from "../../types";

export const AcademyCoursesContext = createContext<AcademyCoursesContextType>({} as AcademyCoursesContextType);

export const AcademyCoursesProvider = ({children}: ChildrenProps) => {
  const [courses, setCourses] = useState<CourseObj[]>([]);

  return (
    <AcademyCoursesContext.Provider value={{courses, setCourses}}>
      {children}
    </AcademyCoursesContext.Provider>
  );
};

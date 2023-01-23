import {createContext, useState} from "react";
import {ChildrenProps, FullLessonObj, LessonContextType} from "../../types";

export const LessonContext = createContext<LessonContextType>({} as LessonContextType);

export const LessonProvider = ({children}: ChildrenProps) => {
  const [fullLessons, setFullLessons] = useState<FullLessonObj[]>([]);

  return (
    <LessonContext.Provider value={{fullLessons, setFullLessons}}>
      {children}
    </LessonContext.Provider>
  );
};

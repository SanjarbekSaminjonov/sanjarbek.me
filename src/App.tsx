import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Academy} from "./pages/Academy/Academy";
import {Course} from "./pages/Academy/Course";
import {Unit} from "./pages/Academy/Unit";
import {Lesson} from "./pages/Academy/Lesson";
import {AcademyCoursesProvider} from "./context/Academy/AcademyCourses";
import {CourseProvider} from "./context/Academy/CourseUnits";
import {UnitProvider} from "./context/Academy/UnitLessons";
import {LessonProvider} from "./context/Academy/LessonContents";
import {BlogList} from "./pages/Blog/BlogList";
import {BlogDetail} from "./pages/Blog/BlogDetail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <AcademyCoursesProvider>
              <CourseProvider>
                <UnitProvider>
                  <LessonProvider>
                    <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/academy" element={<Academy/>}/>
                      <Route path="/academy/:courseSlug" element={<Course/>}/>
                      <Route path="/academy/:courseSlug/:unitSlug" element={<Unit/>}/>
                      <Route path="/academy/:courseSlug/:unitSlug/:lessonSlug" element={<Lesson/>}/>
                      <Route path="/blog" element={<BlogList/>}/>
                      <Route path="/blog/:postSlug" element={<BlogDetail/>}/>
                    </Routes>
                  </LessonProvider>
                </UnitProvider>
              </CourseProvider>
            </AcademyCoursesProvider>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

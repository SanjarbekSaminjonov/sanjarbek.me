import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {Academy} from "./pages/Academy";
import {Course} from "./pages/Course";
import {Unit} from "./pages/Unit";
import {Container} from "./components/Container";
import {Lesson} from "./pages/Lesson";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header/>
          <Container>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/academy" element={<Academy/>}/>
              <Route path="/academy/:courseSlug" element={<Course/>}/>
              <Route path="/academy/:courseSlug/:unitSlug" element={<Unit/>}/>
              <Route path="/academy/:courseSlug/:unitSlug/:lessonSlug" element={<Lesson/>}/>
            </Routes>
          </Container>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

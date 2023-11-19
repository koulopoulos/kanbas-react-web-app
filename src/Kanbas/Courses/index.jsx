import { useState, useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import axios from "axios";
import CourseNavigation from "./CourseNavigation";
import CourseHeader from "./CourseHeader";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses() {
  const { pathname } = useLocation();
  const { courseId } = useParams();
  const [course, setCourse] = useState({});

  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;

  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <>
      <CourseHeader
        courseId={courseId}
        courseNumber={course.number}
        path={pathname.split(courseId).at(1).split("/")}
      />
      <main className="main">
        <CourseNavigation />
        <Routes>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home course={course} />} />
          <Route path="modules" element={<Modules />} />
          <Route path="assignments" element={<Assignments />} />
          <Route
            path="assignments/:assignmentId"
            element={<AssignmentEditor />}
          />
        </Routes>
      </main>
    </>
  );
}

export default Courses;

import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import CourseHeader from "./CourseHeader";
import Home from "./Home";
import Modules from "./Modules";
import db from "../Database";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses() {
  const { pathname } = useLocation();
  const { courseId } = useParams();
  const course = db.getCourseById(courseId);
  const modules = db.getModulesByCourseId(courseId);

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
          <Route
            path="home"
            element={<Home course={course} modules={modules} />}
          />
          <Route path="modules" element={<Modules modules={modules} />} />
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

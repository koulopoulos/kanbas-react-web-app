import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import KanbasNavigation from "./Navigation/KanbasNavigation";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Courses from "./Courses";
import coursesLinks from "./Navigation/courses.json";
import profileLinks from "./Navigation/profile.json";
import MobileNavigation from "./Navigation/MobileNavigation";
import db from "./Database";
import "./index.css";

function Kanbas() {
  const { pathname } = useLocation();
  const defaultCourseId = db.courses.at(0)?._id;

  const [courses, setCourses] = useState(db.courses);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const addNewCourse = () => {
    setCourses([
      ...courses,
      { ...course, _id: new Date().getTime().toString() },
    ]);
  };

  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  let sidebarLinks;
  if (pathname.includes("kanbas/courses")) {
    sidebarLinks = coursesLinks;
  } else if (pathname.includes("kanbas/profile")) {
    sidebarLinks = profileLinks;
  }

  return (
    <Provider store={store}>
      <KanbasNavigation />
      <div className="primary-nav-padding d-none d-md-block"></div>
      <div className="main-wrapper">
        <MobileNavigation sidebarLinks={sidebarLinks} />
        <Routes>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="dashboard"
            element={
              <Dashboard
                course={course}
                courses={courses}
                setCourse={setCourse}
                setCourses={setCourses}
                addNewCourse={addNewCourse}
                updateCourse={updateCourse}
                deleteCourse={deleteCourse}
              />
            }
          />
          <Route path="courses">
            <Route index element={<Navigate to={defaultCourseId} />} />
            <Route path=":courseId/*" element={<Courses courses={courses} />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default Kanbas;

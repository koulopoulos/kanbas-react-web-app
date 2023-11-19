import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";
import store from "./store";
import KanbasNavigation from "./Navigation/KanbasNavigation";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Courses from "./Courses";
import coursesLinks from "./Navigation/courses.json";
import profileLinks from "./Navigation/profile.json";
import MobileNavigation from "./Navigation/MobileNavigation";
import "./index.css";

function Kanbas() {
  const { pathname } = useLocation();
  const [courses, setCourses] = useState([]);

  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    const response = await axios.put(`${URL}/${course._id}`, course);

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
            <Route index element={<Navigate to={courses?.at(0)?._id} />} />
            <Route path=":courseId/*" element={<Courses />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default Kanbas;

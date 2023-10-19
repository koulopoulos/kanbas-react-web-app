import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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

  let sidebarLinks;
  if (pathname.includes("kanbas/courses")) {
    sidebarLinks = coursesLinks;
  } else if (pathname.includes("kanbas/profile")) {
    sidebarLinks = profileLinks;
  }

  return (
    <>
      <KanbasNavigation />
      <div className="primary-nav-padding d-none d-md-block"></div>
      <div className="main-wrapper">
        <MobileNavigation sidebarLinks={sidebarLinks} />
        <Routes>
          <Route index element={<Navigate to="Dashboard" />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses">
            <Route index element={<Navigate to={defaultCourseId} />} />
            <Route path=":courseId/*" element={<Courses />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default Kanbas;

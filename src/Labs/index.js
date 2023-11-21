import { Routes, Route, Link, Navigate } from "react-router-dom";
import Assignment3 from "./a3";
import Assignment5 from "./a5";

function Labs() {
  return (
    <div className="container">
      <h1>Labs</h1>
      <Link to="a3">Assignment 3</Link>
      <Link to="a5">Assignment 5</Link>
      <Routes>
        <Route path="/" element={<Navigate to="a3" />} />
        {/* <Route path="/" element={<Assignment3 />} /> */}
        <Route path="a3" element={<Assignment3 />} />
        <Route path="a5" element={<Assignment5 />} />
      </Routes>
    </div>
  );
}

export default Labs;

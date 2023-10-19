import { Link } from "react-router-dom";
import "./index.css";

function CourseHeader({ courseId, courseNumber, path }) {
  return (
    <header className="course-header">
      <div className="course-header__inner">
        <nav aria-label="breadcrumb" className="fs-5">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link
                to={`/kanbas/courses/${courseId}/home`}
                className="kanbas-link"
              >
                {courseNumber}
              </Link>
            </li>
            {path.map(
              (item) =>
                item && (
                  <li
                    key={item}
                    className="breadcrumb-item active text-dark"
                    aria-current="page"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </li>
                )
            )}
          </ol>
        </nav>
      </div>
      <hr />
    </header>
  );
}

export default CourseHeader;

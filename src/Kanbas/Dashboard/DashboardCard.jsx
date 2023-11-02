import { Link } from "react-router-dom";
import { FaEllipsisVertical, FaFilePen } from "react-icons/fa6";
import "./index.css";

function DashboardCard({ course, setCourse, deleteCourse }) {
  return (
    <div className="card dashboard-card">
      <Link to={`/kanbas/courses/${course._id}`}>
        <div className="card-header bg-primary">
          <div className="float-end">
            <FaEllipsisVertical className="fa-solid fa-ellipsis-vertical text-light" />
          </div>
        </div>
      </Link>
      <div className="card-body overflow-hidden d-flex flex-column">
        <Link to={`/kanbas/courses/${course._id}`}>
          <div className="card-text dashboard-card__title overflow-ellipses">
            {course.name}
          </div>
          <div className="card-text dashboard-card__subtitle overflow-ellipses">
            {course.number}
          </div>
          <div className="card-text dashboard-card__term overflow-ellipses">
            {course.startDate} — {course.endDate}
          </div>
          <FaFilePen className="fa-solid fa-file-pen dashboard-card__icon" />
        </Link>
        <div className="d-flex gap-1 mt-3">
          <button
            className="btn btn-warning"
            onClick={(event) => {
              event.preventDefault();
              setCourse(course);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={(event) => {
              event.preventDefault();
              deleteCourse(course._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;

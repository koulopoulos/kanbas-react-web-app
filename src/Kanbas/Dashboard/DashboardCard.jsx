import { Link } from "react-router-dom";
import { FaEllipsisVertical, FaFilePen } from "react-icons/fa6";
import "./index.css";

function DashboardCard({
  courseId,
  courseName,
  courseNumber,
  courseStartDate,
  courseEndDate,
}) {
  return (
    <div className="card dashboard-card">
      <Link to={`/kanbas/courses/${courseId}`}>
        <div className="card-header bg-primary">
          <div className="float-end">
            <FaEllipsisVertical className="fa-solid fa-ellipsis-vertical text-light" />
          </div>
        </div>
      </Link>
      <div className="card-body overflow-hidden">
        <Link to={`/kanbas/courses/${courseId}`}>
          <div className="card-text dashboard-card__title overflow-ellipses">
            {courseName}
          </div>
          <div className="card-text dashboard-card__subtitle overflow-ellipses">
            {courseNumber}
          </div>
          <div className="card-text dashboard-card__term overflow-ellipses">
            {courseStartDate} — {courseEndDate}
          </div>
          <FaFilePen className="fa-solid fa-file-pen dashboard-card__icon" />
        </Link>
      </div>
    </div>
  );
}

export default DashboardCard;

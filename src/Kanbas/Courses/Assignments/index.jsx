import { Link, useParams } from "react-router-dom";
import {
  FaCircleCheck,
  FaGripVertical,
  FaPlus,
  FaEllipsisVertical,
  FaFilePen,
} from "react-icons/fa6";
import "./index.css";
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.getAssignmentsByCourseId(courseId);

  return (
    <section className="assignments-section">
      <div>
        <input
          type="text"
          placeholder="Search for Assignment"
          className="form-control d-inline w-25 p-3 pt-2 pb-2"
        />
        <div className="float-end">
          <button
            className="btn btn-light border me-1 d-inline-flex align-items-center gap-1"
            type="button"
          >
            <FaPlus />
            Group
          </button>
          <button
            className="btn btn-danger me-1 d-inline-flex align-items-center gap-1"
            type="button"
          >
            <FaPlus />
            Assignment
          </button>
          <button className="btn btn-light border" type="button">
            <FaEllipsisVertical />
          </button>
        </div>
      </div>
      <hr />
      <ul className="list-group rounded-0">
        <li className="list-group-item list-group-item-secondary p-3">
          <FaGripVertical className="me-2" />
          <span className="d-inline-block mt-1 fs-6 fw-bold">Assignments</span>
          <div className="float-end">
            <span className="badge border border-secondary text-dark rounded-pill pt-2 pb-2 pe-3 ps-3 fs-6">
              40% of Total
            </span>
            <FaPlus className="fa fa-plus ms-1 text-secondary" />
            <FaEllipsisVertical className="fa fa-ellipsis-vertical ms-2 text-secondary" />
          </div>
        </li>
        {assignments &&
          assignments.map((assignment) => (
            <li className="list-group-item list-group-item--border-start-success p-3">
              <div className="d-inline-flex align-items-center">
                <FaGripVertical className="me-3" />
                <FaFilePen className="text-danger me-3" />
                <div className="d-inline-block">
                  <Link
                    to={assignment._id}
                    className="kanbas-link--inherit fs-5 fw-bold"
                  >
                    {assignment.title}
                  </Link>
                  <br />
                  <span className="text-secondary">{assignment.course}</span>
                </div>
              </div>
              <div className="float-end mt-3">
                <FaCircleCheck className="text-success me-3" />
                <FaEllipsisVertical />
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Assignments;

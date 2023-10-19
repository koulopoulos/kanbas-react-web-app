import { FaCircleCheck, FaEllipsisVertical } from "react-icons/fa6";

function ModuleButtons() {
  return (
    <>
      <button className="btn btn-secondary rounded-1 me-1">Collapse All</button>
      <button className="btn btn-secondary rounded-1 me-1">
        View Progress
      </button>
      <div className="dropdown d-inline me-1">
        <button
          className="btn btn-secondary rounded-1 dropdown-toggle d-inline-flex align-items-center gap-1"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaCircleCheck className="me-1" />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Publish All
            </a>
          </li>
        </ul>
      </div>
      <button className="btn btn-danger rounded-1 me-1">Module</button>
      <button className="btn btn-secondary border rounded-1 me-1">
        <FaEllipsisVertical className="fa fa-ellipsis-vertical" />
      </button>
    </>
  );
}

export default ModuleButtons;

import {
  FaCircleCheck,
  FaGripVertical,
  FaPlus,
  FaEllipsisVertical,
} from "react-icons/fa6";

function ModuleList({ modules }) {
  return (
    modules &&
    modules.map((module) => (
      <ul className="list-group list-group-collapse module-group rounded-0">
        <li className="list-group-item list-group-item-secondary p-3">
          <FaGripVertical className="fa-solid fa-grip-vertical me-3" />
          <span className="text-dark">{module.name}</span>
          <div className="float-end">
            <FaCircleCheck className="fa-solid fa-circle-check text-success me-3" />
            <FaPlus className="fa-solid fa-plus text-secondary me-3" />
            <FaEllipsisVertical className="fa-solid fa-ellipsis-vertical text-secondary" />
          </div>
        </li>
        {module.description && (
          <li className="list-group-item">
            <ul className="list-group">
              <li className="list-group-item p-3">
                <FaGripVertical className="fa-solid fa-grip-vertical me-3" />
                {module.description}
                <div className="float-end">
                  <FaCircleCheck className="fa-solid fa-circle-check text-success me-3" />
                  <FaEllipsisVertical className="fa-solid fa-ellipsis-vertical" />
                </div>
              </li>
            </ul>
          </li>
        )}
      </ul>
    ))
  );
}

export default ModuleList;

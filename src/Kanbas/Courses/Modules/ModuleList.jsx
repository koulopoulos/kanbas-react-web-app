import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";
import {
  FaCircleCheck,
  FaGripVertical,
  FaPlus,
  FaEllipsisVertical,
} from "react-icons/fa6";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [dispatch, courseId]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    await client.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <>
      <ul className="list-group list-group-collapse module-group rounded-0">
        <li className="list-group-item list-group-item-primary p-3 d-flex align-items-center justify-content-between">
          <div>
            <FaGripVertical className="fa-solid fa-grip-vertical me-3" />
            <span className="text-dark">Add new module</span>
          </div>
          <div>
            <button
              className="btn btn-primary btn-sm me-3"
              onClick={handleUpdateModule}
            >
              Update
            </button>
            <button
              className="btn btn-success btn-sm"
              onClick={handleAddModule}
            >
              Add
            </button>
          </div>
        </li>
        <li className="list-group-item d-flex flex-column gap-2 p-3">
          <input
            className="form-control"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            className="form-control"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>
      </ul>
      {modules &&
        modules
          .filter((module) => module.course === courseId)
          .map((module) => (
            <ul className="list-group list-group-collapse module-group rounded-0">
              <li className="list-group-item list-group-item-secondary p-3">
                <FaGripVertical className="fa-solid fa-grip-vertical me-3" />
                <span className="text-dark">{module.name}</span>
                <div className="float-end">
                  <button
                    class="btn btn-warning btn-sm me-3"
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>
                  <button
                    class="btn btn-danger btn-sm me-3"
                    onClick={() => handleDeleteModule(module._id)}
                  >
                    Delete
                  </button>
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
          ))}
    </>
  );
}

export default ModuleList;

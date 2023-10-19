import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaEllipsisVertical, FaCircleCheck, FaPlus } from "react-icons/fa6";
import db from "../../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.getAssignmentById(assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/kanbas/courses/${courseId}/assignments`);
  };

  return (
    <section className="edit-assignment-section">
      <div>
        <div className="float-end">
          <span className="text-success fw-bold me-2">
            <FaCircleCheck className="me-1" />
            Published
          </span>
          <button className="btn btn-light border" type="button">
            <FaEllipsisVertical />
          </button>
        </div>
      </div>
      <hr />
      <form action="./index.html" id="edit-assignment">
        <div className="row mb-4">
          <div className="col">
            <label for="edit-assignment-name" className="mb-2">
              Assignment Name
            </label>
            <input
              id="edit-assignment-name"
              defaultValue={assignment?.title}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <textarea
              id="edit-assignment-description"
              rows="2"
              cols="30"
              placeholder="This is the assignment description."
              className="form-control"
            ></textarea>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col col-1"></div>
          <div className="col col-3 text-end">
            <label for="edit-assignment-points" className="mt-1">
              Points
            </label>
          </div>
          <div className="col col-6">
            <input
              type="text"
              id="edit-assignment-points"
              defaultValue="100"
              className="form-control"
            />
          </div>
          <div className="col col-2"></div>
        </div>
        <div className="row mb-4">
          <div className="col col-1"></div>
          <div className="col col-3 text-end">
            <label for="edit-assignment-group" className="mt-1">
              Assignment Group
            </label>
          </div>
          <div className="col col-6">
            <select id="edit-assignment-group" className="form-select">
              <option selected value="ASSIGNMENTS">
                ASSIGNMENTS
              </option>
            </select>
          </div>
          <div className="col col-2"></div>
        </div>
        <div className="row mb-4">
          <div className="col col-1"></div>
          <div className="col col-3 text-end">
            <label for="edit-assignment-display-grade" className="mt-1">
              Display Grade as
            </label>
          </div>
          <div className="col col-6">
            <select id="edit-assignment-display-grade" className="form-select">
              <option selected value="PERCENTAGE">
                Percentage
              </option>
            </select>
          </div>
          <div className="col col-2"></div>
        </div>
        <div className="row mb-4">
          <div className="col col-4"></div>
          <div className="col col-6">
            <input
              type="checkbox"
              value="IS_INCLUDED_FINAL_GRADE"
              className="form-check-input me-1"
              name="is-included-final-grade"
              id="is-included-final-grade"
            />
            <label for="is-included-final-grade" className="ms-1">
              Do not count this assignment towards the final grade
            </label>
          </div>
          <div className="col col-2"></div>
        </div>
        <div className="row mb-4">
          <div className="col col-1"></div>
          <div className="col col-3 text-end">
            <label for="edit-assignment-submission-type" className="mt-1">
              Submission Type
            </label>
          </div>
          <div className="col col-6">
            <div className="border p-4 rounded">
              <select
                id="edit-assignment-submission-type"
                className="form-select mb-4"
              >
                <option selected value="ONLINE">
                  Online
                </option>
              </select>
              <label className="d-block fw-bold mb-4">
                Online Entry Options
              </label>
              <input
                type="checkbox"
                value="TEXT_ENTRY"
                className="form-check-input mb-4 me-1"
                name="check-online-entry-opt"
                id="check-text-entry"
              />
              <label for="check-text-entry" className="form-check-label">
                Text Entry
              </label>
              <br />
              <input
                type="checkbox"
                value="WEBSITE_URL"
                className="form-check-input mb-4 me-1"
                name="check-online-entry-opt"
                id="check-website-url"
              />
              <label for="check-website-url" className="form-check-label">
                Website URL
              </label>
              <br />
              <input
                type="checkbox"
                value="MEDIA_RECORDINGS"
                className="form-check-input mb-4 me-1"
                name="check-online-entry-opt"
                id="check-media-recordings"
              />
              <label for="check-media-recordings" className="form-check-label">
                Media Recordings
              </label>
              <br />
              <input
                type="checkbox"
                value="STUDENT_ANNOTATION"
                className="form-check-input mb-4 me-1"
                name="check-online-entry-opt"
                id="check-student-annotation"
              />
              <label
                for="check-student-annotation"
                className="form-check-label"
              >
                Student Annotation
              </label>
              <br />
              <input
                type="checkbox"
                value="FILE_UPLOADS"
                className="form-check-input mb-4 me-1"
                name="check-online-entry-opt"
                id="check-file-uploads"
              />
              <label for="check-file-uploads" className="form-check-label">
                File Uploads
              </label>
            </div>
          </div>
          <div className="col col-2"></div>
        </div>
        <div className="row mb-4">
          <div className="col col-1"></div>
          <div className="col col-3 text-end">
            <label className="mt-1">Assign</label>
          </div>
          <div className="col col-6">
            <div className="border rounded overflow-hidden">
              <div className="p-4">
                <label for="edit-assignment-assign-to" className="fw-bold mb-2">
                  Assign to
                </label>
                <input
                  id="edit-assignment-assign-to"
                  defaultValue="Everyone"
                  className="form-control mb-4"
                />
                <label for="edit-assignment-due-date" className="fw-bold mb-1">
                  Due
                </label>
                <input
                  type="date"
                  id="edit-assignment-due-date"
                  defaultValue="2021-01-01"
                  className="form-control mb-4"
                />
                <div className="row">
                  <div className="col">
                    <label
                      for="edit-assignment-available-date"
                      className="fw-bold mb-1"
                    >
                      Available from
                    </label>
                    <input
                      type="date"
                      id="edit-assignment-available-date"
                      defaultValue="2021-01-01"
                      className="form-control mb-4"
                    />
                  </div>
                  <div className="col">
                    <label
                      for="edit-assignment-until-date"
                      className="fw-bold mb-1"
                    >
                      Until
                    </label>
                    <input
                      type="date"
                      id="edit-assignment-until-date"
                      defaultValue="2021-01-01"
                      className="form-control mb-4"
                    />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn bg-light w-100 pe-4 ps-4 pt-3 pb-3 border-top text-center rounded-0 d-flex align-items-center justify-content-center gap-1"
              >
                <FaPlus />
                <span>Add</span>
              </button>
            </div>
          </div>
          <div className="col col-2"></div>
        </div>
        <hr />
        <input
          type="checkbox"
          value="NOTIFY_CHANGE_ASSIGNMENT"
          className="form-check-input me-1"
          name="notify-change-assignment"
          id="check-notify-change-assignment"
        />
        <label for="check-notify-change-assignment" className="w-50">
          Notify users that this content has changed
        </label>
        <div className="float-end">
          <Link
            to={`/kanbas/courses/${courseId}/assignments`}
            className="btn btn-light border-secondary text-dark me-1"
          >
            Cancel
          </Link>
          <button onClick={handleSave} className="btn btn-danger" type="submit">
            Save
          </button>
        </div>
      </form>
    </section>
  );
}

export default AssignmentEditor;

import "./index.css";

function AddCourseCard({ course, setCourse, addNewCourse, updateCourse }) {
  return (
    <div className="card dashboard-card overflow-hidden">
      <div className="card-body overflow-hidden d-flex flex-column justify-content-between align-items-start gap-3">
        <div>
          <input
            value={course.name}
            className="form-control mb-2"
            type="text"
            placeholder="Course Name"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control mb-2"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </div>
        <div className="d-flex gap-1 mt-3">
          <button className="btn btn-success" onClick={addNewCourse}>
            Add
          </button>
          <button className="btn btn-primary" onClick={updateCourse}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCourseCard;

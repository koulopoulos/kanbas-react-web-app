import "./index.css";
import DashboardCard from "./DashboardCard";
import AddCourseCard from "./AddCourseCard";
import PrimaryHeader from "../PrimaryHeader";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <>
      <PrimaryHeader>
        <h1>Dashboard</h1>
      </PrimaryHeader>
      <main className="main">
        <section className="dashboard-section p-2">
          <h2 className="fs-3">Published Courses (7)</h2>
          <hr />
          <div className="d-flex flex-row flex-wrap dashboard-card-wrapper">
            {courses &&
              courses.map((c) => (
                <DashboardCard
                  key={c._id}
                  course={c}
                  setCourse={setCourse}
                  deleteCourse={deleteCourse}
                />
              ))}
            <AddCourseCard
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              updateCourse={updateCourse}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Dashboard;

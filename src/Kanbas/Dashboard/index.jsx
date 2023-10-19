import db from "../Database";
import "./index.css";
import DashboardCard from "./DashboardCard";
import PrimaryHeader from "../PrimaryHeader";

function Dashboard() {
  const courses = db.courses;
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
              courses.map((course) => (
                <DashboardCard
                  key={course._id}
                  courseId={course._id}
                  courseName={course.name}
                  courseNumber={course.number}
                  courseStartDate={course.startDate}
                  courseEndDate={course.endDate}
                />
              ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Dashboard;

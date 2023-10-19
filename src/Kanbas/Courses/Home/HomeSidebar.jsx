import {
  FaBan,
  FaCircleCheck,
  FaFileImport,
  FaCircleArrowRight,
  FaCrosshairs,
  FaChartColumn,
  FaBullhorn,
  FaBell,
  FaCalendar,
} from "react-icons/fa6";
import { noop } from "../../utils";

function HomeSidebar() {
  return (
    <section className="home-sidebar-section d-none d-xl-block">
      <h2 className="fs-6">Course Status</h2>
      <div className="d-flex mb-4">
        <button
          onClick={noop}
          className="btn btn-light rounded-0 border flex-1 d-flex align-items-center justify-content-center"
        >
          <FaBan className="text-danger me-2" />
          Unpublish
        </button>
        <button
          onClick={noop}
          className="btn btn-success disabled rounded-0 flex-1 d-flex align-items-center justify-content-center"
        >
          <FaCircleCheck className="me-2" />
          Published
        </button>
      </div>
      <ul className="kanbas-list d-flex flex-column mb-4">
        <li className="mb-2">
          <button
            onClick={noop}
            className="btn btn-light w-100 text-start border d-flex align-items-center"
          >
            <FaFileImport className="me-2" />
            Import Existing Content
          </button>
        </li>
        <li className="mb-2">
          <button
            onClick={noop}
            className="btn btn-light w-100 text-start border d-flex align-items-center"
          >
            <FaCircleArrowRight className="me-2" />
            Import From Commons
          </button>
        </li>
        <li className="mb-2">
          <button
            onClick={noop}
            className="btn btn-light w-100 text-start border d-flex align-items-center"
          >
            <FaCrosshairs className="me-2" />
            Choose Home Page
          </button>
        </li>
        <li className="mb-2">
          <button
            onClick={noop}
            className="btn btn-light w-100 text-start border d-flex align-items-center"
          >
            <FaChartColumn className="me-2" />
            View Course Stream
          </button>
        </li>
        <li className="mb-2">
          <button
            onClick={noop}
            className="btn btn-light w-100 text-start border d-flex align-items-center"
          >
            <FaBullhorn className="me-2" />
            New Announcement
          </button>
        </li>
        <li className="mb-2">
          <button
            onClick={noop}
            className="btn btn-light w-100 text-start border d-flex align-items-center"
          >
            <FaChartColumn className="me-2" />
            New Analytics
          </button>
        </li>
        <li className="mb-2">
          <button
            onClick={noop}
            className="btn btn-light w-100 text-start border d-flex align-items-center"
          >
            <FaBell className="me-2" />
            View Course Notifications
          </button>
        </li>
      </ul>
      <div className="d-flex justify-content-between">
        <h2 className="fw-bold fs-6">Coming Up</h2>
        <a href="#" className="kanbas-link">
          <FaCalendar className="fa-solid fa-calendar me-1" />
          View Calendar
        </a>
      </div>
      <hr />
      <ul className="kanbas-list d-flex flex-column">
        <li className="d-flex gap-3">
          <FaCalendar className="fa-solid fa-calendar mt-1" />
          <div>
            <a href="#">Lecture</a>
            <br />
            <span className="text-secondary">
              CS4550.12631.202410 Sep 7 at 11:45am
            </span>
          </div>
        </li>
        <li className="d-flex gap-3">
          <FaCalendar className="fa-solid fa-calendar mt-1" />
          <div>
            <a href="#">Lecture</a>
            <br />
            <span className="text-secondary">
              CS4550.12631.202410 Sep 11 at 11:45am
            </span>
          </div>
        </li>
        <li className="d-flex gap-3">
          <FaCalendar className="fa-solid fa-calendar mt-1" />
          <div>
            <a href="#">Lecture</a>
            <br />
            <span className="text-secondary">
              CS5610 06 SP23 Lecture Sep 11 at 6pm
            </span>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default HomeSidebar;

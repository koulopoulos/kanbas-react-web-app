import ModuleList from "../Modules/ModuleList";
import "./index.css";
import ModuleButtons from "../Modules/ModuleButtons";
import HomeSidebar from "./HomeSidebar";

function Home() {
  return (
    <>
      <section className="home-section">
        <div>
          <div className="float-end">
            <ModuleButtons />
          </div>
        </div>
        <hr />
        <ModuleList />
      </section>
      <HomeSidebar />
    </>
  );
}

export default Home;

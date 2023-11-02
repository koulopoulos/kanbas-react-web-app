import ModuleButtons from "./ModuleButtons";
import ModuleList from "./ModuleList";
import "./index.css";

function Modules() {
  return (
    <>
      <section className="module-section">
        <div>
          <div className="float-end">
            <ModuleButtons />
          </div>
        </div>
        <hr />
        <ModuleList />
      </section>
    </>
  );
}

export default Modules;

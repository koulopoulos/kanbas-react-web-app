import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
  const LAB_BASE = process.env.REACT_APP_LAB_BASE;
  return (
    <div>
      <h1>Assignment 5</h1>
      <WorkingWithArrays />
      <WorkingWithObjects />
      <EncodingParametersInURLs />
      <div className="list-group">
        <a href={`${LAB_BASE}/a5/welcome`} className="list-group-item">
          Welcome
        </a>
      </div>
    </div>
  );
}

export default Assignment5;

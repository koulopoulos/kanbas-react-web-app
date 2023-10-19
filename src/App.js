import Kanbas from "./Kanbas";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="list-group">
              <Link className="list-group-item" to="/Labs">
                Labs
              </Link>
              <Link className="list-group-item" to="/Hello">
                Hello
              </Link>
              <Link className="list-group-item" to="/Kanbas">
                Kanbas
              </Link>
            </div>
          }
        />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
        <Route path="/Hello" element={<HelloWorld />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

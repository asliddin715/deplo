import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FurnitureList from "./components/FurnitureList";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/sofa">Sofalar</Link>
            </li>
            <li>
              <Link to="/chair">Stullar</Link>
            </li>
            <li>
              <Link to="/bed">Karavotlar</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/:category" component={FurnitureList} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

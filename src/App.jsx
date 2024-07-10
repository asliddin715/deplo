import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import Sofa from "./components/sofa";
import Chair from "./components/chair";
import Bed from "./components/bed";


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/sofa">Sofalar</NavLink>
            </li>
            <li>
              <NavLink to="/chair">Stullar</NavLink>
            </li>
            <li>
              <NavLink to="/bed">Karavotlar</NavLink>
            </li>
          </ul>
        </nav>
         <Routes>
          <Route path="/bed" Component={Bed}/>
          <Route path="/sofa" Component={Sofa}/>
          <Route path="/chair" Component={Chair}/>
         </Routes>
      </div>
    </Router>
  );
};

export default App;

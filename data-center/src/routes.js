// App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

import Posts from "./Components/Posts";

export default function AppRoutes() {
  return (
    <Router>
      {/* <div> */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/" element={<Posts />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}

 

import React from "react";
import styled from "styled-components";
import "./App.css";
import Week1 from "./Components/Week1";
import Week2 from "./Components/Week2";
import Week3 from "./Components/Week3";
import Week4 from "./Components/Week4";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const StyledWrapper = styled.div`
  display: flex;
  alignitems: center;
  aligncontent: center;
`;

const Home = () => (
  <nav>
    <h1> Welcome to Interaction Design!</h1>
    <ul>
      <li>
        <Link to="/week-1"> Week 1</Link>
      </li>

      <li>
        <Link to="/week-2"> Week 2</Link>
      </li>
      <li>
        <Link to="/week-3"> Week 3</Link>
      </li>
      <li>
        <Link to="/week-4"> Week 4</Link>
      </li>
    </ul>
  </nav>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/week-1">
          <Week1 />
        </Route>
        <Route path="/week-2">
          <Week2 />
        </Route>
        <Route path="/week-3">
          <Week3 />
        </Route>
        <Route path="/week-4">
          <Week4 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

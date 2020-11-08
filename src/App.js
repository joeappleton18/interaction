import React from "react";
import styled from "styled-components";
import "./App.css";
import Week1 from "./Components/Week1";
import Week2 from "./Components/Week2";
import Week3 from "./Components/Week3";
import Week4 from "./Components/Week4";
import Week5 from "./Components/Week5";
import Week6 from "./Components/Week6";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const StyledNav = styled.ul`
  margin: 0 auto;
  justify-content: center;
  height: 50px;
  padding: 90px;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.7);
  width: 100px;
  li {
    list-style: none;
    margin-right: 2%;
  }
`;

const StyledHeader = styled.h1`
  text-align: center;
`;

const Home = () => (
  <nav>
    <StyledHeader> Welcome to Interaction Design!</StyledHeader>
    <StyledNav>
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
      <li>
        <Link to="/week-5"> Week 5</Link>
      </li>
      <li>
        <Link to="/week-6"> Week 6</Link>
      </li>


    </StyledNav>
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
        <Route path="/week-5">
          <Week5 />
        </Route>
        <Route path="/week-6">
          <Week6 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

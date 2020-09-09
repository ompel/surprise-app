import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

// Pages
import { Home, Stats, FourOhFour } from "./pages";

// Components
import Header from "./components/Header";
// const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/stats">
          <Stats />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <FourOhFour />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

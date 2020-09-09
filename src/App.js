import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

// Pages
import { Home, Stats, Response, FourOhFour } from "./pages";

// Components
import Header from "./components/Header";
import { ResponseProvider } from "./components/ResponseContext";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/stats">
          <Stats />
        </Route>
        <Route exact path="/response">
          <ResponseProvider>
            <Response />
          </ResponseProvider>
        </Route>
        <Route exact path="/">
          <ResponseProvider>
            <Home />
          </ResponseProvider>
        </Route>
        <Route path="*">
          <FourOhFour />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BuildWorkout from "./pages/BuildWorkout"
import Research from "./pages/Research";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
    <div>
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/buildworkout" component={BuildWorkout}/>
          <Route exact path="/research" component={Research}/>
          <Route path="*" component={NotFound}/>
        </Switch>
    </div>

    </Router>
  );
}

export default App;

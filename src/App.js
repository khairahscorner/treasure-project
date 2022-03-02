import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import * as Pages from "./pageloader";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Pages.Home} />
        <Route path="/members" component={Pages.Members} />
        <Route exact path="/songs" component={Pages.Songs} />
        <Route exact path="/dramas" component={Pages.Dramas} />
        <Route exact path="/gallery" component={Pages.Gallery} />
        <Route path="/:video/:songId" component={Pages.SingleSong} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};


export default App;
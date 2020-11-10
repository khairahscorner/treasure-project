import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import * as Pages from "./pageloader";

class App extends Component {

  render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Pages.Home} />
            <Route path="/members" component={Pages.Members} />
            <Route path="/songs" component={Pages.Songs} />
            <Route path="/songs/:songId" component={Pages.SingleSong} />
          </Switch>
        </Router>
      );
  }
}


export default App;

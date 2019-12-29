import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import PhotoList from "./PhotoList";
import PhotoDetails from "./PhotoDetails";

class App extends Component {
  render() {
    return (
      <div>
        <h4>Name : Nitin Sirohi</h4>
        <h4>Email : nitinsirohi927@gmail.com</h4>
        <section>
          <Switch>
            <Route exact path="/" component={PhotoList} />
            <Route path="/:photo_id" component={PhotoDetails} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;

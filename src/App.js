import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";

import ChatBotcomponent from "./chatbot/ChatBotcomponent";

function App() {
  return (
    <Router>
      {" "}
      <div className="app">
        <img id="background" src="images/background.jpg" />
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
            <ChatBotcomponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

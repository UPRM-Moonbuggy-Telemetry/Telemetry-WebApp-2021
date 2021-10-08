import React from "react";
import logo from "./logo.svg";
import "./App.css";

//new imports
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// pages
import Home from "./pages/home/home";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>{!data ? "Loading..." : data}</p>
    //   </header>
    // </div>

    //Do the switch
    <BrowserRouter>
      <Switch>
        <Route path="/" component= {Home} exact/>
        <Route path="/analytics" component= {Home} exact/>
        <Route path="/aboutus" component= {Home} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
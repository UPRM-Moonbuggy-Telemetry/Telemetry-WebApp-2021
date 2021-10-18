import React from "react";
import "./App.css";

//new imports
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Componets
import Navbar from "./components/Navbar";
import StatusBar from "./components/StatusBar/StatusBar";

// pages
import Home from "./pages/home/home";
import Analytics from "./pages/analytics/analytics";
import AboutUs from "./pages/aboutUs/aboutUs";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <BrowserRouter>
    <StatusBar/>
    <Navbar/>
      <Switch>
        <Route path="/" component= {Home} exact/>
        <Route path="/analytics" component= {Analytics} exact/>
        <Route path="/aboutus" component= {AboutUs} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
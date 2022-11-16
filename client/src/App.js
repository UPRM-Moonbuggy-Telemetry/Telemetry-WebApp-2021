import React from "react";
import "./App.css";

// New imports
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
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
      <Footer/>
      <Switch>
        <Route path="/" component= {Home} exact/>
        <Route path="/analytics" component= {Analytics} exact/>
        <Route path="/aboutus" component= {AboutUs} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
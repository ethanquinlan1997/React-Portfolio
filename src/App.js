import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Views/Home'
import Contact from './Views/Contact'
import Projects from "./Views/Projects";

// import Button from '@mui/material/Button';

export default function MyApp() {
  return (
    <div>
      
      <Router>
      <Header />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
           </Route>
           <Route path="/contact">
            <Contact />
           </Route>
        </Switch>
     
    
  


        
      <Footer />
      </Router>

      
      {/* <Button variant="contained">Hello World</Button> */}
    </div>
  );
}

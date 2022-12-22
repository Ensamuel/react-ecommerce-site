import "./App.css";
import React from "react";
import Home from "./pages/Homepage/Home";
import Products from "./pages/Productspage/Products";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sales from "./pages/Sales/Sales";
import Card from "./pages/Card/Card";
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:id">
            <Sales/>
          </Route>
          <Route path="/card">
            <Card/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

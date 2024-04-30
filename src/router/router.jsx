import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "../App";
import PageNotFound from "../PageNotFound";
import NavBar from "../Navbar";
import Landing from "../Components/Landing";
import Login from "../Components/Login";
import Dashboard from "../Components/Dashboard";
const RouterComponent = () => {
  return (
    <Router>
      {/* <NavBar/> */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/app' element={<App />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "../App";
import PageNotFound from '../PageNotFound';
import NavBar from "../Navbar";
const RouterComponent = () => {
  return (
    <Router>
        <NavBar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
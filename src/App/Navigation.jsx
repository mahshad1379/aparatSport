import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PAGE_DATA from "../config/route";
import Header from "../component/Header"
import Footer from "../component/Footer"

const Navigation = () => {
  return (
    <>
        <Router>
          <Header/>
            <Routes>
              {PAGE_DATA.map((data, index) => {
                return (
                  <Route
                    key={`route_data_${index}`}
                    path={data.path}
                    element={data.element}
                    exact
                  />
                );
              })}
            </Routes>
            <Footer/>
        </Router>
    </>
  );
};

export default Navigation;

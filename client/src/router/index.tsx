import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/layout";

const Router = () => {
  return (
    <Routes>
      <Layout>
        <Route element={<Home />} />
      </Layout>
    </Routes>
  );
};

export default Router;

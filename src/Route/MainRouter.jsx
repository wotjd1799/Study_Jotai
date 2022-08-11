import React from "react";
import { Route, Routes } from "react-router";
import Main from "../components/Main/Main";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default MainRouter;

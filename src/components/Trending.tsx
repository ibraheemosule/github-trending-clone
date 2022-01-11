import React from "react";
import Footer from "./footer/Footer";
import CardWrapper from "./CardWrapper";
import Error404 from "./Error404/Error404";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../store/actions";
import { Routes, Route, Navigate } from "react-router-dom";
import { repositories, developers } from "../assets/urls";

const Trending: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData("repos", repositories));
    dispatch(fetchData("devs", developers));
  }, [dispatch]);

  return (
    <div className="p-0 m-0 text-pry">
      <div className="text-center text-pryCol px-4 py-10 xs:bg-navCol">
        <h1 className=" text-3xl font-bold text-titleCol">Trending</h1>
        <p className="my-2">
          See what the Github community is most excited about today
        </p>
      </div>
      <main className="py-10 px-4 border-navCol border-t">
        {/*ROUTES ARE RENDERED HERE*/}
        <Routes>
          <Route path="/" element={<Navigate to="/repositories" />}></Route>
          <Route />
          <Route path="/repositories" element={<CardWrapper />} />
          <Route path="/developers" element={<CardWrapper />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Trending;

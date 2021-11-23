import React from "react";
import Repositories from "./repositories/Repositories";
import Footer from "./footer/Footer";
import Developers from "./developers/Developers";
import Error404 from "./Error404/Error404";

import { Routes, Route } from "react-router-dom";

const Trending: React.FC = () => {
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
          <Route path="/" element={<Repositories />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Trending;

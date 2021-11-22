import Trending from "./components/Trending";
import { useEffect, useState } from "react";
import { IResponse } from "./ts-types/types";
import Navbar from "./components/nav/Navbar";

const App: React.FC = () => {
  const [repositories] = useState<IResponse[]>([]);

  return (
    <div className="App">
      <Navbar />
      {/*ROUTES ARE RENDERED INSIDE TRENDING COMPONENT*/}
      <Trending />
    </div>
  );
};

export default App;

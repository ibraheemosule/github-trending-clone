import React from "react";
import arrowDown from "../../assets/img/caret-down-outline.svg";
import DevCard from "./DevCard";
import { Link, Navigate } from "react-router-dom";
import { IState, TDevelopers } from "../../ts-types/types";
import { useSelector } from "react-redux";
import Loader from "../Loader";

const Developers: React.FC = () => {
  const error = useSelector((state: IState) => state.error);
  const devs = useSelector((state: IState) => state.developers);

  if (error) return <Navigate to="/error" />;

  return (
    <article className="container">
      <section className="border border-solid border-borderCol xs:bg-navCol rounded-md p-4 -mx-1 -mt-1 text-pryCol rounded-b-none md:flex justify-between">
        <div className="btn-group border rounded-md border-solid border-borderCol overflow-hidden inline-block text-titleCol">
          <button className="capitalize m-0 py-1 px-2  h-full md:py-0.5">
            <Link to="/repositories">repositories</Link>
          </button>
          <button className="capitalize m-0 py-1 px-2 bg-linkCol h-full md:0.5">
            <Link to="/developers">developers</Link>
          </button>
        </div>
        <div className="mt-4 md:mt-0 flex flex-wrap md:justify-between flex-col xs:flex-row text-sm">
          <p className="m-2 mb-0 cursor-pointer hover:text-titleCol">
            Language:{" "}
            <span>
              Any{" "}
              <img
                className="w-3 h-3 inline"
                src={arrowDown}
                alt="arrow down"
              />
            </span>
          </p>
          <p className="m-2 mb-0 cursor-pointer hover:text-titleCol">
            Date range:{" "}
            <span>
              Any{" "}
              <img
                className="w-3 h-3 inline"
                src={arrowDown}
                alt="arrow down"
              />
            </span>
          </p>
        </div>
      </section>
      {devs.length
        ? devs.map((dev: TDevelopers, i: number) => (
            <DevCard key={dev.username} dev={dev} index={i} />
          ))
        : [...new Array(5)].map((val, i) => <Loader key={i} />)}
    </article>
  );
};

export default Developers;

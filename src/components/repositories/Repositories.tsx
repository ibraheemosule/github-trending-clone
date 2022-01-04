import React from "react";
import arrowDown from "../../assets/img/caret-down-outline.svg";
import RepoCard from "./RepoCard";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IState } from "../../ts-types/types";
import Loader from "../Loader";

const Repositories: React.FC = () => {
  const error = useSelector((state: IState) => state.error);
  const repos = useSelector((state: IState) => state.repositories);

  if (error) return <Navigate to="/error" />;
  return (
    <article className="container">
      <section className="border border-solid border-borderCol xs:bg-navCol rounded-md p-4 -mx-1 -mt-1 text-pryCol rounded-b-none md:flex justify-between">
        <div className="border rounded-md border-solid border-borderCol inline-block text-titleCol overflow-hidden">
          <button className="capitalize m-0 py-1 px-2 bg-linkCol h-full md:py-0.5">
            <Link to="/repositories">repositories</Link>
          </button>
          <button className="capitalize m-0 py-1 px-2 h-full md:0.5">
            <Link to="/developers">developers</Link>
          </button>
        </div>
        <div className="mt-4 md:mt-0 flex flex-wrap md:justify-between flex-col xs:flex-row text-sm">
          <p className="m-2 mb-0 cursor-pointer hover:text-titleCol">
            Spoken language:{" "}
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

      {repos.length
        ? repos.map((repo: any) => <RepoCard key={repo.url} repo={repo} />)
        : [...new Array(5)].map(val => <Loader key={val} />)}
    </article>
  );
};

export default Repositories;

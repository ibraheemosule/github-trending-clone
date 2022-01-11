import React from "react";
import arrowDown from "./../assets/img/caret-down-outline.svg";
import RepoCard from "./repositories/RepoCard";
import DevCard from "./developers/DevCard";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IState, TDevelopers } from "./../ts-types/types";
import Loader from "./Loader";

const CardWrapper: React.FC = () => {
  const error = useSelector((state: IState) => state.error);
  const repos = useSelector((state: IState) => state.repositories);
  const devs = useSelector((state: IState) => state.developers);
  const pathName = useLocation().pathname.slice(1);

  if (error) return <Navigate to="/error" />;
  return (
    <article className="container">
      <section className="border border-solid border-borderCol xs:bg-navCol rounded-md p-4 -mx-1 -mt-1 text-pryCol rounded-b-none md:flex justify-between">
        <div className="border rounded-md border-solid border-borderCol inline-block text-titleCol overflow-hidden">
          <button
            style={{ background: pathName === "repositories" ? "#316dca" : "" }}
            className="capitalize m-0 py-1 px-2 h-full md:py-0.5"
          >
            <Link to="/repositories">repositories</Link>
          </button>
          <button
            style={{ background: pathName === "developers" ? "#316dca" : "" }}
            className="capitalize m-0 py-1 px-2 h-full md:0.5"
          >
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

      {pathName === "repositories" && repos.length
        ? repos.map((repo: any) => <RepoCard key={repo.url} repo={repo} />)
        : pathName === "developers" && devs.length
        ? devs.map((dev: TDevelopers, i: number) => (
            <DevCard key={dev.username} dev={dev} index={i} />
          ))
        : [...new Array(5)].map((val, i) => <Loader key={i} />)}
    </article>
  );
};

export default CardWrapper;

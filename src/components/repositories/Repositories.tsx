import React from "react";
import arrowDown from "../../assets/img/caret-down-outline.svg";
import RepoCard from "./RepoCard";
import { Link } from "react-router-dom";
import repositories from "../../github-data/popularRepo";

const Repositories: React.FC = () => {
  console.log(repositories);
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

      {repositories.map(repo => (
        <RepoCard key={repo.rank} repo={repo} />
      ))}
    </article>
  );
};

export default Repositories;

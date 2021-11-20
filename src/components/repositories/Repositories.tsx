import React from "react";
import arrowDown from "../../assets/img/caret-down-outline.svg";
import RepoCard from "./RepoCard";

const Repositories: React.FC = () => {
  return (
    <article className="container">
      <section className="border border-solid border-borderCol xs:bg-navCol rounded-md p-4 -mx-1 -mt-1 text-pryCol rounded-b-none md:flex justify-between">
        <div className="btn-group border rounded-md border-solid border-borderCol inline-block text-titleCol">
          <button className="capitalize m-0 py-1 px-2 bg-linkCol h-full md:py-0.5">
            repositories
          </button>
          <button className="capitalize m-0 py-1 px-2 h-full md:0.5">
            developers
          </button>
        </div>
        <div className="mt-4 md:mt-0 flex flex-wrap justify-between flex-col xs:flex-row text-sm">
          <p className="m-2 mb-0">
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
          <p className="m-2 mb-0">
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
          <p className="m-2 mb-0">
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

      <RepoCard />
    </article>
  );
};

export default Repositories;

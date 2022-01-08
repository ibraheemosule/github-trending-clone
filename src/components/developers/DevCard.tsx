import React from "react";
import repoSVG from "../../assets/img/repo.svg";
import fire from "../../assets/img/fire.svg";
import heart from "../../assets/img/heart.svg";
import { IPropDevelopers } from "../../ts-types/types";

const Repositories: React.FC<IPropDevelopers> = ({ dev, index }) => {
  const { username, name, url, avatar, repo, sponsorUrl } = dev;

  return (
    <section className="card border border-t-0 border-solid border-borderCol rounded-md p-4 -mx-1 -mt-1 text-pryCol rounded-b-none">
      <div className="flex w-full justify-between md:justify-start my-2">
        <div className="flex">
          <span className="text-sm">{index + 1} </span>
          <div className="md:w-14 ml-4 md:pt-14 md:h-14 w-10 h-10 pt-10 relative rounded-full overflow-hidden">
            <img
              src={avatar}
              className="absolute object-cover h-full w-full top-0 left-0"
              alt="avatar"
            />
          </div>
        </div>
        <div className="flex text-sm flex-grow ml-4 justify-between md:justify-around md:ml-0 flex-wrap">
          <div className="mb-2 w-full xs:w-1/3 ml-4">
            <h2 className="text-xl md:text-2xl text-linkCol font-bold">
              <a href={url}>{name}</a>
            </h2>
            <p className="text-base">{username}</p>
          </div>
          <div className=" md:w-1/3 ml-4 md:ml-8 w-full flex-grow order-2 md:order-2 xs:order-3">
            <div className="mb-1">
              <img
                className="w-4 h-4 inline-block -mt-0.5"
                src={fire}
                alt="repo svg"
              />
              <a
                href={repo && repo.url}
                target="_blank"
                rel="noreferrer"
                className="uppercase font-light ml-1"
              >
                popular repo
              </a>
            </div>
            <div className="mt-1">
              <img
                className="w-4 h-4 inline-block -mt-0.5"
                src={repoSVG}
                alt="repo svg"
              />
              <a href={url} className=" ml-1 md:ml-2 text-linkCol font-bold">
                {name}
              </a>
            </div>
            <p className="mt-1 w-full xs:w-3/4 md:w-full mb-2">
              {repo?.description}
            </p>
          </div>
          <div className=" info md:w-1/3 text-left ml-4 xs:ml-0 w-full xs:w-auto xs:text-right order-3 md:order-3 xs:order-2 text-sm">
            {sponsorUrl ? (
              <a href={sponsorUrl}>
                <button className="capitalize py-1 px-2 mr-2 border border-solid inline rounded-md border-borderCol bg-navCol hover:text-titleCol hover:bg-pryCol transition-colors">
                  <img src={heart} className="inline mr-2" alt="star" />
                  sponsor
                </button>
              </a>
            ) : (
              " "
            )}
            <a href={url}>
              <button className="capitalize inline py-1 px-2 border border-solid rounded-md border-borderCol bg-navCol hover:text-titleCol hover:bg-pryCol">
                follow
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repositories;

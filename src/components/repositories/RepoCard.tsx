import repoIcon from "../../assets/img/repo.svg";
import star from "../../assets/img/star.svg";
import fork from "../../assets/img/fork.svg";
import iconDropdown from "../../assets/img/caret-down-outline.svg";
import { IPropRepositories, UserInfo } from "../../ts-types/types";
import "../../assets/styles/overrideStyle.css";

const Repositories: React.FC<IPropRepositories> = ({ repo }) => {
  const {
    author,
    name,
    description,
    language,
    stars,
    forks,
    currentPeriodStars,
    builtBy,
    languageColor,
    url,
  } = repo;

  return (
    <section className=" card border border-t-0 border-solid border-borderCol rounded-md p-4 -mx-1 -mt-1 text-pryCol rounded-b-none">
      <div className="flex w-full justify-between my-2">
        <div>
          <img
            className="w-5 h-5 inline-block -mt-0.5"
            src={repoIcon}
            alt="repo svg"
          />
          <a href={url} className="text-2xl ml-2  text-linkCol">
            {author}/ <span className="font-bold">{name}</span>
          </a>
        </div>
        <div className=" flex self-start flex-shrink-0 text-sm">
          <a href="https://github.com/trending">
            <button className="p-1 px-3 border border-borderCol border-solid rounded-lg bg-navCol rounded-r-none hover:bg-borderCol hover:border-titleCol hover:text-titleCol">
              {" "}
              <img
                className="w-4 h-4 inline -mt-1"
                src={star}
                alt="repo svg"
              />{" "}
              <span className=" star hidden md:inline"> Star</span>
            </button>
          </a>
          <a className="self-stretch" href="https://github.com/trending">
            <button className="starButton p-1 px-3 h-full border border-solid border-borderCol border-l-0 rounded-l-none rounded-lg bg-navCol hover:bg-borderCol hover:border-titleCol hover:text-titleCol">
              <img className="w-3 h-3" src={iconDropdown} alt="dropdown" />
            </button>
          </a>
        </div>
      </div>
      <p className="max-w-2xl w-3/4 lg:w-11/12">{description}</p>
      <div className="flex justify-between flex-wrap text-xs mt-3">
        <div className="flex xs-w-auto mb-2 mr-3">
          <p
            style={{
              color: languageColor !== null ? languageColor : undefined,
            }}
          >
            {language}
          </p>{" "}
          <span className="ml-3">
            {" "}
            <img
              className="w-4 h-4 inline -mt-1"
              src={star}
              alt="repo svg"
            />{" "}
            {stars}
          </span>
          <span className="ml-3">
            {" "}
            <img
              className="w-4 h-4 inline -mt-0.5"
              src={fork}
              alt="fork svg"
            />{" "}
            {forks}
          </span>
        </div>
        <div className=" flex flex-wrap flex-grow xs:justify-between">
          <div className="mb-2 xs:mb-0">
            Built by{" "}
            {builtBy.map((user: UserInfo) => (
              <a key={user.href} href={user.href} className="inline">
                <img
                  className="w-6 h-6 object-cover inline -mt-1 mx-0.5 rounded-full"
                  src={user.avatar}
                  alt="contributor"
                />
              </a>
            ))}
          </div>
          <div className="ml-4 -mt-0.5">
            {" "}
            <img
              className="w-4 h-4 inline -mt-1 mx-0.5 xs-ml-auto"
              src={star}
              alt="fork svg"
            />{" "}
            {currentPeriodStars} stars today
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repositories;

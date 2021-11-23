import repoIcon from "../../assets/img/repo.svg";
import star from "../../assets/img/star.svg";
import fork from "../../assets/img/fork.svg";
import { IProps } from "../../ts-types/types";

const Repositories: React.FC<IProps> = ({ repo }) => {
  const {
    username,
    repositoryName,
    description,
    language,
    totalStars,
    forks,
    starsSince,
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
            {username}/ <span className="font-bold">{repositoryName}</span>
          </a>
        </div>
        <button className="p-1 px-4 border self-start border-pryCol border-solid rounded-lg bg-navCol hover:bg-borderCol hover:border-titleCol hover:text-titleCol">
          {" "}
          <img
            className="w-4 h-4 inline -mt-1"
            src={star}
            alt="repo svg"
          />{" "}
          <span className=" star hidden md:inline"> Star</span>
        </button>
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
            {totalStars}
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
            {builtBy.map(user => (
              <a key={user.avatar} href={user.url} className="inline">
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
              className="w-6 h-6 inline -mt-1 mx-0.5 xs-ml-auto"
              src={star}
              alt="fork svg"
            />{" "}
            {starsSince} stars today
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repositories;

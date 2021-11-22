import React from "react";
import repo from "../../assets/img/repo.svg";
import star from "../../assets/img/star.svg";
import fork from "../../assets/img/fork.svg";
import image from "../../assets/img/image.jpeg";

const Repositories: React.FC = () => {
  return (
    <section className=" card border border-t-0 border-solid border-borderCol rounded-md p-4 -mx-1 -mt-1 text-pryCol rounded-b-none">
      <div className="flex w-full justify-between my-2">
        <div>
          <img
            className="w-5 h-5 inline-block -mt-0.5"
            src={repo}
            alt="repo svg"
          />
          <a href="/" className="text-2xl ml-4 text-linkCol">
            tldraw / <span className="font-bold">tldraw</span>
          </a>
        </div>
        <div className="p-1 px-4 border border-pryCol border-solid rounded-lg bg-navCol">
          {" "}
          <img
            className="w-4 h-4 inline -mt-1"
            src={star}
            alt="repo svg"
          />{" "}
          <span className="hidden md:inline"> Star</span>
        </div>
      </div>
      <p className="max-w-2xl w-3/4 lg:w-11/12">
        A tiny little drawing app dfsfhk fsajlfkcklfs cfjkl alksfjc lajlksj
        dgklsj gfj klsfj lk jdaljf lcsjklfnkl jdxlkcgnv lcxzvlkzlxjfv lcanxzlnfv
        lcznx¬ klj
      </p>
      <div className="flex justify-between flex-wrap text-xs mt-3">
        <div className="flex xs-w-auto mb-2 mr-3">
          <p>Typescript</p>{" "}
          <span className="ml-3">
            {" "}
            <img
              className="w-4 h-4 inline -mt-1"
              src={star}
              alt="repo svg"
            />{" "}
            1,717
          </span>
          <span className="ml-3">
            {" "}
            <img
              className="w-4 h-4 inline -mt-0.5"
              src={fork}
              alt="fork svg"
            />{" "}
            49
          </span>
        </div>
        <div className=" flex flex-wrap flex-grow xs:justify-between">
          <div className="mb-2 xs:mb-0">
            Built by{" "}
            <img
              className="w-6 h-6 object-cover inline -mt-1 mx-0.5 rounded-full"
              src={image}
              alt="contributor"
            />{" "}
            <img
              className="w-6 h-6 inline -mt-1 mx-0.5 rounded-full"
              src={image}
              alt="contributor"
            />{" "}
            <img
              className="w-6 h-6 inline -mt-1 mx-0.5 rounded-full"
              src={image}
              alt="contributor"
            />{" "}
            <img
              className="w-6 h-6 inline -mt-1 mx-0.5 rounded-full"
              src={image}
              alt="contributor"
            />{" "}
          </div>
          <div className="ml-4 -mt-0.5">
            {" "}
            <img
              className="w-6 h-6 inline -mt-1 mx-0.5 xs-ml-auto"
              src={star}
              alt="fork svg"
            />{" "}
            641 stars today
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repositories;

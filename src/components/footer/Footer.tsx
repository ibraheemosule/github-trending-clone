import React from "react";
import github from "../../assets/img/github.svg";

const Footer: React.FC = () => {
  return (
    <footer className="m-4 text-linkCol">
      <ul className="container border-borderCol border-t border-solid py-12 flex flex-wrap lg:flex-nowrap justify-between">
        <div className="flex justify-center text-xs lg:justify-items-start w-full lg:w-auto mb-3 flex-wrap">
          <li className="md:mx-4 mx-1 text-pryCol lg:ml-0">
            &copy; {new Date().getFullYear()} GitHub, Inc
          </li>
          <li className="md:mx-6 mx-1 lg:ml-0">
            <a
              href="https://docs.github.com/en/github/site-policy/github-terms-of-service"
              target="_blank"
              rel="noreferrer"
            >
              Terms
            </a>
          </li>
          <li className="md:mx-6 mx-1  lg:ml-0 ">
            <a
              href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </a>
          </li>
          <li className="md:mx-6 mx-1  lg:ml-0">
            <a
              href="https://github.com/security"
              target="_blank"
              rel="noreferrer"
            >
              Security
            </a>
          </li>
          <li className="md:mx-6 mx-1 lg:ml-0">
            <a
              href="https://www.githubstatus.com/"
              target="_blank"
              rel="noreferrer"
            >
              Status
            </a>
          </li>
          <li className="md:mx-6 mx-1 lg:ml-0 lg:mr-0">
            <a
              href="https://docs.github.com/en"
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </a>
          </li>
        </div>
        <li className="lg:inline hidden mb-3">
          <img className="w-6 h-6" src={github} alt="github icon" />
        </li>
        <div className="flex justify-center w-full text-xs lg:w-auto mb-3 flex-wrap">
          <li className="md:mx-6 mx-1 lg:ml-0">
            <a href="https://support.github.com/?tags=dotcom-footer">
              Contact GitHub
            </a>
          </li>
          <li className="md:mx-6 mx-1 lg:ml-0">
            <a href=" https://github.com/pricing ">Pricing</a>
          </li>
          <li className="md:mx-6 mx-1 lg:ml-0">
            <a href="https://docs.github.com/en">API</a>
          </li>
          <li className="md:mx-6 mx-1 lg:ml-0">
            <a href=" https://services.github.com/">Training</a>
          </li>
          <li className="md:mx-6 mx-1 lg:ml-0">
            <a href=" https://github.blog/">Blog</a>
          </li>
          <li className="md:mx-6 mx-1 lg:ml-0 lg:mr-0">
            <a href="https://github.com/about" target="_blank" rel="noreferrer">
              About
            </a>
          </li>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;

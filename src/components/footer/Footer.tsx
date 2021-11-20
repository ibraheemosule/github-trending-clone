import React from "react";
import github from "../../assets/img/github.svg";

const Footer: React.FC = () => {
  return (
    <footer className="m-4 text-linkCol">
      <ul className="container border-borderCol border-t border-solid py-12 flex flex-wrap lg:flex-nowrap justify-between">
        <li className="flex justify-center text-sm lg:text-xs lg:justify-items-start w-full lg:w-auto mb-3">
          <li className="mx-4 text-pryCol lg:ml-0">
            &copy; {new Date().getFullYear()} GitHub, Inc
          </li>
          <li className="mx-6 lg:ml-0">
            <a href="#">Terms</a>
          </li>
          <li className="mx-6 lg:ml-0 ">
            <a href="#">Privacy</a>
          </li>
          <li className="mx-6 lg:ml-0">
            <a href="#">Security</a>
          </li>
          <li className="mx-6 lg:ml-0">
            <a href="#">Status</a>
          </li>
          <li className="mx-6 lg:ml-0 lg:mr-0">
            <a href="#">Docs</a>
          </li>
        </li>
        <li className="lg:inline hidden mb-3">
          <img className="w-6 h-6" src={github} alt="github icon" />
        </li>
        <li className="flex justify-center w-full text-sm lg:text-xs lg:w-auto mb-3">
          <li className="mx-6 lg:ml-0">Contact GitHub</li>
          <li className="mx-6 lg:ml-0">
            <a href="#">Pricing</a>
          </li>
          <li className="mx-6 lg:ml-0">
            <a href="#">API</a>
          </li>
          <li className="mx-6 lg:ml-0">
            <a href="#">Training</a>
          </li>
          <li className="mx-6 lg:ml-0">
            <a href="#">Blog</a>
          </li>
          <li className="mx-6 lg:ml-0 lg:mr-0">
            <a href="#">About</a>
          </li>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

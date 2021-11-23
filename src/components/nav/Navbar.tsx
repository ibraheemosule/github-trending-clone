import React from "react";
import hamburgerIcon from "../../assets/img/hamburger.svg";
import githubIcon from "../../assets/img/github.svg";
import notificationIcon from "../../assets/img/notificationIcon.svg";
import image from "../../assets/img/image.jpeg";
import signoutIcon from "../../assets/img/signout.svg";
import { useRef, useState } from "react";
import arrowDown from "../../assets/img/caret-down-outline.svg";
import plusIcon from "../../assets/img/plus.svg";

const Navbar: React.FC = () => {
  const menuButton = useRef<HTMLUListElement>(null);
  const [toggle, setToggle] = useState<boolean>(true);

  const showMenu = () => {
    if (menuButton.current !== null) {
      setToggle(!toggle);
      if (toggle) menuButton.current.style.display = "block";
      if (!toggle) menuButton.current.style.display = "none";
    }
  };

  return (
    <nav className="p-0 m-0 text-pry w-100">
      <div className="text-pryCol w-100 xs:bg-navCol">
        <div className="lg:px-8 mb-2 px-4 py-2 mx-auto max-w-screen-2xl justify-between items-center flex flex-wrap md:flex-nowrap text-sm font-bold">
          <img
            onClick={showMenu}
            className="w-6 h-6 md:hidden hover:text-pryCol cursor-pointer"
            src={hamburgerIcon}
            alt="menu icon"
          />
          <img
            className="w-8 h-8 cursor-pointer mr-2"
            src={githubIcon}
            alt="menu icon"
          />
          <ul
            ref={menuButton}
            className="order-last w-full md:w-9/12 mt-4 md:mt-0 divide-y hidden md:flex justify-start items-center md:divide-none md:order-none"
          >
            <li className="w-full py-2 md:w-60">
              <input
                className="w-full min-w-full bg-bgCol border-borderCol border border-solid rounded-md px-2 py-1 mb-2 md:mb-0 focus:border-0"
                type="text"
                name="search"
                placeholder="Search or jump to"
              />
            </li>
            <li className="w-full md:ml-6 border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer md:hidden">
              <a
                href="https://github.com/dashboard"
                target="_blank"
                rel="noreferrer"
              >
                Dashboard
              </a>
            </li>
            <li className="w-full md:ml-6  md:w-auto border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer">
              <a href="https://github.com/pulls">
                <span className="hidden md:inline lg:hidden">Pulls</span>
                <span className="md:hidden lg:inline">Pull requests</span>
              </a>
            </li>
            <li className="w-full md:ml-6   md:w-auto border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer">
              <a href="https://github.com/issues">Issues</a>
            </li>
            <li className="w-full md:ml-6  md:w-auto border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer">
              <a href="https://github.com/marketplace">Marketplace</a>
            </li>
            <li className="w-full md:ml-6  md:w-auto border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer">
              <a href="https://github.com/explore">Explore</a>
            </li>
            <li className="w-full  md:hidden border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer">
              <a href="https://github.com/features/codespaces">Codespaces</a>
            </li>
            <li className="w-full  md:hidden border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer">
              <a href="https://github.com/sponsors/community">Sponsors</a>
            </li>
            <li className="w-full  md:hidden border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer ">
              <a href="github.com/settings">Settings</a>
            </li>
            <li className="w-full  md:hidden border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer">
              <a href="https://github.com/ibraheemsulay">
                {" "}
                <img
                  className="w-6 h-6 object-cover inline -mt-0.5 rounded-full"
                  src={image}
                  alt="contributor"
                />{" "}
                ibraheemsulay
              </a>
            </li>
            <li className="w-full  md:hidden border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer">
              <a href="https://github.com/signout">
                {" "}
                <img
                  className="w-4 h-4 inline -mt-0.5 rounded-full"
                  src={signoutIcon}
                  alt="contributor"
                />{" "}
                Sign out
              </a>
            </li>
          </ul>
          <div className="md:hidden inline-block text-right">
            <img
              className="w-4 h-4 md:ml-auto md:-mr-4 md1:-mr-6 md2:-mr-8 lg:-mr-12 xl:-mr-20 2xl:-mr-24 inline-block hover:text-pryCol cursor-pointer"
              src={notificationIcon}
              alt="menu icon"
            />
          </div>
          <div className="hidden w-16 md:inline md:ml-auto 1xl:mr-4 2xl:mr-8">
            <img
              className="w-4 h-4 md:ml-auto mr-4 inline-block hover:text-pryCol cursor-pointer"
              src={notificationIcon}
              alt="menu icon"
            />
            <img
              className="w-3 h-3 inline  hover:text-pryCol cursor-pointer"
              src={plusIcon}
              alt="more options"
            />
            <img
              className="w-4 h-4 inline ml-1 hover:text-pryCol cursor-pointer"
              src={arrowDown}
              alt="more options"
            />{" "}
          </div>
          <div className="hidden md:inline-block md:ml-4 md1:ml-4 md2:ml-4 lg:ml-4">
            <img
              className="w-6 h-6 object-cover inline -mt-0.5 rounded-full"
              src={image}
              alt="user profile"
            />{" "}
            <img
              className="w-4 h-4 inline hover:text-pryCol cursor-pointer"
              src={arrowDown}
              alt="more options"
            />
          </div>
        </div>
      </div>

      <ul className="container text-sm pb-0 md:px-4 xl:px-0 flex flex-wrap md:flex-nowrap justify-between items-stretch text-pryCol">
        <div className="flex justify-center md:justify-start lg:justify-items-start w-full md:w-auto flex-wrap md:flex-nowrap">
          <li className="md:mx-4 md1:mx-5 md:ml-0 md1:ml-0 mx-1 mt-2 w-full md:w-auto text-center mb-2 md:mb-0 border-b-2 border-bgCol hover:text-titleCol hover:border-solid hover:border-linkCol ">
            {" "}
            <a href="https://github.com/explore">Explore</a>
          </li>
          <li className="md:mx-2 md1:mx-3 mx-2 mt-2 lg:ml-0 pb-2 border-b-2 border-bgCol hover:text-titleCol hover:border-solid hover:border-linkCol">
            <a href="https://github.com/topics">Topics</a>
          </li>
          <li className="md:mx-2 md1:mx-3 mx-1 mt-2 lg:ml-0 pb-2 border-b-2 border-bgCol hover:text-titleCol hover:border-solid hover:border-linkCol">
            <a href="https://github.com/trending">Trending</a>
          </li>
          <li className="md:mx-4 md1:mx-3 mx-2 mt-2  lg:ml-0 pb-2 border-b-2 border-bgCol hover:text-titleCol hover:border-solid hover:border-linkCol">
            <a href="https://github.com/collections">Collections</a>
          </li>
          <li className="md:mx-4 md1:mx-3 mx-2 mt-2 lg:ml-0 pb-2 border-b-2 border-bgCol hover:text-titleCol hover:border-solid hover:border-linkCol">
            <a href="https://github.com/events">Events</a>
          </li>
          <li className="md:mx-4 md1:mx-3 mt-2 mx-2 h-100 block lg:ml-0 cursor-pointer lg:mr-0 pb-2 border-b-2 border-bgCol hover:text-titleCol hover:border-solid hover:border-linkCol">
            <a href="https://github.com/sponsors/community">GitHub Sponsors</a>
          </li>
        </div>
        <button className="capitalize hidden  md:inline py-2 px-3 mb-2 hover:bg-borderCol hover:border-titleCol border border-solid rounded-md border-borderCol bg-navCol hover:text-titleCol">
          get email updates
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;

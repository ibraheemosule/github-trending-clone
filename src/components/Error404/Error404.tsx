import React from "react";
import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <article className="container my-10">
      <section className="border border-solid border-borderCol xs:bg-navCol rounded-md p-4 text-center -mx-1 -mt-1 text-pryCol rounded-b-none">
        <h2 className="font-bold text-3xl text-pryCol text-center mb-8">
          PAGE NOT FOUND
        </h2>

        <button className="capitalize py-1 px-2 mx-4 border border-solid rounded-md border-borderCol bg-navCol hover:text-titleCol hover:bg-pryCol transition-colors">
          <Link to="/">Repositories</Link>
        </button>
        <button className="capitalize py-1 px-2 mx-4 border border-solid rounded-md border-borderCol bg-navCol hover:text-titleCol hover:bg-pryCol transition-colors">
          <Link to="/developers">Developers</Link>
        </button>
      </section>
    </article>
  );
};

export default Error;

import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../ts-types/types";
import { fetchData } from "../../store/actions";
import { repositories, developers } from "../../assets/urls";

const Error: React.FC = () => {
  const error: string = useSelector((state: IState) => state.error);
  const dispatch = useDispatch();

  const fetch = () => {
    dispatch(fetchData("repos", repositories));
    dispatch(fetchData("devs", developers));
  };

  return (
    <article className="container my-10">
      <section className="border border-solid border-borderCol xs:bg-navCol rounded-md p-4 text-center -mx-1 -mt-1 text-pryCol">
        <h2 className="font-bold text-3xl text-pryCol text-center mb-8">
          {error || "PAGE NOT FOUND"}
        </h2>
        {!error ? (
          <div>
            <button className="capitalize py-1 px-2 mx-4 border border-solid rounded-md border-borderCol bg-navCol hover:text-titleCol hover:bg-pryCol transition-colors">
              <Link to="/">Repositories</Link>
            </button>
            <button className="capitalize py-1 px-2 mx-4 border border-solid rounded-md border-borderCol bg-navCol hover:text-titleCol hover:bg-pryCol transition-colors">
              <Link to="/developers">Developers</Link>
            </button>
          </div>
        ) : (
          <button
            onClick={fetch}
            className="capitalize py-1 px-2 mx-4 border border-solid rounded-md border-borderCol bg-navCol hover:text-titleCol hover:bg-pryCol transition-colors"
          >
            <Link to="/">Try Again</Link>
          </button>
        )}
      </section>
    </article>
  );
};

export default Error;

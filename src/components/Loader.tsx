import React from "react";
import styles from "../assets/styles/loader.module.css";

const Loader: React.FC = () => (
  <section className=" card border border-t-0 border-solid border-borderCol rounded-md p-4 -mx-1 -mt-1 text-pryCol rounded-b-none">
    <div className={styles["skeleton-rqlgdmkocb2"]}></div>
  </section>
);

export default Loader;

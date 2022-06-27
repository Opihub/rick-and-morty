import React from "react";
import styles from "../../../styles/Home.module.css";
import useFetch from "react-fetch-hook";

const Characters = () => {
  const { isLoading, data } = useFetch(
    "https://rickandmortyapi.com/api/character"
  );

  if (isLoading) {
    return <>Loading...</>;
  }

  console.log(data.results);

  return (
    <div className={styles.main}>
      {data.results.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default Characters;

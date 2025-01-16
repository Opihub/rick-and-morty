import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import axios from 'axios';

const Characters = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      setData(res.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Attendere...</div>;
  }

  return (
    <div className={styles.main}>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default Characters;

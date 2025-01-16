import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Character = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character/" + router.query.id);
      setData(res.data);
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

    console.log(data);
};

export default Character;

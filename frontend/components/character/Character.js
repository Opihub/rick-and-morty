import useFetch from "react-fetch-hook";
import { useRouter } from "next/router";

const Character = () => {
  const router = useRouter();

  const { isLoading, data } = useFetch(
    `https://rickandmortyapi.com/api/character/${router.query.id}`,
    { depends: [router.isReady] }
  );

  console.log(isLoading, data);
};

export default Character;

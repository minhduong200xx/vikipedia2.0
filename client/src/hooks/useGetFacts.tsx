import axios from "axios";
import { useEffect, useState } from "react";
import { FactType } from "../types/types";

export default function useGetFacts(delay = 1000) {
  const [facts, setFacts] = useState<FactType[]>([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      const data = "";
      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:8080/facts/random",
        headers: {},
        data: data,
      };
      axios
        .request(config)
        .then((response) => {
          setFacts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return facts;
}

import axios from "axios";
import { useEffect, useState } from "react";
import { PageTypes } from "../types/types";

export default function useGetAllPage(delay = 1000) {
  const [pages, setPages] = useState<PageTypes[]>([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      const data = "";
      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:8080/pages/",
        headers: {},
        data: data,
      };
      axios
        .request(config)
        .then((response) => {
          setPages(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return pages;
}

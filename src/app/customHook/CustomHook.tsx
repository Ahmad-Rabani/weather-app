import { useState, useEffect } from "react";
import { RootObject } from "@/type";

const useFetch = (url: string) => {
  const [data, setData] = useState<RootObject>();
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const dataRes = await response.json();
        if (dataRes.location.name) {
          setData(dataRes);
        }
      } catch {
        setData(undefined);
      }
    }
    getData();
  }, [url]);

  return data;
};

export default useFetch;

import { useEffect, useState } from "react";
import axios, { AxiosError, ResponseType } from "axios";

type methods = "get" | "post" | "put" | "delete" | "patch";
interface ApiResponse {
  status: number;
  result: ResponseType | undefined;
  error: AxiosError | undefined;
}
export function useApi(
  endpoint: string,
  method: methods,
  data: any
): ApiResponse {
  const [status, setStatus] = useState<number>(0);
  const [result, setResult] = useState<ResponseType>();
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    const config = {
      method: method,
      maxBodyLength: Infinity,
      url: endpoint,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setStatus(response.status);
        setResult(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  return { status, result, error };
}

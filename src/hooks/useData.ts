import { useEffect, useState } from "react";
import { axiosInstance } from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

// interface Response<T>{
// }

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig,
    dependencies?: any[], isSingleItem: boolean = false ) => {
    const [data, setData] = useState<T[]>([]);
    const [singleData, setSingleData] = useState<T>(<T>{});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
        if (isSingleItem==true) {
          axiosInstance
            .get<T>(endpoint, {
              signal: controller.signal,
              ...requestConfig,
            })
            .then((response)=> {
              setSingleData(response.data);
              setIsLoading(false);
              console.log("Check this single!"+response)
            })
            .catch((error) => {
              if (!(error instanceof CanceledError)) setError(error.message)
            });
          return () => controller.abort();
        }
        else{
          axiosInstance
          .get<T[]>(endpoint, {
            signal: controller.signal,
            ...requestConfig,
          })
          .then((response) => {
            setData(response.data);
            setIsLoading(false);
            console.log("Check this out!"+response);
          })
          .catch((error) => {
          if (!(error instanceof CanceledError)) setError(error.message)
        });
        return () => controller.abort();
        }
      }, dependencies ? [...dependencies] : []
      );

      return {data,singleData,error,isLoading}
};

export default useData;
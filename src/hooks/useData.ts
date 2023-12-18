
// Importerer useEffect og useState hooks fra React og axiosInstance fra api-client. 
// AxiosRequestConfig og CanceledError importeres fra axios.
import { useEffect, useState } from "react";
import { axiosInstance } from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

// Definerer en brugerdefineret hook 'useData' for at hente data fra et API.
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig,
    dependencies?: any[], isSingleItem: boolean = false ) => {
    // Initialiserer state for data, enkeltstående data, fejlmeddelelser og indlæsningsstatus.
    const [data, setData] = useState<T[]>([]);
    const [singleData, setSingleData] = useState<T>(<T>{});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Bruger useEffect hook til at foretage API-anmodninger, når hook'et eller dets afhængigheder opdateres.
    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true); // Sætter indlæsningsstatus til true ved anmodningens start.
        if (isSingleItem==true) {
          axiosInstance
            .get<T>(endpoint, {
              signal: controller.signal,
              ...requestConfig,
            })
            .then((response)=> {
              setSingleData(response.data); // Opdaterer state med det hentede enkeltstående data.
              setIsLoading(false); // Sætter indlæsningsstatus til false efter anmodningen er fuldført.
            })
            .catch((error) => {
              if (!(error instanceof CanceledError)) setError(error.message); // Opdaterer fejlmeddelelse, hvis anmodningen fejler.
            });
          return () => controller.abort(); // Afbrud anmodningen, hvis komponenten afmonteres.
        }
        else{
          axiosInstance
          .get<T[]>(endpoint, {
            signal: controller.signal,
            ...requestConfig,
          })
          .then((response) => {
            setData(response.data); // Opdaterer state med det hentede data.
            setIsLoading(false); // Sætter indlæsningsstatus til false efter anmodningen er fuldført.
          })
          .catch((error) => {
          if (!(error instanceof CanceledError)) setError(error.message); // Opdaterer fejlmeddelelse, hvis anmodningen fejler.
        });
        return () => controller.abort(); // Afbrud anmodningen, hvis komponenten afmonteres.
        }
      }, dependencies ? [...dependencies] : [] // Afhængigheder, der udløser en ny anmodning, når de ændres.
      );

      // Returnerer state variabler for brug i andre komponenter.
      return {data, singleData, error, isLoading}
};

// Eksporterer 'useData' hook for genbrug i andre dele af applikationen.
export default useData;
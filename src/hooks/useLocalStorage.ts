// Importerer useEffect og useState hooks fra React.
import { useEffect, useState } from "react"

// Definerer en brugerdefineret hook 'useLocalStorage' til at arbejde med lokal lagring.
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  // Bruger useState hook til at oprette og opdatere værdien.
  const [value, setValue] = useState<T>(() => {
    // Henter værdien fra lokal lagring baseret på nøglen.
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue); // Parser JSON-værdien, hvis den findes.

    // Returnerer initialværdien; hvis det er en funktion, kaldes den for at få værdien.
    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  // Bruger useEffect hook til at gemme værdien i lokal lagring, når den ændres.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Returnerer værdien og en funktion til at opdatere den, så de kan bruges i andre komponenter.
  return [value, setValue] as [typeof value, typeof setValue];
}

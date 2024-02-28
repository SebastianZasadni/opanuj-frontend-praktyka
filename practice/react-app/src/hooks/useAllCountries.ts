import { useEffect, useState } from 'react';

interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
}

export const useAllCountries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        const filteredCountries = data.map((country: Country) => {
          return {
            name: country.name.common,
            flag: country.flags.png,
          };
        });
        setCountries(filteredCountries);
      } catch (error) {
        console.error(`Error fetching data`, error);
      }
    };
    fetchData();
  }, []);

  return countries;
};

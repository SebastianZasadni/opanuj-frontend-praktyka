import { useEffect, useState } from 'react';

interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
}

export const useCountrySearch = (searchValue: string, searchParams: string) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    if (searchValue) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://restcountries.com/v3.1/${searchParams}/${searchValue}`
          );
          const data = await response.json();
          const filteredCountries =
            data.length &&
            data.map((country: Country) => {
              return {
                name: country.name.common,
                flag: country.flags.png,
                population: country.population,
              };
            });
          setCountries(filteredCountries);
        } catch (error) {
          console.error(`Error fetching data`, error);
        }
      };
      fetchData();
    }
  }, [searchParams, searchValue]);

  return countries;
};

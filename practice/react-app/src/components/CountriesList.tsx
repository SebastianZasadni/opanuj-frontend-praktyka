import { CountryCard } from './CountryCard';

export interface Country {
  name: string;
  flag: string;
  population: number;
}

export const CountriesList = ({ countries }: { countries: Country[] | [] }) => {
  return (
    <ul className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
      {countries.length !== 0 &&
        countries.map((country: Country) => {
          const { name } = country;

          return (
            <li key={name}>
              <CountryCard country={country} />
            </li>
          );
        })}
    </ul>
  );
};

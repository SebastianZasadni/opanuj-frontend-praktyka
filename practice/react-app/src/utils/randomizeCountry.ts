import { Country } from '../components/CountriesList';

export const randomizeCountry = (countries: Country[]) => {
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
};

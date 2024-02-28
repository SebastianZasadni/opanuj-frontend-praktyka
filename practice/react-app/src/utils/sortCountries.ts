import { Country } from '../components/CountriesList';

export const sortCountries = (countries: Country[], sortType: string) => {
  if (countries) {
    if (sortType === 'name') {
      return countries.sort((a: Country, b: Country) =>
        a.name.localeCompare(b.name)
      );
    }
    return countries.sort(
      (a: Country, b: Country) => b.population - a.population
    );
  }
  return [];
};

import { useState } from 'react';
import { PageTitle } from '../components/PageTitle';
import { Input } from '../components/Input';
import { SearchTypeSelect } from '../components/SearchTypeSelect';
import { useCountrySearch } from '../hooks/useCountrySearch';
import { CountriesList } from '../components/CountriesList';
import { SortTypeSelect } from '../components/SortTypeSelect';
import { sortCountries } from '../utils/sortCountries';

export const CountriesSearchContainer = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchParams, setSearchParams] = useState<string>('name');
  const [sortType, setSortType] = useState<string>('name');

  const countries = useCountrySearch(searchValue, searchParams);
  const sortedCountries = sortCountries(countries, sortType);

  return (
    <div>
      <PageTitle>Wyszukiwarka państw</PageTitle>
      <div className="mt-5">
        <form className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <SearchTypeSelect
              value={searchParams}
              handleChange={(e) => setSearchParams(e.target.value)}
            />
            <Input
              value={searchValue}
              handleChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <SortTypeSelect
            value={sortType}
            handleChange={(e) => setSortType(e.target.value)}
          />
        </form>
      </div>

      <CountriesList countries={sortedCountries} />
    </div>
  );
};

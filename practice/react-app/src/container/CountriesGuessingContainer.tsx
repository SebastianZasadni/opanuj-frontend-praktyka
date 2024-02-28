import { useEffect, useState } from 'react';
import { PageTitle } from '../components/PageTitle';
import { useAllCountries } from '../hooks/useAllCountries';
import { randomizeCountry } from '../utils/randomizeCountry';
import { Country } from '../components/CountriesList';
import { Input } from '../components/Input';

export const CountriesGuessingContainer = () => {
  const countries = useAllCountries();
  const [randomCountry, setRandomCountry] = useState<Country>();
  const [countryName, setCountryName] = useState<string>('');

  const handleCheck = () => {
    const checkCountryName = randomCountry?.name === countryName;
    if (checkCountryName) {
      return alert('WIN!!!');
    }
    return alert('LOSEEeeeeeeeee!');
  };

  const handleRandom = () => {
    setRandomCountry(randomizeCountry(countries));
  };

  useEffect(() => {
    setRandomCountry(randomizeCountry(countries));
  }, [countries]);

  return (
    <div className="">
      <PageTitle>Zgadywanie państw</PageTitle>
      {randomCountry && (
        <div className="flex justify-center items-center mt-5">
          <img className="" src={randomCountry.flag} alt={randomCountry.name} />
        </div>
      )}
      <form className="mt-5 flex justify-center flex-col items-center">
        <Input
          value={countryName}
          handleChange={(e) => setCountryName(e.target.value)}
        />
        <div className="w-100">
          <button
            type="button"
            onClick={handleCheck}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mt-10"
          >
            Sprawdź
          </button>
          <button
            type="button"
            onClick={handleRandom}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Losuj ponownie
          </button>
        </div>
      </form>
    </div>
  );
};

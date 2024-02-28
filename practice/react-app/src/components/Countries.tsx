import { useState } from 'react';
import { CountriesGuessingContainer } from '../container/CountriesGuessingContainer';
import { CountriesSearchContainer } from '../container/CountriesSearchContainer';
import { RadioSelector } from './RadioSelector';

export const Countries = () => {
  const [radioType, setRadioType] = useState<string>('search');
  return (
    <div className="text-center mt-5">
      <RadioSelector
        handleChange={(e) => setRadioType(e.target.value)}
        checkedCondition={radioType === 'search'}
        name={'search'}
      >
        Wyszukiwarka
      </RadioSelector>
      <RadioSelector
        handleChange={(e) => setRadioType(e.target.value)}
        checkedCondition={radioType === 'guess'}
        name={'guess'}
      >
        Zgadywarka
      </RadioSelector>
      {radioType === 'search' ? (
        <CountriesSearchContainer />
      ) : (
        <CountriesGuessingContainer />
      )}
    </div>
  );
};

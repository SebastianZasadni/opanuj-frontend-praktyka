import { Country } from './CountriesList';

export const CountryCard = ({ country }: { country: Country }) => {
  const { flag, name } = country;

  return (
    <>
      <p>{name}</p>
      <img src={flag} alt={name}/>
    </>
  );
};

import { ChangeEvent } from 'react';

interface Props {
  value: string;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const SearchTypeSelect = ({ value, handleChange }: Props) => {
  return (
    <select
      value={value}
      onChange={handleChange}
      name="searchParams"
      className="mr-3 mb-2 text-center bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
    >
      <option value="name">Nazwa państwa</option>
      <option value="currency">Waluta</option>
      <option value="lang">Język</option>
      <option value="capital">Stolica</option>
    </select>
  );
};

import { ChangeEvent } from 'react';

interface Props {
  value: string;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const SortTypeSelect = ({ value, handleChange }: Props) => {
  return (
    <div className="flex items-center ml-20">
      <p className="text-center">Sortuj po</p>
      <select
        value={value}
        onChange={handleChange}
        name="searchParams"
        className="ml-2 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
      >
        <option value="name">nazwie</option>
        <option value="currency">ludności</option>
      </select>
    </div>
  );
};

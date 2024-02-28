import { ChangeEvent } from 'react';

interface Props {
  value: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, handleChange }: Props) => {
  return (
    <label className="">
      <input
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
        type="text"
        value={value}
        placeholder="Poland"
        onChange={handleChange}
      />
    </label>
  );
};

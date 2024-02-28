import { ChangeEvent } from 'react';

interface Props {
  children: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checkedCondition: boolean;
  name: string;
}

export const RadioSelector = ({
  children,
  handleChange,
  checkedCondition,
  name,
}: Props) => {
  return (
    <label className="mr-3 ml-1" htmlFor={name}>
      {children}
      <input
        className="ml-2"
        type="radio"
        id={name}
        name={name}
        value={name}
        checked={checkedCondition}
        onChange={handleChange}
      />
    </label>
  );
};

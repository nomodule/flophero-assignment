import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  label: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ options, label, onChange }: SelectProps) {
  return (
    <label className="flex flex-col space-y-2">
      <span>{label}</span>
      <select
        className="text-black w-full p-2 border border-gray-300 rounded-md bg-white"
        onChange={onChange}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}

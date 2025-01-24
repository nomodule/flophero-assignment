export default function Input({
  label,
  onChange,
  defaultValue,
  type = "text",
}: {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: number;
  type?: string;
}) {
  return (
    <label className="flex flex-col space-y-2">
      <span>{label}</span>
      <input
        defaultValue={defaultValue}
        type={type}
        onChange={onChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </label>
  );
}

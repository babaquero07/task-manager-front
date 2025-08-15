interface StatusFilterProps {
  options: { label: string; value: string | null }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const StatusFilter = ({ options, onChange }: StatusFilterProps) => {
  return (
    <select
      name="filter"
      id="filter"
      className="w-full max-w-sm mx-auto p-2 rounded-md border border-gray-300"
      onChange={onChange}
    >
      <option value="">Filtrar por estado</option>
      {options.map((option) => (
        <option key={option.value} value={option.value ?? ""}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default StatusFilter;

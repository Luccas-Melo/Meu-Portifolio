import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  error?: string;
  options: SelectOption[];
  onChange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  label,
  error,
  options,
  onChange,
  className = '',
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <select
        onChange={handleChange}
        className={`
          block w-full px-3 py-2
          border border-gray-300 dark:border-gray-600
          rounded-md shadow-sm
          text-gray-900 dark:text-white
          bg-white dark:bg-gray-700
          focus:ring-indigo-500 focus:border-indigo-500
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

export default Select;

import React from "react";

interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
        {label}
      </label>
      <select
        className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-950 cursor-pointer transition-all duration-200
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
              : "border-slate-300 dark:border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none"
          } ${className}`}
        {...props}>
        <option value="" disabled>
          Pilih {label}...
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-xs font-medium text-red-500 ml-1">{error}</span>
      )}
    </div>
  );
};

export default Select;

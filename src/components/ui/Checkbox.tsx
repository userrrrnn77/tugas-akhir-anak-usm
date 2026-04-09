import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          className={`mt-1 w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 transition-all cursor-pointer ${className}`}
          {...props}
        />
        <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 transition-colors text-left leading-tight">
          {label}
        </span>
      </label>
      {error && <p className="text-xs text-red-500 mt-1 ml-8">{error}</p>}
    </div>
  );
};

export default Checkbox;

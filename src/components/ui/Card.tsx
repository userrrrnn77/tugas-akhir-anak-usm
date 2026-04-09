import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  id?: string;
  onClick?: () => void;
  path?: string;
  query?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  title,
  id,
  onClick,
}) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            {title}
          </h3>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Card;

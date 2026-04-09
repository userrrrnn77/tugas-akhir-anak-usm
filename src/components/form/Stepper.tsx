import React from "react";

interface StepperProps {
  currentStep: number;
  steps: string[];
}

const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full py-4 px-2">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step Circle */}
            <div className="flex flex-col items-center relative z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  index + 1 <= currentStep
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                    : "bg-slate-200 text-slate-500"
                }`}>
                {index + 1 < currentStep ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <span
                className={`absolute -bottom-7 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-center w-20 sm:w-24 ${
                  index + 1 <= currentStep
                    ? "text-emerald-700"
                    : "text-slate-400"
                }`}>
                {step}
              </span>
            </div>

            {/* Connector Line */}
            {index !== steps.length - 1 && (
              <div
                className="flex-auto border-t-2 transition-all duration-500 ease-in-out mx-2 sm:mx-4"
                style={{
                  borderColor: index + 1 < currentStep ? "#059669" : "#e2e8f0",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="h-10" /> 
    </div>
  );
};

export default Stepper;

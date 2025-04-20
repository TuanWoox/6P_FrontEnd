import React from "react";
import { useEffect, useState } from "react";

export default function Spinner() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-green-50">
      <div className="relative w-32 h-32">
        {/* Main spinner circle */}
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#d1e7dd"
            strokeWidth="8"
          />

          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#4ade80"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * progress) / 100}
            transform="rotate(-90 50 50)"
          />
        </svg>

        {/* Custom logo in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center p-2 border-2 border-green-200">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 font-sans">
        <p className="text-green-800 text-xl font-medium drop-shadow-sm">
          Đang thực hiện yêu cầu
        </p>
        <p className="text-green-600 text-sm text-center mt-2">
          Xin vui lòng chờ trong giây lát
        </p>
      </div>

      {/* Green pulse animation behind the spinner */}
      <div className="absolute">
        <div className="w-40 h-40 rounded-full bg-green-300 opacity-20 animate-ping"></div>
      </div>
    </div>
  );
}

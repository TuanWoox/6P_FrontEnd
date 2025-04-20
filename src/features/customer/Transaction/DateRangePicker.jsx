import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from "@heroicons/react/24/outline";

export default function DateRangePicker({
  fromDate,
  toDate,
  setFromDate,
  setToDate,
}) {
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div className="flex flex-col w-full md:flex-row gap-6">
      {/* Từ ngày */}
      <div className="flex flex-col w-full md:w-1/2">
        <label className="mb-2 font-medium text-gray-700">Từ ngày</label>
        <div className="relative flex items-center gap-3">
            <CalendarIcon className="h-5 w-5 text-gray-400 pointer-events-none" />
            <DatePicker
                selected={fromDate}
                onChange={(date) => {
                setFromDate(date);
                // if toDate is before new fromDate, reset toDate
                if (toDate && date && toDate < date) {
                    setToDate(date);
                }
                }}
                selectsStart
                startDate={fromDate}
                endDate={toDate}
                dateFormat="dd/MM/yyyy"
                placeholderText="Chọn ngày"
                className={`w-full border ${
                focusedInput === 'from' 
                    ? 'border-blue-500 ring-2 ring-blue-100' 
                    : 'border-gray-300'
                } p-3 rounded-lg text-sm pr-10 focus:outline-none`}
                onFocus={() => setFocusedInput('from')}
                onBlur={() => setFocusedInput(null)}
            />
        </div>
      </div>

      {/* Đến ngày */}
      <div className="flex flex-col w-full md:w-1/2">
        <label className="mb-2 font-medium text-gray-700">Đến ngày</label>
        <div className="relative flex items-center gap-3">
            <CalendarIcon className="h-5 w-5 text-gray-400 " />
            <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                selectsEnd
                startDate={fromDate}
                endDate={toDate}
                // disable any date before fromDate
                minDate={fromDate}
                dateFormat="dd/MM/yyyy"
                placeholderText="Chọn ngày"
                className={`w-full border ${
                focusedInput === 'to' 
                    ? 'border-blue-500 ring-2 ring-blue-100' 
                    : 'border-gray-300'
                } p-3 rounded-lg text-sm pr-10 focus:outline-none`}
                onFocus={() => setFocusedInput('to')}
                onBlur={() => setFocusedInput(null)}
            />
        </div>
      </div>
    </div>
  );
}
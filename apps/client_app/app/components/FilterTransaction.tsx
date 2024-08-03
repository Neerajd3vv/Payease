"use client";
import { Button2 } from "./Button2";

export function FilterTransaction() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = [
    2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035,
  ];

  return (
    <div className="font-lato flex justify-center items-center space-x-3 p-4 mb-2 border border-2px bg-white rounded-lg shadow-md">
      <select className="border p-2 bg-slate-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-Myblue">
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select className="border p-2 bg-slate-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-Myblue">
        {years.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
      <Button2
        onClick={() => {}}
        name="Apply Filter"
        className="border px-7 py-2 bg-Myblue text-white rounded-lg shadow-md hover:bg-Myblue-dark transition duration-200"
      />
    </div>
  );
}

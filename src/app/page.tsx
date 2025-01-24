"use client";

import { useState } from "react";
import Input from "./components/input";
import Select from "./components/select";

interface ProgressBar {
  value: number;
  id: number;
}

export default function Home() {
  const [progressBarCount, setProgressBarCount] = useState(1);
  const [selectedProgressbarId, setSelectedProgressbarId] = useState(0);
  const [progressBars, setProgressBars] = useState<ProgressBar[]>([
    { value: 50, id: 0 },
  ]);

  return (
    <div className="flex flex-col space-y-4 border-2 bg-white shadow p-4 max-w-xl mx-auto mt-10 rounded-lg">
      <Input
        label="Number of progress bars"
        defaultValue={progressBarCount}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setProgressBarCount(Number(event.target.value));
          const newProgressBars: ProgressBar[] = [];

          for (let i = 0; i < Number(event.target.value); i++) {
            newProgressBars.push({ value: 50, id: i });
          }

          setProgressBars(newProgressBars);
        }}
      />
      <Select
        label="Select progress bar"
        options={prepareOptions(progressBarCount)}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedProgressbarId(parseInt(event.target.value))
        }
      />
      <Input
        label="Progress value"
        type="number"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const newProgressBars = [...progressBars];
          newProgressBars[selectedProgressbarId] = {
            value: Number(event.target.value),
            id: selectedProgressbarId,
          };
          setProgressBars(newProgressBars);
        }}
      />
      {renderProgressBars(progressBars)}
    </div>
  );
}

function prepareOptions(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    value: String(index),
    label: `Progress Bar ${index + 1}`,
  }));
}

function renderProgressBars(progressBars: ProgressBar[]) {
  return (
    <div className="mt-4">
      {progressBars.map(({ value, id }) => (
        <div key={id} className="flex">
          <div className="w-[26px] flex-shrink-0">{id + 1}.</div>
          <div className="flex-1 flex items-center mb-2">
            <div className="w-3/4">
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200 overflow-hidden">
                <div
                  className={` h-2.5 rounded-full transition-all duration-[300ms] ${
                    value < 0 ? "bg-red-600" : "bg-green-600"
                  }`}
                  style={{ width: Math.abs(value) + "%" }}
                ></div>
              </div>
            </div>
            <div className="w-1/4 text-center">
              <span className={value < 0 ? "text-red-500" : ""}>{value}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

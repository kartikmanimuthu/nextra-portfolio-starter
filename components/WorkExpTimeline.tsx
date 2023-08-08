import React from "react";

interface OrgData {
  organization: string;
  role: string;
  duration: string;
}

interface TimelineProps {
  data?: OrgData[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => (
  <ol className="relative border-l border-gray-200 dark:border-gray-700">
    {data?.map((item, index) => (
      <li key={index} className="mb-10 ml-6">
        <span
          // style={{ width: "24px", height: "24px" }}
          className="absolute flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
        >
          <svg
            className="w-5 h-5 text-gray-300 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          {item.organization}
        </h3>

        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Role: {item.role}
        </p>
        <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          Duration: {item.duration}
        </p>
      </li>
    ))}
  </ol>
);

export default Timeline;

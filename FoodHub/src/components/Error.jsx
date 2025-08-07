import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
        😵 Tune wrong page dala hai bhai...
      </h1>
      <h2 className="text-lg sm:text-xl text-gray-700">
        {err.status} : {err.statusText}
      </h2>
      <p className="text-sm text-gray-500 mt-4">
        Something went wrong. Please check the URL or go back to Home.
      </p>
    </div>
  );
};

export default Error;

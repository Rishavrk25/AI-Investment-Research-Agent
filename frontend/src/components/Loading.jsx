import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
      <div className="text-gray-600 space-y-2 text-center">
        <p>Researching company...</p>
        <p>Fetching financial data...</p>
        <p>Fetching latest news...</p>
        <p>Generating AI report...</p>
      </div>
    </div>
  );
};

export default Loading;

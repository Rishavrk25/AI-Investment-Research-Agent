import React from 'react';

const FinancialAnalysis = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
      <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Financial Analysis</h2>
        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
          data.rating === 'Strong' ? 'bg-green-100 text-green-800' : 
          data.rating === 'Moderate' ? 'bg-yellow-100 text-yellow-800' : 
          'bg-red-100 text-red-800'
        }`}>
          {data.rating}
        </span>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-500 font-medium mb-1">Summary</p>
        <p className="text-gray-700 leading-relaxed">{data.summary}</p>
      </div>

      <div>
        <p className="text-sm text-gray-500 font-medium mb-3">Key Metrics</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {data.keyMetrics?.map((metric, index) => (
            <li key={index}>{metric}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FinancialAnalysis;

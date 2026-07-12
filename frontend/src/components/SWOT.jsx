import React from 'react';

const SWOT = ({ strengths, weaknesses, opportunities, risks }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 px-2">SWOT Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-green-700 mb-3 border-b border-gray-100 pb-2">Strengths</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            {strengths?.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        {/* Weaknesses */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-red-700 mb-3 border-b border-gray-100 pb-2">Weaknesses</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            {weaknesses?.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        {/* Opportunities */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-gray-100 pb-2">Opportunities</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            {opportunities?.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        {/* Risks */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-orange-700 mb-3 border-b border-gray-100 pb-2">Risks</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            {risks?.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SWOT;

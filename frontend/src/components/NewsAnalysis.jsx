import React from 'react';

const NewsAnalysis = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
      <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-4">
        <h2 className="text-2xl font-bold text-gray-900">News Analysis</h2>
        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
          data.sentiment === 'Positive' ? 'bg-green-100 text-green-800' : 
          data.sentiment === 'Neutral' ? 'bg-gray-100 text-gray-800' : 
          'bg-red-100 text-red-800'
        }`}>
          {data.sentiment}
        </span>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-500 font-medium mb-1">Summary</p>
        <p className="text-gray-700 leading-relaxed">{data.summary}</p>
      </div>

      <div>
        <p className="text-sm text-gray-500 font-medium mb-3">Key Events</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.keyEvents?.map((event, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <p className="text-gray-800 text-sm">{event}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAnalysis;

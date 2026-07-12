import React from 'react';

const Recommendation = ({ recommendation, confidence, reasoning }) => {
  const isInvest = recommendation === "Invest";

  return (
    <div className={`border-2 rounded-xl p-8 shadow-sm mb-8 ${isInvest ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'}`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <p className="text-sm text-gray-600 font-medium mb-1">Final Recommendation</p>
          <span className={`inline-block px-6 py-2 rounded-lg text-2xl font-bold ${isInvest ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
            {recommendation}
          </span>
        </div>
        
        <div className="text-left md:text-right">
          <p className="text-sm text-gray-600 font-medium mb-1">Confidence Score</p>
          <p className={`text-3xl font-bold ${isInvest ? 'text-green-700' : 'text-red-700'}`}>
            {confidence}%
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-5 border border-gray-200">
        <p className="text-sm text-gray-500 font-medium mb-2">Reasoning</p>
        <p className="text-gray-800 leading-relaxed">{reasoning}</p>
      </div>
    </div>
  );
};

export default Recommendation;

import React from 'react';

const CompanyOverview = ({ data, companyName }) => {
  if (!data) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Company Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500 font-medium">Company Name</p>
          <p className="text-lg font-semibold text-gray-800">{companyName || 'N/A'}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">Industry</p>
          <p className="text-lg font-semibold text-gray-800">{data.industry || 'N/A'}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">CEO</p>
          <p className="text-lg font-semibold text-gray-800">{data.ceo || 'N/A'}</p>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500 font-medium mb-1">Summary</p>
        <p className="text-gray-700 leading-relaxed">{data.summary || 'N/A'}</p>
      </div>
    </div>
  );
};

export default CompanyOverview;

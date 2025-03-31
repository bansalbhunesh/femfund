import React from 'react';

const EmptyState = ({ filter, getTypeLabel }) => {
  return (
    <div className="bg-white shadow overflow-hidden rounded-lg p-6 text-center">
      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">No funding options found</h3>
      <p className="mt-1 text-sm text-gray-500">
        {filter === 'all' 
          ? "We couldn't find any funding options. Please try again later." 
          : `We couldn't find any ${getTypeLabel(filter).toLowerCase()} options. Try another category.`}
      </p>
    </div>
  );
};

export default EmptyState;
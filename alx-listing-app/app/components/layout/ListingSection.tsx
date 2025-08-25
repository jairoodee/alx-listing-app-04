'use client';

import React from 'react';
import PropertyCard from './PropertyCard';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

interface ListingSectionProps {
  selectedFilters: string[];
}

const ListingSection: React.FC<ListingSectionProps> = ({ selectedFilters }) => {
  // Filter properties based on selected filters
  const filteredProperties = React.useMemo(() => {
    if (selectedFilters.length === 0) return PROPERTYLISTINGSAMPLE;
    return PROPERTYLISTINGSAMPLE.filter((property) => {
      return property.category.some(category => selectedFilters.includes(category));
    });
  }, [selectedFilters]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6">Properties</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.name} property={property} />
        ))}
      </div>

      {/* Load More Button (Placeholder) */}
      <div className="mt-8 text-center">
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
};

export default ListingSection;

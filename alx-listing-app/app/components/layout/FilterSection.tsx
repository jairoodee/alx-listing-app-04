import React from 'react';
import Pill from '@/components/layout/Pill';
import { FILTER_OPTIONS } from '@/constants';

interface FilterSectionProps {
  selectedFilters: string[];
  onFilterSelect: (filter: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ selectedFilters, onFilterSelect }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap gap-4">
        {FILTER_OPTIONS.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            active={selectedFilters.includes(filter)}
            onClick={() => onFilterSelect(filter)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterSection;

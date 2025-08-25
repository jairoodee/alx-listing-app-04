'use client';

import React, { useState } from 'react';
import Hero from '@/components/layout/Hero';
import FilterSection from '@/components/layout/FilterSection';
import ListingSection from '@/components/layout/ListingSection';

export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterSelect = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter) 
        : [...prev, filter]
    );
  };

  return (
    <main>
      <Hero />
      <FilterSection 
        selectedFilters={selectedFilters}
        onFilterSelect={handleFilterSelect}
      />
      <ListingSection selectedFilters={selectedFilters} />
    </main>
  );
}

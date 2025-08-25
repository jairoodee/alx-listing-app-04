'use client';

import React from 'react';
import Image from 'next/image';
import { PropertyProps } from '@/interfaces';
import { FaStar, FaBed, FaBath, FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  if (!property) return <div>Loading property details...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Property Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
        <div className="flex items-center text-gray-600">
          <FaMapMarkerAlt className="mr-2" />
          <span>
            {[property.address?.city, property.address?.state, property.address?.country]
              .filter(Boolean)
              .join(', ')}
          </span>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative h-96 w-full rounded-xl overflow-hidden mb-8">
        <Image
          src={property.image || '/placeholder-property.jpg'}
          alt={property.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Property Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">About this property</h2>
            <p className="text-gray-700 mb-6">
              {property.description || 'No description available for this property.'}
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Amenities</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <FaBed className="text-indigo-500 mr-2" />
                <span>{property.offers?.bed || 'N/A'} Beds</span>
              </div>
              <div className="flex items-center">
                <FaBath className="text-indigo-500 mr-2" />
                <span>{property.offers?.shower || 'N/A'} Baths</span>
              </div>
              <div className="flex items-center">
                <IoIosPeople className="text-indigo-500 mr-2" />
                <span>{property.offers?.occupants || 'N/A'} Guests</span>
              </div>
              {property.category?.map((cat, index) => (
                <div key={index} className="flex items-center">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {cat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Booking Card */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-2xl font-bold">${property.price}</span>
                <span className="text-gray-600"> / night</span>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span>{property.rating || 'N/A'}</span>
              </div>
            </div>

            {property.discount && (
              <div className="bg-indigo-50 text-indigo-700 px-3 py-2 rounded-md mb-4 text-sm">
                {property.discount}% off - Save ${Math.round((property.price * property.discount) / 100)}!
              </div>
            )}

            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
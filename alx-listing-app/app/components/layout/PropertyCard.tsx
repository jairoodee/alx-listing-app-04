'use client';

import React from 'react';
import Image from 'next/image';
import { PropertyProps } from '@/interfaces';
import { FaStar, FaBed, FaBath } from 'react-icons/fa';
import { RiHotelBedLine } from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  // Format price with commas for thousands
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Calculate discounted price if discount exists
  const getDiscountedPrice = () => {
    if (!property.discount) return null;
    const discount = parseFloat(property.discount) / 100;
    const discountedPrice = property.price * (1 - discount);
    return Math.round(discountedPrice);
  };
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image with fallback */}
      <div className="relative h-48 w-full bg-gray-100">
        {property.image ? (
          <Image
            src={property.image}
            alt={property.name || 'Property image'}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <RiHotelBedLine className="text-gray-400 text-4xl" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name with character limit */}
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">
          {property.name || 'Untitled Property'}
        </h3>

        {/* Location with fallback */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-1">
          {property.address ? (
            `${property.address.city || ''}${property.address.state ? `, ${property.address.state}` : ''}${property.address.country ? `, ${property.address.country}` : ''}`.replace(/^,\s/, '')
          ) : 'Location not specified'}
        </p>

        {/* Price and Rating */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-sm">
              {property.rating ? property.rating.toFixed(1) : 'N/A'}
              <span className="text-gray-400 ml-1">
                ({Math.floor(Math.random() * 100) + 1} reviews)
              </span>
            </span>
          </div>
          <div className="text-right">
            {property.discount && (
              <span className="text-gray-400 text-sm line-through mr-2">
                ${formatPrice(property.price)}
              </span>
            )}
            <span className="text-indigo-600 font-semibold">
              ${formatPrice(property.discount ? getDiscountedPrice()! : property.price)}
              <span className="text-gray-500 text-sm font-normal">/night</span>
            </span>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-3 grid grid-cols-3 gap-2 text-sm text-gray-600 border-t border-gray-100 pt-3">
          <div className="flex items-center">
            <FaBed className="mr-1 text-indigo-400" />
            <span>{property.offers?.bed || 'N/A'} beds</span>
          </div>
          <div className="flex items-center">
            <FaBath className="mr-1 text-indigo-400" />
            <span>{property.offers?.shower || 'N/A'} baths</span>
          </div>
          <div className="flex items-center">
            <IoIosPeople className="mr-1 text-indigo-400" />
            <span>{property.offers?.occupants || 'N/A'} guests</span>
          </div>
        </div>

        {/* Tags and Badges */}
        <div className="mt-3 flex flex-wrap gap-2">
          {property.discount && (
            <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-xs font-medium">
              {property.discount}% OFF
            </span>
          )}
          {property.category?.map((cat, index) => (
            <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

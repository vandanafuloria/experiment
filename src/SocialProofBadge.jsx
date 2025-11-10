import React from 'react';
import { ChartSpline } from 'lucide-react';
import './SocialProofBadge.css';

const SocialProofBadge = ({
  rating = 4.2,
  reviewCount = 235,
  soldThisWeek = 235,
  className = '',
}) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;
  const hasHalf = decimal >= 0.25 && decimal <= 0.75;
  const emptyStars = totalStars - fullStars - (hasHalf ? 1 : 0);
  const stars = [
    ...Array(fullStars).fill('full'),
    ...(hasHalf ? ['half'] : []),
    ...Array(emptyStars).fill('empty'),
  ];

  return (
    <div
      className={`flex w-[70%] items-center gap-2 rounded-full border border-[#e9dbe2] bg-white/95 px-3.5 py-1.5 text-[0.75rem] text-[#6f5360] shadow-[0_8px_16px_rgba(133,105,120,0.14)] backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-1 rounded-full  px-2.5 py-1.5">
        <span className="flex items-center text-[0.95rem]">
          {stars.map((type, index) => (
            <span
              key={`${type}-${index}`}
              className={`spb-star spb-star--${type}`}
              aria-hidden="true"
            />
          ))}
        </span>
        <span className="text-[0.75rem] font-semibold text-[#7c5a6b]">{rating.toFixed(1)}</span>
      </div>

      <span className="h-4 w-px bg-[#ead9e1]" />

      <div className="flex items-center gap-1 px-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#a58296]" />
        <span className="text-[0.75rem] font-medium">{reviewCount} reviews</span>
      </div>

      <span className="h-4 w-px bg-[#ead9e1]" />

      <div className="flex items-center gap-1 rounded-full bg-[#f7eef2] px-2.5 py-1.5 text-[#a58296]">
        <ChartSpline size={16} strokeWidth={1.8} />
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em]">
          Sold
        </span>
        <span className="text-[0.75rem] font-medium text-[#7c5a6b]">{soldThisWeek}</span>
      </div>
    </div>
  );
};

export default SocialProofBadge;


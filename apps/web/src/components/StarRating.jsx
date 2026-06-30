import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating }) => {
  // Ensure rating is between 0 and 5
  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));
  const fillPercentage = (safeRating / 5) * 100;

  return (
    <div className="flex items-center gap-3">
      <div className="relative inline-flex">
        {/* Empty stars background */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={`empty-${i}`} className="w-5 h-5 text-muted-foreground/30" />
          ))}
        </div>
        
        {/* Filled stars overlay */}
        <div 
          className="absolute top-0 left-0 flex gap-1 overflow-hidden whitespace-nowrap"
          style={{ width: `${fillPercentage}%` }}
        >
          {[...Array(5)].map((_, i) => (
            <Star key={`filled-${i}`} className="w-5 h-5 fill-primary text-primary shrink-0" />
          ))}
        </div>
      </div>
      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20">
        {safeRating.toFixed(1)}
      </span>
    </div>
  );
};

export default StarRating;
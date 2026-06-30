import React from 'react';
import StarRating from '@/components/StarRating';

const TestimonialCard = ({ name, company, review, rating }) => {
  return (
    <div className="bg-[#0a0a0a] border border-primary/20 hover:border-primary/50 transition-colors rounded-xl shadow-lg p-6 h-full flex flex-col">
      {/* Stars */}
      <div className="mb-4">
        <StarRating rating={rating} />
      </div>

      {/* Review */}
      <p className="text-muted-foreground mb-6 flex-1 italic leading-relaxed">
        "{review}"
      </p>

      {/* Author */}
      <div className="pt-4 border-t border-primary/20">
        <p className="font-serif font-semibold text-primary text-lg">{name}</p>
        <p className="text-sm text-muted-foreground">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
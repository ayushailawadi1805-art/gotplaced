import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CareerCard = ({ career, onViewDetails }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-card border border-primary/20 rounded-xl p-6 flex flex-col h-full group shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Badges - Subtle and minimal */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {career.category}
        </span>
        <span className="text-xs text-muted-foreground/50 px-1">•</span>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {career.experienceLevel}
        </span>
      </div>
      
      {/* Title - Premium Gold, Bold, Top */}
      <h3 className="text-2xl font-serif font-bold text-primary mb-3 leading-tight">
        {career.title}
      </h3>
      
      {/* Description - White/Light Gray, 2-3 lines */}
      <p className="text-foreground/90 text-base leading-relaxed mb-6 line-clamp-3 flex-1">
        {career.description}
      </p>

      {/* View Details Button - Minimal Gold Text with Arrow */}
      <button
        onClick={() => onViewDetails(career)}
        className="mt-auto inline-flex items-center gap-2 text-primary font-medium text-sm hover:opacity-80 transition-opacity w-fit uppercase tracking-wide"
        aria-label={`View details for ${career.title}`}
      >
        View Details
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};

export default CareerCard;
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CareerDetailModal = ({ isOpen, onClose, career }) => {
  if (!career) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-3xl bg-card border border-border rounded-xl shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 sm:p-8 border-b border-border">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2 text-sm text-muted-foreground tracking-wide uppercase">
                    <span>{career.category}</span>
                    <span>•</span>
                    <span>{career.experienceLevel}</span>
                    <span>•</span>
                    <span>{career.roleType}</span>
                  </div>
                  <h2 id="modal-title" className="text-3xl sm:text-4xl font-serif font-bold text-primary">
                    {career.title}
                  </h2>
                </div>
                
                <button
                  onClick={onClose}
                  className="p-2 text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex flex-col gap-10">
                
                {/* Overview Section */}
                <section>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-4">Role Overview</h3>
                  <div className="bg-background rounded-lg p-6 text-foreground/90 leading-relaxed">
                    {career.description}
                  </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Focus Areas Section */}
                  <section>
                    <h3 className="text-xl font-serif font-semibold text-primary mb-4">Primary Focus Areas</h3>
                    <ul className="space-y-2">
                      {career.focusAreas?.map((area, index) => (
                        <li key={index} className="flex items-start text-foreground/90">
                          <span className="mr-2 text-primary">•</span>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Skills Section */}
                  <section>
                    <h3 className="text-xl font-serif font-semibold text-primary mb-4">Key Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {career.skills?.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Companies Section */}
                <section>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-4">Top Employers</h3>
                  <div className="flex flex-wrap gap-2">
                    {career.companies?.map((company, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-muted text-foreground/90 rounded-md text-sm"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </section>

              </div>
              
              {/* Footer */}
              <div className="p-6 sm:p-8 border-t border-border flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2 border border-primary/30 text-primary hover:bg-primary/5 rounded-lg text-sm font-medium uppercase tracking-wide transition-colors"
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CareerDetailModal;
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CATEGORY_LINKS = [
  { name: 'Tech Careers', url: 'https://forms.gle/NQLuCEmg2ntoyPNDA' },
  { name: 'Data Analytics', url: 'https://forms.gle/yUJpyXtzj36gCpMu5' },
  { name: 'Cybersecurity', url: 'https://forms.gle/q22UUsNk4pENmDeK8' },
  { name: 'MBA & Business Careers', url: 'https://forms.gle/6TjsxN9PGz1cJdDV7' },
  { name: 'AI/ML & Automation', url: 'https://forms.gle/1HHYHBQ7DtAotez9A' }
];

const ApplyNowModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
            className="modal-overlay"
            aria-hidden="true"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="modal-content-premium pointer-events-auto flex flex-col w-full max-w-sm max-h-[85vh] p-4 sm:p-5"
              role="dialog"
              aria-modal="true"
              aria-labelledby="apply-modal-title"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3 shrink-0">
                <div>
                  <h2 id="apply-modal-title" className="text-lg sm:text-xl font-serif font-bold text-[#D4AF37] mb-1">
                    Start Your Application
                  </h2>
                  <p className="text-gray-300 text-xs">
                    Select the career domain you'd like to apply for.
                  </p>
                </div>
                
                <button
                  onClick={onClose}
                  className="p-1 -mr-1 -mt-1 text-gray-400 hover:text-[#D4AF37] rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Options List */}
              <div className="overflow-y-auto custom-scrollbar pr-1 flex-1 space-y-2 mt-1 pb-1">
                {CATEGORY_LINKS.map((category) => (
                  <a
                    key={category.name}
                    href={category.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg border border-[#D4AF37]/10 bg-white/5 hover:bg-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 group"
                  >
                    <span className="font-medium text-white text-sm group-hover:text-[#D4AF37] transition-colors">
                      {category.name}
                    </span>
                    <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-sm">
                      &rarr;
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ApplyNowModal;
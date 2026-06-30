import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Sparkles } from 'lucide-react';
import CareerCard from '@/components/CareerCard';
import CareerDetailModal from '@/components/CareerDetailModal';
import ApplyNowModal from '@/components/ApplyNowModal';
import { careerProfiles } from '@/lib/CareerData';

const CATEGORIES = ['All Careers', 'Tech Careers', 'Data Analytics', 'Cybersecurity', 'MBA & Business Careers', 'AI/ML & Automation'];
const EXPERIENCE_LEVELS = ['Beginner Friendly', 'Experienced'];
const ROLE_TYPES = ['Technical', 'Non-Technical', 'Hybrid'];

const CATEGORY_LINKS = {
  'Tech Careers': 'https://forms.gle/NQLuCEmg2ntoyPNDA',
  'Data Analytics': 'https://forms.gle/yUJpyXtzj36gCpMu5',
  'Cybersecurity': 'https://forms.gle/q22UUsNk4pENmDeK8',
  'MBA & Business Careers': 'https://forms.gle/6TjsxN9PGz1cJdDV7',
  'AI/ML & Automation': 'https://forms.gle/1HHYHBQ7DtAotez9A'
};

const CareersPage = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    experience: [],
    type: []
  });

  const toggleFilter = (category, value) => {
    setFilters(prev => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  const handleApplyClick = () => {
    if (activeCategory === 'All Careers') {
      setIsApplyModalOpen(true);
    } else {
      const link = CATEGORY_LINKS[activeCategory];
      if (link) {
        window.open(link, '_blank');
      }
    }
  };

  const filteredCareers = useMemo(() => {
    return careerProfiles.filter(career => {
      // Category match
      if (activeCategory !== 'All Careers' && career.category !== activeCategory) return false;

      // Search match
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = career.title.toLowerCase().includes(query);
        const matchesSkills = career.skills?.some(s => s.toLowerCase().includes(query));
        const matchesCompanies = career.companies?.some(c => c.toLowerCase().includes(query));
        if (!matchesTitle && !matchesSkills && !matchesCompanies) return false;
      }

      // Filter match
      if (filters.experience.length > 0 && !filters.experience.includes(career.experienceLevel)) return false;
      if (filters.type.length > 0 && !filters.type.includes(career.roleType)) return false;

      return true;
    });
  }, [activeCategory, searchQuery, filters]);

  return (
    <>
      <Helmet>
        <title>Explore Careers - GotPlaced</title>
        <meta name="description" content="Explore comprehensive career profiles across Tech, Data, Cyber, Business, and AI." />
      </Helmet>

      <main className="flex-1 py-16 bg-background min-h-screen">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
              Find Your Next Career Move
            </h1>
            <p className="text-base sm:text-lg text-foreground max-w-2xl mx-auto">
              Empowering Careers. Connecting Talent with Better Opportunities.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          {/* Category Tabs & Apply Button Row */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 flex-1">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-lg font-medium text-sm transition-all ${
                    activeCategory === category
                      ? 'bg-muted text-primary'
                      : 'bg-transparent text-foreground/70 hover:bg-muted/50 hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Prominent Apply Now Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleApplyClick}
              className="btn-apply-premium shrink-0"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Apply Now
            </motion.button>
          </div>

          {/* Search and Compact Filters - Dark Backgrounds, Subte Shadows */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between bg-card p-4 rounded-xl shadow-sm border border-border/50">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-2 bg-background border-none rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-primary transition-all text-sm"
                placeholder="Search titles, skills, companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Compact Filters */}
            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Filter className="w-4 h-4" /> Filters
              </div>
              
              <div className="flex flex-wrap gap-2">
                {EXPERIENCE_LEVELS.map(level => (
                  <button
                    key={level}
                    onClick={() => toggleFilter('experience', level)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                      filters.experience.includes(level)
                        ? 'bg-primary/10 text-primary'
                        : 'bg-background text-foreground/70 hover:bg-muted'
                    }`}
                  >
                    {level}
                  </button>
                ))}
                <div className="w-px h-5 bg-border mx-1 hidden sm:block" />
                {ROLE_TYPES.map(type => (
                  <button
                    key={type}
                    onClick={() => toggleFilter('type', type)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                      filters.type.includes(type)
                        ? 'bg-primary/10 text-primary'
                        : 'bg-background text-foreground/70 hover:bg-muted'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Career Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <AnimatePresence mode="wait">
            {filteredCareers.length > 0 ? (
              <motion.div
                key={activeCategory + filteredCareers.length}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredCareers.map((career) => (
                  <CareerCard 
                    key={career.id} 
                    career={career} 
                    onViewDetails={setSelectedCareer} 
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-card rounded-xl border border-border/50"
              >
                <p className="text-base text-foreground/70">No career profiles match your current filters.</p>
                <button 
                  onClick={() => { setFilters({ experience: [], type: [] }); setSearchQuery(''); }} 
                  className="mt-4 text-primary hover:opacity-80 text-sm font-medium transition-opacity"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <CareerDetailModal 
        isOpen={!!selectedCareer} 
        onClose={() => setSelectedCareer(null)} 
        career={selectedCareer} 
      />

      <ApplyNowModal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
      />
    </>
  );
};

export default CareersPage;
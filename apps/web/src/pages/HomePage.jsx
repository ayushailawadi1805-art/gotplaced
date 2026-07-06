import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
import CallToAction from '@/components/CallToAction.jsx';
import TestimonialCarousel from '@/components/TestimonialCarousel.jsx';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/lib/CareerData.js';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>GotPlaced - Premium Career Advancement</title>
        <meta name="description" content="Explore exciting careers in technology and data analytics. Find your path to success with expert guidance and resources." />
      </Helmet>

      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop" 
              alt="Professional consulting and career growth" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-gold-gradient drop-shadow-lg">
                Shape Your Future in <br />
                Tech & Data Analytics
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Discover your ideal career path with expert guidance, comprehensive resources, 
                and insights from industry leaders.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => navigate('/careers')}
                  className="group text-lg px-8 py-6 w-full sm:w-auto flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)] bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 border-none"
                >
                  <Code className="w-5 h-5" />
                  Explore All Careers
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
       <section
  id="success-stories"
  className="py-24 bg-background border-t border-primary/10"
>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gold-gradient mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of professionals who transformed their careers with GotPlaced
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TestimonialCarousel testimonials={testimonials} />
            </motion.div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
};

export default HomePage;
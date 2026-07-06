import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

  const handleSuccessStories = () => {
    const section = document.getElementById('success-stories');

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document
          .getElementById('success-stories')
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <div className="bg-black py-24 border-t border-primary/20 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold-gradient mb-6">
          Let's turn your ideas into reality
        </h2>

        <p className="text-muted-foreground text-lg mb-8">
          Join the elite network of professionals who have accelerated their careers with GotPlaced.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={() => navigate('/careers')}
          >
            Get Started Today
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8"
            onClick={handleSuccessStories}
          >
            View Success Stories
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToAction;
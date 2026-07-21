import blogs from "../data/blogs";
import { Link } from "react-router-dom";
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

  <meta
    name="description"
    content="Explore exciting careers in technology and data analytics. Find your path to success with expert guidance and resources."
  />

  <meta
    name="keywords"
    content="Placement Preparation, Interview Preparation, Resume Building, Career Guidance, Placement Training, GotPlaced"
  />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://gotplaced.in/" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="GotPlaced" />
  <meta
    property="og:title"
    content="GotPlaced - Premium Career Advancement"
  />
  <meta
    property="og:description"
    content="Explore exciting careers in technology and data analytics."
  />
  <meta property="og:url" content="https://gotplaced.in/" />
  <meta
    property="og:image"
    content="https://gotplaced.in/og-image.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="GotPlaced - Premium Career Advancement"
  />
  <meta
    name="twitter:description"
    content="Explore exciting careers in technology and data analytics."
  />
  <meta
    name="twitter:image"
    content="https://gotplaced.in/og-image.png"
  />

  {/* Organization Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "GotPlaced",
      url: "https://gotplaced.in",
      logo: "https://gotplaced.in/logo.png",
      description:
        "Placement preparation platform helping students crack interviews and build successful careers.",
    })}
  </script>
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



{/* Latest Blogs */}
<section className="py-24 bg-[#111111]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex justify-between items-center mb-12">
      <div>
        <h2 className="text-4xl font-bold text-[#D4AF37]">
          Latest Blogs
        </h2>

        <p className="text-gray-400 mt-3">
          Placement tips, interview questions and career guidance.
        </p>
      </div>

      <Link
        to="/blog"
        className="text-[#D4AF37] hover:underline"
      >
        View All →
      </Link>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {blogs.slice(0,3).map((blog)=>(

        <div
          key={blog.id}
          className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] transition"
        >

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-56 object-cover"
          />

          <div className="p-6">

            <span className="text-[#D4AF37] text-sm">
              {blog.category}
            </span>

            <h3 className="text-2xl font-bold mt-3">
              {blog.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {blog.description}
            </p>

            <Link
              to={`/blog/${blog.slug}`}
              className="inline-block mt-6 bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#c9a227]"
            >
              Read Article
            </Link>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>

<CallToAction />
      </main>
    </>
  );
};

export default HomePage;
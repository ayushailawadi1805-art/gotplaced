import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, User, Linkedin, Instagram, MessageCircle, 
  FileText, Compass, Network, TrendingUp, Users 
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mvzjvgng", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        },
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully",
          description: "Thank you! We will contact you shortly.",
          className: "bg-card border-primary text-primary",
        });
        // Form reset karne ke liye
        e.target.reset(); 
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong, please try again.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9718550044',
      href: 'tel:+919718550044'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'ayush.ailawadi1805@gmail.com',
      href: 'mailto:ayush.ailawadi1805@gmail.com'
    },
    {
      icon: User,
      label: 'Founder',
      value: 'Ayush Ailawadi',
      href: null
    }
  ];

  const socialMedia = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/919718550044',
      handle: 'Chat directly with our team'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/gotplaced-in/',
      handle: 'Follow our professional updates'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/gotplaced.in?igsh=bGF0M3Z0eWZuenpz',
      handle: 'Behind the scenes & insights'
    }
  ];

  const trustFeatures = [
    {
      icon: Users,
      title: 'Personalized Career Consulting',
      description: 'Receive one-on-one guidance tailored to your goals, background, and aspirations.'
    },
    {
      icon: FileText,
      title: 'Resume Optimization',
      description: 'Build recruiter-friendly resumes that improve your chances of getting shortlisted.'
    },
    {
      icon: MessageCircle,
      title: 'Interview Preparation',
      description: 'Get structured preparation, mock interviews, and industry-specific hiring insights.'
    },
    {
      icon: Compass,
      title: 'Career Transition Support',
      description: 'Switch confidently into Technology, Data Analytics, Cybersecurity, MBA Careers, or AI/ML.'
    },
    {
      icon: Network,
      title: 'Industry Network Access',
      description: 'Leverage our growing network of recruiters, hiring managers, and partner organizations.'
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Career Growth',
      description: 'Receive strategic career guidance focused on sustainable professional growth.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - GotPlaced</title>
        <meta name="description" content="Let's build your career together. Reach out for career consulting, resume optimization, and interview preparation." />
      </Helmet>

      <main className="flex-1 bg-background min-h-screen">
        {/* Premium Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden border-b border-[#D4AF37]/10">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3?auto=format&fit=crop&q=80&w=2000"
              alt="Professional Career Consulting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-90" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-[#D4AF37]">
                Let's Build Your Career Together
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-medium">
                Have questions about your career path, domain transition, job opportunities, or consulting services? Our team is here to guide you every step of the way.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust Section: Why Connect With GotPlaced? */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37] mb-4">
                Why Connect With GotPlaced?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                Partner with experts dedicated to elevating your professional journey across diverse industry domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {trustFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 sm:p-8 rounded-2xl bg-[#050505] border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300 group shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Content Grid */}
        <section className="py-20 border-t border-[#D4AF37]/10 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              
              {/* Contact Information & Socials */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-3xl font-serif font-bold text-[#D4AF37] mb-8">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((item) => {
                      const Icon = item.icon;
                      const content = (
                        <div className="flex items-center space-x-4 p-5 bg-[#0a0a0a] border border-[#D4AF37]/10 rounded-xl hover:border-[#D4AF37]/40 transition-all duration-300 group shadow-sm hover:shadow-md">
                          <div className="p-3 bg-[#D4AF37]/5 rounded-lg group-hover:bg-[#D4AF37]/10 transition-colors">
                            <Icon className="w-6 h-6 text-[#D4AF37]" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide uppercase mb-0.5">{item.label}</p>
                            <p className="text-base sm:text-lg font-medium text-gray-200">{item.value}</p>
                          </div>
                        </div>
                      );

                      return item.href ? (
                        <a key={item.label} href={item.href} className="block">
                          {content}
                        </a>
                      ) : (
                        <div key={item.label}>{content}</div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#D4AF37] mb-6">
                    Connect Socially
                  </h3>
                  <div className="flex flex-col gap-4">
                    {socialMedia.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-4 p-4 bg-[#0a0a0a] border border-[#D4AF37]/10 rounded-xl hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all duration-300 group shadow-sm hover:shadow-md"
                        >
                          <div className="p-2.5 bg-[#D4AF37]/5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-5 h-5 text-[#D4AF37]" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-200 group-hover:text-[#D4AF37] transition-colors">{social.name}</p>
                            <p className="text-xs text-gray-500">{social.handle}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-[#0a0a0a] rounded-2xl border border-[#D4AF37]/20 p-6 sm:p-10 shadow-2xl">
                  <h2 className="text-3xl font-serif font-bold text-[#D4AF37] mb-8">
                    Send a Message
                  </h2>

                  <form 
      action="https://formspree.io/f/mvzjvgng" 
      method="POST"
      onSubmit={handleSubmit} 
      className="space-y-5"
    >
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl shadow-inner text-sm"
                        placeholder="e.g. John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl shadow-inner text-sm"
                        placeholder="e.g. john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3.5 rounded-xl resize-none shadow-inner text-sm"
                        placeholder="Tell us about your career goals..."
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full relative inline-flex items-center justify-center px-6 py-3.5 bg-[#050505] text-[#D4AF37] font-medium text-sm tracking-wide uppercase border border-[#D4AF37]/50 rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#111] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                      <p className="text-center text-xs text-gray-500 mt-4">
                        Our team typically responds within 48–72 business hours.
                      </p>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
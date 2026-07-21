import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import blogs from "../data/blogs";
import toast from "react-hot-toast";
import { ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

if (!blog) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111111] text-white">
      <h1 className="text-4xl font-bold">Blog Not Found</h1>
    </div>
  );
}

const relatedBlogs = blogs.filter(
  (b) => b.id !== blog.id && b.category === blog.category
);

// 👇 YAHAN ADD KAR
const currentIndex = blogs.findIndex((b) => b.slug === slug);

const previousBlog =
  currentIndex > 0 ? blogs[currentIndex - 1] : null;

const nextBlog =
  currentIndex < blogs.length - 1
    ? blogs[currentIndex + 1]
    : null;

const shareUrl = window.location.href;
const [scrollProgress, setScrollProgress] = useState(0);
const [showTop, setShowTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const progress =
      (window.scrollY / totalHeight) * 100;

    setScrollProgress(progress);
    setShowTop(window.scrollY > 500);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
}, [slug]);

 
 
  return (
    <>
      <Helmet>
        <title>{blog.title} | GotPlaced</title>

        <meta name="description" content={blog.description} />

        <meta
          name="keywords"
          content={`${blog.category}, Placement Preparation, Interview Questions, Resume, GotPlaced`}
        />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta
          property="og:image"
          content={`https://gotplaced.in${blog.image}`}
        />
        <meta
          property="og:url"
          content={`https://gotplaced.in/blog/${blog.slug}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta
          name="twitter:image"
          content={`https://gotplaced.in${blog.image}`}
        />

        <link
          rel="canonical"
          href={`https://gotplaced.in/blog/${blog.slug}`}
        />
        <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: blog.title,
  description: blog.description,
  image: `https://gotplaced.in${blog.image}`,
  author: {
    "@type": "Organization",
    name: "GotPlaced"
  },
  publisher: {
    "@type": "Organization",
    name: "GotPlaced",
    logo: {
      "@type": "ImageObject",
      url: "https://gotplaced.in/logo.png"
    }
  },
  datePublished: blog.date,
  mainEntityOfPage: `https://gotplaced.in/blog/${blog.slug}`
})}
</script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is GotPlaced?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GotPlaced is a placement preparation platform that helps students with interview preparation, resume building and career guidance."
                }
              },
              {
                "@type": "Question",
                name: "Is GotPlaced free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Many resources are free, while premium programs provide additional support."
                }
              },
              {
                "@type": "Question",
                name: "Which careers does GotPlaced support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Software Development, Data Analytics, AI/ML, Cyber Security and many other career paths."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#111111] text-white">
        <div className="fixed top-0 left-0 z-50 w-full h-1 bg-[#222]">
          <div className="fixed top-4 right-6 z-50 bg-[#181818] border border-[#D4AF37] px-3 py-2 rounded-full text-sm font-semibold text-[#D4AF37] shadow-lg">
  {Math.round(scrollProgress)}%
</div>

  <div
    className="h-full bg-[#D4AF37] transition-all duration-150"
    style={{ width: `${scrollProgress}%` }}
  />

</div>
        <div className="max-w-7xl mx-auto py-20 px-6 lg:grid lg:grid-cols-4 lg:gap-12">
          <aside className="hidden lg:block">

  <div className="sticky top-24 bg-[#181818] border border-[#2A2A2A] rounded-2xl p-6">

    <h3 className="text-xl font-bold text-[#D4AF37] mb-5">
      📚 Contents
    </h3>

    <ul className="space-y-4 text-gray-300">

      <li>
        <a href="#intro" className="hover:text-[#D4AF37]">
          Introduction
        </a>
      </li>

      <li>
        <a href="#questions" className="hover:text-[#D4AF37]">
          Interview Questions
        </a>
      </li>

      <li>
        <a href="#faq" className="hover:text-[#D4AF37]">
          FAQs
        </a>
      </li>

      <li>
        <a href="#related" className="hover:text-[#D4AF37]">
          Related Blogs
        </a>
      </li>

    </ul>

  </div>

</aside>
<motion.div
  className="lg:col-span-3"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
          

          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
  <Link to="/" className="hover:text-[#D4AF37]">
    Home
  </Link>

  <span>/</span>

  <Link to="/blog" className="hover:text-[#D4AF37]">
    Blog
  </Link>

  <span>/</span>

  <span className="text-[#D4AF37]">
    {blog.title}
  </span>
</div>

          <div className="relative mt-10 rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl">

  <img
    src={blog.image}
    alt={blog.title}
    className="w-full h-[600px] object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

  <div className="absolute bottom-0 left-0 p-10 w-full">

    <span className="inline-block bg-[#D4AF37] text-black px-4 py-2 rounded-full text-sm font-bold uppercase">
      {blog.category}
    </span>

    <h1 className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
      {blog.title}
    </h1>

    <div className="flex flex-wrap gap-6 mt-6 text-gray-300">

      <span>👤 {blog.author}</span>

      <span>📅 {blog.date}</span>

      <span>⏱ {blog.readTime}</span>

    </div>

  </div>

</div>

{/* Blog Info Cards */}

<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">

  <div className="bg-[#181818] border border-[#2A2A2A] rounded-2xl p-5 text-center">
    <p className="text-gray-400 text-sm">Author</p>
    <p className="text-white font-bold mt-2">{blog.author}</p>
  </div>

  <div className="bg-[#181818] border border-[#2A2A2A] rounded-2xl p-5 text-center">
    <p className="text-gray-400 text-sm">Published</p>
    <p className="text-white font-bold mt-2">{blog.date}</p>
  </div>

  <div className="bg-[#181818] border border-[#2A2A2A] rounded-2xl p-5 text-center">
    <p className="text-gray-400 text-sm">Reading Time</p>
    <p className="text-white font-bold mt-2">{blog.readTime}</p>
  </div>

  <div className="bg-[#181818] border border-[#2A2A2A] rounded-2xl p-5 text-center">
    <p className="text-gray-400 text-sm">Category</p>
    <p className="text-[#D4AF37] font-bold mt-2">{blog.category}</p>
  </div>

</div>

<div className="mt-12 bg-[#181818] border border-[#2A2A2A] rounded-3xl p-8 md:p-12 shadow-xl">

  <div className="flex items-center gap-3 mb-8">
    <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-bold text-xl">
      G
    </div>

    <div>
      <p className="font-semibold text-white">
        GotPlaced Editorial Team
      </p>

      <p className="text-sm text-gray-400">
        Updated • {blog.date}
      </p>
    </div>
  </div>

  <div className="border-t border-[#2A2A2A] mb-10"></div>

  <div className="prose prose-invert max-w-none whitespace-pre-line
text-gray-100
text-xl md:text-2xl
leading-10
font-medium
tracking-wide
prose-headings:text-[#D4AF37]
prose-headings:font-extrabold
prose-headings:text-4xl
prose-p:text-gray-100
prose-strong:text-white
prose-strong:font-bold
prose-a:text-[#D4AF37]">
    <div className="text-xl md:text-2xl leading-10 text-gray-100 font-medium whitespace-pre-line">
  {blog.content}
</div>
  </div>

</div>
           <h2 className="text-4xl font-bold text-[#D4AF37] mb-8">
  Send this to someone
</h2>
          <div className="mt-12 flex flex-wrap gap-4">
            

  <a
    href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 px-5 py-3 rounded-lg text-white font-semibold"
  >
    WhatsApp
  </a>

  <a
  href="https://www.linkedin.com/company/gotplaced-in/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-700 px-5 py-3 rounded-lg text-white font-semibold"
>
  LinkedIn
</a>

  <button
   onClick={() => {
  navigator.clipboard.writeText(shareUrl);
  toast.success("🔗 Link copied successfully!");
}}
    className="bg-[#D4AF37] text-black px-5 py-3 rounded-lg font-semibold"
  >
    Copy Link
  </button>

</div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-xl bg-[#1a1a1a] border border-[#D4AF37]/20">
            <h2 className="text-3xl font-bold text-[#D4AF37]">
              Ready to Get Placed?
            </h2>

            <p className="text-gray-400 mt-3">
              Join GotPlaced and start your placement preparation with interview guidance,
              resume reviews and career support.
            </p>

            <Link
              to="/programs"
              className="inline-block mt-6 bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#c8a62e]"
            >
              Explore Placement Programs
            </Link>
          </div>

          {/* Related Blogs */}
<div className="mt-20">
  <h2 className="text-4xl font-bold text-[#D4AF37] mb-8">
    You May Also Like
  </h2>

  {relatedBlogs.length === 0 ? (
    <p className="text-gray-400">
      More articles coming soon...
    </p>
  ) : (
    <div className="grid md:grid-cols-2 gap-8">
  {relatedBlogs.map((item) => (
    <Link
      key={item.id}
      to={`/blog/${item.slug}`}
      className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#2A2A2A] hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-2"
    >
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <span className="inline-block bg-[#D4AF37] text-black px-3 py-1 rounded-full text-xs font-bold">
          {item.category}
        </span>

        <h3 className="text-2xl font-bold text-white mt-4 group-hover:text-[#D4AF37] transition-colors">
          {item.title}
        </h3>

        <p className="text-gray-400 mt-3 line-clamp-3">
          {item.description}
        </p>

        <div className="mt-6 flex items-center text-[#D4AF37] font-semibold">
          Read More →
        </div>
      </div>
    </Link>
  ))}
</div>
  )}
</div>

          {/* FAQ */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">

              <div className="bg-[#1a1a1a] p-6 rounded-xl">
                <h3 className="text-xl font-semibold">
                  What is GotPlaced?
                </h3>

                <p className="text-gray-400 mt-2">
                  GotPlaced helps students prepare for placements, interviews,
                  resume building and career growth.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-xl">
                <h3 className="text-xl font-semibold">
                  Is GotPlaced free?
                </h3>

                <p className="text-gray-400 mt-2">
                  Yes. Many resources are free along with premium placement programs.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-xl">
                <h3 className="text-xl font-semibold">
                  How can I join a placement program?
                </h3>

                <p className="text-gray-400 mt-2">
                  Visit the Placement Programs page and choose the program that best fits your career goals.
                </p>
              </div>

            </div>
          </div>
          <div className="mt-20 grid md:grid-cols-2 gap-6">

  {previousBlog ? (
    <Link
      to={`/blog/${previousBlog.slug}`}
      className="bg-[#181818] border border-[#2A2A2A] hover:border-[#D4AF37] rounded-2xl p-6 transition-all"
    >
      <p className="text-gray-400 text-sm">← Previous Blog</p>
      <h3 className="text-xl font-bold text-white mt-2">
        {previousBlog.title}
      </h3>
    </Link>
  ) : (
    <div />
  )}

  {nextBlog ? (
    <Link
      to={`/blog/${nextBlog.slug}`}
      className="bg-[#181818] border border-[#2A2A2A] hover:border-[#D4AF37] rounded-2xl p-6 text-right transition-all"
    >
      <p className="text-gray-400 text-sm">Next Blog →</p>
      <h3 className="text-xl font-bold text-white mt-2">
        {nextBlog.title}
      </h3>
    </Link>
  ) : (
    <div />
  )}

</div>

          {showTop && (
  <button
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#D4AF37] text-black shadow-2xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
  >
    <ChevronUp size={26} />
  </button>
)}


</motion.div>

        </div>
        
      </div>
    </>
  );
}
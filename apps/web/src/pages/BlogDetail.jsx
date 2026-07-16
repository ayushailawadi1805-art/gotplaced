import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import blogs from "../data/blogs";

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

const shareUrl = window.location.href;

 
 if (!blog) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111111] text-white">
      <h1 className="text-4xl font-bold">Loading...</h1>
    </div>
  );
}
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
        <div className="max-w-5xl mx-auto py-20 px-6">

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

          <p className="text-[#D4AF37] mt-6 uppercase tracking-wider">
            {blog.category}
          </p>

          <h1 className="text-5xl font-bold text-[#D4AF37] mt-3">
            {blog.title}
          </h1>

          <p className="mt-4 text-gray-400">
            {blog.author} • {blog.date} • {blog.readTime}
          </p>

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[500px] object-cover object-center rounded-xl mt-10"
          />

          <div className="prose prose-invert max-w-none mt-10 whitespace-pre-line text-gray-300 leading-9">
            {blog.content}
          </div>
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
    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-700 px-5 py-3 rounded-lg text-white font-semibold"
  >
    LinkedIn
  </a>

  <button
    onClick={() => {
      navigator.clipboard.writeText(shareUrl);
      alert("Link copied!");
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
        <div
          key={item.id}
          className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#D4AF37]/20"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-52 object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-bold text-[#D4AF37]">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {item.description}
            </p>

            <Link
              to={`/blog/${item.slug}`}
              className="inline-block mt-6 bg-[#D4AF37] text-black px-6 py-2 rounded-lg hover:bg-[#c8a62e]"
            >
              Read More
            </Link>
          </div>
        </div>
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

        </div>
      </div>
    </>
  );
}
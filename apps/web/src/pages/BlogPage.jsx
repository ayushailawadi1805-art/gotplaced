

import { useState } from "react";
import { Helmet } from "react-helmet";
import blogs from "../data/blogs";
import { Link } from "react-router-dom";


export default function BlogPage() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

 const filteredBlogs = blogs.filter((blog) => {
  const matchesSearch =
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.description.toLowerCase().includes(search.toLowerCase()) ||
    blog.category.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    category === "All" || blog.category === category;

  return matchesSearch && matchesCategory;
});
  return (
    <>
      <Helmet>
        <title>Blog | GotPlaced</title>

        <meta
          name="description"
          content="Placement preparation, interview questions, resume tips, career guidance and latest job updates."
        />

        <link rel="canonical" href="https://gotplaced.in/blog" />
      </Helmet>

      <div className="min-h-screen bg-[#111111] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-[#D4AF37] mb-4">
            GotPlaced Blog
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Placement preparation, interview tips, resume guides and career
            advice.
          </p>

          {/* Search */}
          <div className="mb-12">
            <input
              type="text"
              placeholder="🔍 Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#1a1a1a] border border-[#D4AF37]/20 text-white outline-none focus:border-[#D4AF37]"
            />
          </div>
          {/* Categories */}
<div className="flex flex-wrap gap-3 mb-10">

  {["All", ...new Set(blogs.map((blog) => blog.category))].map((cat) => (
    <button
      key={cat}
      onClick={() => setCategory(cat)}
      className={`px-5 py-2 rounded-full transition ${
        category === cat
          ? "bg-[#D4AF37] text-black"
          : "bg-[#1a1a1a] border border-[#D4AF37]/20 text-white"
      }`}
    >
      {cat}
    </button>

  ))}

</div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredBlogs.map((blog) => (

              <div
                key={blog.id}
                className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-1"
              >

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover object-center"
                />

                <div className="p-6">

                  <span className="text-[#D4AF37] text-sm">
                    {blog.category}
                  </span>

                  <p className="text-sm text-gray-400 mt-2">
                    {blog.date} • {blog.readTime}
                  </p>

                  <h2 className="text-2xl font-bold text-[#D4AF37] mt-3">
                    {blog.title}
                  </h2>

                  <p className="text-gray-400 mt-3">
                    {blog.description}
                  </p>

                  <Link
                    to={`/blog/${blog.slug}`}
                    className="block mt-6 w-full text-center bg-[#D4AF37] text-black py-3 rounded-lg font-semibold hover:bg-[#c9a227] transition"
                  >
                    Read More
                  </Link>

                </div>

              </div>

            ))}

          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center mt-16">
              <h2 className="text-3xl text-[#D4AF37]">
                No blogs found
              </h2>

              <p className="text-gray-400 mt-3">
                Try searching with another keyword.
              </p>
            </div>
          )}
          {/* Newsletter */}
{/* Join WhatsApp Community */}
<div className="mt-24 bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-2xl p-10 text-center">

  <h2 className="text-4xl font-bold text-[#D4AF37]">
    Join Our WhatsApp Community
  </h2>

  <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
    Stay ahead in your placement journey with interview questions, resume tips,
    internship alerts, off-campus drives, coding resources, and career guidance
    delivered directly to your WhatsApp.
  </p>

  <a
    href="https://whatsapp.com/channel/0029Vb8FYo1IHph8QUSIEd3I"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-8 bg-[#D4AF37] hover:bg-[#c9a227] text-black px-8 py-4 rounded-xl font-bold transition"
  >
    📱 Join WhatsApp Community
  </a>

  {/* Trust Box */}
  <div className="mt-8 max-w-3xl mx-auto bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-6">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

      <div>
        <h3 className="text-2xl font-bold text-[#D4AF37]">1000+</h3>
        <p className="text-gray-400 text-sm mt-1">Students</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-[#D4AF37]">100+</h3>
        <p className="text-gray-400 text-sm mt-1">Interview Questions</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-[#D4AF37]">Daily</h3>
        <p className="text-gray-400 text-sm mt-1">Placement Updates</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-[#D4AF37]">Free</h3>
        <p className="text-gray-400 text-sm mt-1">Career Guidance</p>
      </div>

    </div>

  </div>


  </div>

        </div>
      </div>
    </>
  );
}
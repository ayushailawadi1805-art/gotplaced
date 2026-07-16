import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const publishBlog = async () => {
    if (!title || !description || !category || !image || !content) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "blogs"), {
        title,
        description,
        category,
        image,
        content,
        author: "GotPlaced",
        date: new Date().toLocaleDateString("en-GB"),
        readTime: "5 min read",
        createdAt: new Date(),
        slug: title
          .toLowerCase()
          .replace(/[^a-z0-9 ]/g, "")
          .replace(/\s+/g, "-"),
      });

      alert("✅ Blog Published Successfully!");

      setTitle("");
      setDescription("");
      setCategory("");
      setImage("");
      setContent("");

    } catch (err) {
      console.error(err);
      alert("❌ Error Publishing Blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white py-12 px-6">

      <div className="max-w-4xl mx-auto bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-2xl p-10">

        <h1 className="text-5xl font-bold text-[#D4AF37] mb-10">
          Admin Dashboard
        </h1>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 rounded-xl bg-[#111111] border border-[#D4AF37]/20 outline-none focus:border-[#D4AF37]"
          />

          <input
            type="text"
            placeholder="Blog Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 rounded-xl bg-[#111111] border border-[#D4AF37]/20 outline-none focus:border-[#D4AF37]"
          />

          <input
            type="text"
            placeholder="Category (React, Resume, Java...)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-4 rounded-xl bg-[#111111] border border-[#D4AF37]/20 outline-none focus:border-[#D4AF37]"
          />

          <input
            type="text"
            placeholder="/react-blog.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-4 rounded-xl bg-[#111111] border border-[#D4AF37]/20 outline-none focus:border-[#D4AF37]"
          />

          <textarea
            rows="14"
            placeholder="Write your blog content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-4 rounded-xl bg-[#111111] border border-[#D4AF37]/20 outline-none focus:border-[#D4AF37]"
          />

          <button
            onClick={publishBlog}
            disabled={loading}
            className="w-full bg-[#D4AF37] text-black py-4 rounded-xl font-bold text-lg hover:bg-[#c9a227] transition disabled:opacity-60"
          >
            {loading ? "Publishing..." : "Publish Blog"}
          </button>

        </div>

      </div>

    </div>
  );
}
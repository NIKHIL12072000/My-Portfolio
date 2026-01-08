import { useState, useMemo } from "react";
import { blogIndex } from "./blogIndex";
import BlogTabs from "./BlogTabs";
import { useNavigate } from "react-router-dom";

export default function BlogList() {
  const [activeTab, setActiveTab] = useState("DSA");
  const [activeTag, setActiveTag] = useState(null);
  const navigate = useNavigate();

  // Blogs under active tab
  const blogsByCategory = useMemo(
    () => blogIndex.filter((b) => b.category === activeTab),
    [activeTab]
  );

  // Extract unique tags for active tab
  const availableTags = useMemo(() => {
    const tagSet = new Set();
    blogsByCategory.forEach((b) => b.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet);
  }, [blogsByCategory]);

  // Apply tag filter
  const filteredBlogs = activeTag
    ? blogsByCategory.filter((b) => b.tags.includes(activeTag))
    : blogsByCategory;

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">
        Learning Made Easy with Crisp Content on Complex Topics... !{" "}
      </h1>

      {/* Tabs */}
      <BlogTabs
        active={activeTab}
        onChange={(tab) => {
          setActiveTab(tab);
          setActiveTag(null); // reset tag on tab change
        }}
      />

      {/* Tag Filter */}
      {availableTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-3 py-1 rounded-full text-xs border transition
              ${
                activeTag === null
                  ? "bg-gray-900 text-white border-gray-900"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
          >
            All
          </button>

          {availableTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded-full text-xs border transition
                ${
                  activeTag === tag
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      )}

      {/* Blog List */}
      {filteredBlogs.length === 0 ? (
        <p className="text-gray-500">No blogs found.</p>
      ) : (
        <div className="space-y-6">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.slug}
              onClick={() => navigate(`/blogs/${blog.slug}`)}
              className="p-6 border rounded-lg cursor-pointer hover:shadow transition"
            >
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="mt-1 text-sm text-gray-500">
                {blog.tags.join(" • ")}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

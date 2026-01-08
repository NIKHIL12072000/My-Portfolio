import { useParams, Link } from "react-router-dom";
import { blogIndex } from "./blogIndex";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { parseFrontmatter } from "./parseFrontmatter.js";

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogIndex.find((b) => b.slug === slug);

  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});

  useEffect(() => {
    fetch(blog.path)
      .then((res) => res.text())
      .then((raw) => {
        const { meta, content } = parseFrontmatter(raw);
        setMeta(meta);
        setContent(content);
      });
  }, [blog.path]);

  return (
    <article className="max-w-3xl mx-auto py-12 px-6">
      <Link to="/blogs" className="text-sm text-indigo-600 hover:underline">
        ← Back to blogs
      </Link>
      {console.log(meta)}
      <h1 className="mt-4 text-4xl font-bold leading-tight">{meta.title}</h1>

      <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-500">
        <span>{meta.category}</span>
        <span>•</span>
        <span>{meta.readTime}</span>
      </div>

      {meta.tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-3 py-1 text-xs text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <hr className="my-8" />

      <div className="prose prose-lg prose-indigo max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </article>
  );
}

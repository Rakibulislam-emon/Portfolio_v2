import React from 'react';
import BlogCard from './BlogCard';

export default function FeaturedPosts({ posts }) {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--color-heading)" }}>
        Featured Articles
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} featured={true} />
        ))}
      </div>
    </section>
  );
}
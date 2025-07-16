import React from 'react';
import BlogCard from './BlogCard';

export default function AllPosts({ posts }) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--color-heading)" }}>
        All Articles
      </h2>
      
      {posts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} featured={false} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4 opacity-30">📝</div>
          <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--color-heading)" }}>
            No articles found
          </h3>
          <p className="opacity-70">
            Try adjusting your search terms or category filter.
          </p>
        </div>
      )}
    </section>
  );
}
import React from 'react';
import { Calendar, Clock, ArrowRight, User, Eye } from 'lucide-react';

export default function BlogCard({ post, featured }) {
  return (
    <article
      className={`group relative p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
        featured ? 'overflow-hidden' : ''
      }`}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)"
      }}
    >
      {featured && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      )}
      
      <div className="relative z-10">
        <div className={`aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg ${
          featured ? 'mb-6' : 'mb-4'
        } overflow-hidden`}>
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div className={`flex items-center gap-${featured ? '4' : '3'} ${
          featured ? 'mb-4' : 'mb-3'
        } text-${featured ? 'sm' : 'xs'} opacity-70`}>
          {featured ? (
            <>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} />
                <span>{post.views}</span>
              </div>
            </>
          ) : (
            <>
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.views} views</span>
            </>
          )}
        </div>

        <h3 className={`${featured ? 'text-xl' : 'text-lg'} font-bold ${
          featured ? 'mb-3' : 'mb-2'
        } group-hover:text-accent transition-colors duration-300`} 
            style={{ color: "var(--color-heading)" }}>
          {post.title}
        </h3>

        <p className={`${featured ? 'text-base' : 'text-sm'} opacity-80 mb-4 line-clamp-3`}>
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {(featured ? post.tags : post.tags.slice(0, 2)).map((tag, index) => (
            <span 
              key={index}
              className={`text-xs px-${featured ? '3' : '2'} py-1 rounded-full`}
              style={{ 
                backgroundColor: "var(--color-accent)", 
                color: "white" 
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {featured ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <User size={16} color="white" />
              </div>
              <span className="text-sm font-medium">{post.author}</span>
            </div>
            
            <button className="flex items-center gap-2 text-sm font-medium group-hover:scale-110 transition-transform duration-300"
                    style={{ color: "var(--color-accent)" }}>
              Read More
              <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <button className="flex items-center gap-2 text-sm font-medium group-hover:scale-110 transition-transform duration-300"
                  style={{ color: "var(--color-accent)" }}>
            Read Article
            <ArrowRight size={14} />
          </button>
        )}
      </div>
    </article>
  );
}
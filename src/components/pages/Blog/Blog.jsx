import React, { useState, useEffect } from 'react';
import BlogHero from './BlogHero';
import SearchAndFilter from './SearchAndFilter';
import FeaturedPosts from './FeaturedPosts';
import AllPosts from './AllPosts';
import NewsletterSection from './NewsletterSection';
import { blogPosts } from '../../Data/blogData';

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', 'React', 'Node.js', 'JavaScript', 'CSS', 'Database', 'Backend'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <BlogHero isVisible={isVisible} />
        
        <SearchAndFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        {featuredPosts.length > 0 && <FeaturedPosts posts={featuredPosts} />}
        
        <AllPosts posts={regularPosts} />
        
        <NewsletterSection />
      </div>
    </div>
  );
}


import { useEffect, useState } from "react";
import { blogPosts } from "../../Data/blogData";
import AllPosts from "./AllPosts";
import BlogHero from "./BlogHero";
import FeaturedPosts from "./FeaturedPosts";
import NewsletterSection from "./NewsletterSection";
import SearchAndFilter from "./SearchAndFilter";
import { PenTool, Calendar, Coffee, AlertCircle } from "lucide-react";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    "All",
    "React",
    "Node.js",
    "JavaScript",
    "CSS",
    "Database",
    "Backend",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  // Set to true when you want to show "coming soon" instead of dummy content
  const showComingSoon = false;

  if (showComingSoon) {
    return (
      <div className="min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "var(--color-heading)" }}>
              Blog Coming Soon
            </h1>
            <p className="text-xl opacity-80 max-w-2xl mx-auto" style={{ color: "var(--color-text)" }}>
              I'm currently working on creating valuable content about web development, coding tutorials, and tech insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <PenTool size={48} className="mx-auto mb-4" style={{ color: "var(--color-accent)" }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-heading)" }}>
                Writing in Progress
              </h3>
              <p className="text-sm opacity-80" style={{ color: "var(--color-text)" }}>
                Crafting detailed tutorials and insights
              </p>
            </div>

            <div className="p-6 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <Calendar size={48} className="mx-auto mb-4" style={{ color: "var(--color-accent)" }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-heading)" }}>
                Regular Updates
              </h3>
              <p className="text-sm opacity-80" style={{ color: "var(--color-text)" }}>
                New articles will be published weekly
              </p>
            </div>

            <div className="p-6 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <Coffee size={48} className="mx-auto mb-4" style={{ color: "var(--color-accent)" }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-heading)" }}>
                Quality Content
              </h3>
              <p className="text-sm opacity-80" style={{ color: "var(--color-text)" }}>
                Focus on practical, actionable insights
              </p>
            </div>
          </div>

          <div className="p-8 rounded-xl mb-12" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--color-heading)" }}>
              What to Expect
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <ul className="space-y-2" style={{ color: "var(--color-text)" }}>
                <li>• React & JavaScript tutorials</li>
                <li>• MERN stack development guides</li>
                <li>• Frontend best practices</li>
              </ul>
              <ul className="space-y-2" style={{ color: "var(--color-text)" }}>
                <li>• Code optimization techniques</li>
                <li>• Project walkthroughs</li>
                <li>• Industry insights & trends</li>
              </ul>
            </div>
          </div>

          <button 
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "var(--color-accent)", color: "var(--color-background)" }}
          >
            Subscribe for Updates
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Demo Notice Banner */}
        <div className="mb-8 p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/10">
          <div className="flex items-center gap-3 text-yellow-400">
            <AlertCircle size={20} />
            <span className="font-medium">Demo Content</span>
          </div>
          <p className="text-sm mt-1 text-yellow-300/80">
            These are sample blog posts for demonstration. Real content coming soon!
          </p>
        </div>

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

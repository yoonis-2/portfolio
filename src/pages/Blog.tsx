import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: 'Getting Started with React and Tailwind CSS',
      excerpt: 'Learn how to set up a modern React project with Tailwind CSS and create beautiful, responsive user interfaces.',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Building Responsive Layouts with CSS Grid',
      excerpt: 'Discover the power of CSS Grid for creating complex, responsive layouts that adapt to any screen size.',
      date: '2024-12-10',
      readTime: '6 min read',
      category: 'CSS',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'JavaScript ES6+ Features Every Developer Should Know',
      excerpt: 'Explore modern JavaScript features that will make your code cleaner, more efficient, and easier to maintain.',
      date: '2024-12-05',
      readTime: '10 min read',
      category: 'JavaScript',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'The Importance of Web Accessibility',
      excerpt: 'Understanding why web accessibility matters and how to make your websites inclusive for all users.',
      date: '2024-11-28',
      readTime: '7 min read',
      category: 'Accessibility',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'State Management in React Applications',
      excerpt: 'A comprehensive guide to managing state in React apps, from useState to Redux and everything in between.',
      date: '2024-11-20',
      readTime: '12 min read',
      category: 'React',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Optimizing Web Performance: Tips and Tricks',
      excerpt: 'Learn practical techniques to improve your website\'s loading speed and overall performance.',
      date: '2024-11-15',
      readTime: '9 min read',
      category: 'Performance',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const categories = ['All', 'Web Development', 'React', 'JavaScript', 'CSS', 'Accessibility', 'Performance'];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Sharing insights, tutorials, and thoughts about web development, programming, 
            and the latest trends in technology.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12" data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    
                    <button className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                      Read More
                      <ArrowRight size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Subscribe to get notified about new blog posts and web development insights.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
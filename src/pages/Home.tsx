import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Code, Briefcase } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const featuredProjects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A responsive admin dashboard for managing products, orders, and customers with real-time analytics.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Tailwind CSS', 'Chart.js'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with drag-and-drop functionality and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'JavaScript', 'CSS3'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'A beautiful weather application with location-based forecasts and interactive maps.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'API Integration', 'Tailwind CSS'],
      liveUrl: '#',
      codeUrl: '#',
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'Business Owner',
      content: 'Yoonis delivered an exceptional website that perfectly captured our brand. His attention to detail and professionalism made the entire process smooth.',
    },
    {
      name: 'Fatima Ali',
      role: 'Startup Founder',
      content: 'Working with Yoonis was a great experience. He understood our requirements and delivered a modern, responsive website that exceeded our expectations.',
    },
    {
      name: 'Mohamed Omar',
      role: 'Marketing Director',
      content: 'Yoonis is a talented developer who combines technical skills with creative design. Our new website has significantly improved our online presence.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-delay="200">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="text-blue-600 dark:text-blue-400">Yoonis Galad</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
                Frontend Developer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm a passionate Computer Science student from Mogadishu, specializing in creating 
                beautiful and functional web experiences. I love turning ideas into reality through 
                clean code and thoughtful design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  View My Work
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center" data-aos="fade-left" data-aos-delay="400">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <User size={120} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Here are some of my recent works that showcase my skills and creativity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View All Projects
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Events I Participated In */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Events I Participated In
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Professional development events and conferences that have shaped my journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="100">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  2024 React Summit
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  Nairobi • 2024
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Attended sessions on modern React patterns and performance optimization
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Tech for Good Seminar
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  Mogadishu • 2024
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Explored how technology can drive positive social impact in Somalia
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="300">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Frontend Masterclass by Google Developers
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  Online • 2023
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Comprehensive training on modern web development best practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Feedback from satisfied clients I've had the pleasure to work with
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Have a project in mind? I'd love to hear about it and discuss how we can bring it to life.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8" data-aos="fade-up" data-aos-delay="200">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
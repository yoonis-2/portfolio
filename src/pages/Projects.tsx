import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and order processing capabilities.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Tailwind CSS', 'Chart.js', 'JavaScript'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Task Management Application',
      description: 'A collaborative project management tool with drag-and-drop functionality, team collaboration features, and progress tracking.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather information for multiple cities.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'API Integration', 'Tailwind CSS', 'Geolocation'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing web development projects with modern design and smooth animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Tailwind CSS', 'TypeScript', 'Responsive Design'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Restaurant Website',
      description: 'A modern restaurant website with online menu, reservation system, and contact information. Features beautiful food gallery and responsive design.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Blog Platform',
      description: 'A clean and minimal blog platform with article management, categories, search functionality, and responsive reading experience.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Tailwind CSS', 'Content Management', 'Search'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Landing Page Template',
      description: 'A modern, conversion-focused landing page template with hero section, features, testimonials, and contact form.',
      image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Calculator App',
      description: 'A fully functional calculator with standard arithmetic operations, memory functions, and keyboard support.',
      image: 'https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['JavaScript', 'CSS3', 'HTML5', 'Math Operations'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Music Player Interface',
      description: 'A beautiful music player interface with playlist management, audio controls, and responsive design for mobile and desktop.',
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'CSS3', 'Audio API', 'Responsive Design'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Todo List App',
      description: 'A feature-rich todo application with categories, due dates, priority levels, and local storage for persistence.',
      image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=800',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
      liveUrl: '#',
      codeUrl: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of web applications and websites I've built using modern technologies. 
            Each project represents a unique challenge and learning opportunity in my development journey.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Like What You See?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            I'm always excited to work on new projects and bring creative ideas to life. 
            Let's discuss how we can collaborate on your next web development project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Start a Project
            </a>
            <a
              href="mailto:yoonis@gmail.com"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
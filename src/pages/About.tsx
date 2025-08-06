import React from 'react';
import { Calendar, MapPin, GraduationCap, Code, Database, Globe } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'HTML5', icon: Code, level: 90 },
    { name: 'CSS3', icon: Code, level: 85 },
    { name: 'JavaScript', icon: Code, level: 80 },
    { name: 'React.js', icon: Code, level: 75 },
    { name: 'Tailwind CSS', icon: Code, level: 85 },
    { name: 'Git', icon: Database, level: 70 },
  ];

  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Tech Solutions Mogadishu',
      period: '2024 - Present',
      description: 'Developing responsive web applications using React and Tailwind CSS. Collaborating with design teams to implement user interfaces.',
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-employed',
      period: '2023 - Present',
      description: 'Creating custom websites for local businesses and entrepreneurs. Specializing in modern, responsive designs.',
    },
    {
      title: 'Computer Science Student',
      company: 'University of Somalia',
      period: '2022 - Present',
      description: 'Pursuing Bachelor\'s degree in Computer Science with focus on web technologies and software development.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a passionate frontend developer and Computer Science student based in Mogadishu, 
            dedicated to creating exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2" data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                My Journey
              </h2>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p className="text-lg leading-relaxed">
                  My journey into web development began during my first year of Computer Science studies. 
                  What started as curiosity about how websites work quickly evolved into a passion for 
                  creating beautiful, functional digital experiences. I was fascinated by the power of 
                  code to transform ideas into interactive realities.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Growing up in Mogadishu, I witnessed firsthand how technology can bridge gaps and 
                  create opportunities. This inspired me to focus on web development as a way to 
                  contribute to the digital transformation happening in Somalia and across Africa. 
                  I believe that well-designed websites and applications can empower businesses and 
                  individuals to reach their full potential.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Throughout my studies and freelance work, I've developed a strong foundation in 
                  modern web technologies. I'm particularly drawn to React.js for its component-based 
                  architecture and Tailwind CSS for its utility-first approach. These tools allow me 
                  to build scalable, maintainable applications efficiently while ensuring excellent 
                  user experiences across all devices.
                </p>
                
                <p className="text-lg leading-relaxed">
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                  projects, and mentoring fellow students who are just starting their programming journey. 
                  I believe in the power of community and knowledge sharing to drive innovation and growth 
                  in our tech ecosystem.
                </p>
              </div>
            </div>
            
            <div data-aos="fade-left" data-aos-delay="200">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Quick Facts
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin size={20} className="text-blue-600 dark:text-blue-400 mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">Mogadishu, Somalia</span>
                  </div>
                  
                  <div className="flex items-center">
                    <GraduationCap size={20} className="text-green-600 dark:text-green-400 mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">Computer Science Student</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Code size={20} className="text-purple-600 dark:text-purple-400 mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">Frontend Developer</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Globe size={20} className="text-orange-600 dark:text-orange-400 mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">Web Enthusiast</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center" data-aos="fade-up">
            Experience & Education
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center" data-aos="fade-up">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex items-center mb-4">
                  <skill.icon size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {skill.level}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yoonis@gmail.com',
      href: 'mailto:yoonis@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+252 61 2345678',
      href: 'tel:+25261234568',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mogadishu, Somalia',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'd love to hear from you! Whether you have a project in mind, need technical consultation, 
            or just want to say hello, feel free to reach out.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm" data-aos="fade-right">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send me a message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div data-aos="fade-left" data-aos-delay="200">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                      <item.icon size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.label}
                      </h3>
                      {item.href && item.href !== '#' ? (
                        <a
                          href={item.href}
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Let's work together!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  I'm always excited to take on new challenges and collaborate on innovative projects. 
                  Whether you need a new website, want to improve an existing one, or have questions 
                  about web development, I'm here to help.
                </p>
                
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Available for freelance projects</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Open to full-time opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Happy to discuss your ideas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                What types of projects do you work on?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I specialize in frontend web development including responsive websites, web applications, 
                e-commerce sites, and custom user interfaces. I work with technologies like React, 
                JavaScript, HTML5, CSS3, and Tailwind CSS.
              </p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                How long does a typical project take?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Project timelines vary depending on scope and complexity. A simple website might take 
                1-2 weeks, while a complex web application could take 4-8 weeks or more. I always 
                provide realistic timelines during our initial consultation.
              </p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Do you provide ongoing support and maintenance?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! I offer ongoing support, maintenance, and updates for all projects. This includes 
                bug fixes, content updates, and performance optimizations to keep your website running 
                smoothly.
              </p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                What's your development process like?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I follow a structured approach: initial consultation and requirements gathering, 
                design mockups and wireframes, development with regular updates, testing and 
                optimization, and finally deployment with ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Let's discuss your ideas and bring them to life with clean, modern web development.
          </p>
          <a
            href="mailto:yoonis@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Send size={20} className="mr-3" />
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
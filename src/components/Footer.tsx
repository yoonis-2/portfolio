import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
              Yoonis Galad
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Frontend Developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <MapPin size={16} className="mr-2" />
              <span>Mogadishu, Somalia</span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Media / Connect Section */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              {/* Email Icon */}
              <a
                href="mailto:yoonkagallad2021@gmail.com"
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>

              {/* GitHub Icon */}
              <a
                href="https://github.com/yoonis-2/portfolio-react"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/y%C3%B8%C3%B5%C3%B1is-g%C3%A3ll%C4%81d-yuusuf-894890291/" // <- Halkan geli LinkedIn link-gaaga saxda ah
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom line */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Yoonis Galad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

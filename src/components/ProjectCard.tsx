import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  codeUrl,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <div className="text-gray-500 dark:text-gray-400 text-sm">Project Screenshot</div>
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <Github size={16} className="mr-2" />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
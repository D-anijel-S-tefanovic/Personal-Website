import { motion } from 'framer-motion';

const ProjectCard = ({ title, techStack, githubLink, liveDemo }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{techStack}</p>
      <div className="flex space-x-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          GitHub
        </a>
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

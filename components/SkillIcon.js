import { motion } from 'framer-motion';

const SkillIcon = ({ icon, name, level }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center p-4"
    >
      <img src={icon} alt={name} className="w-16 h-16 mb-2" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-400"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  );
};

export default SkillIcon;

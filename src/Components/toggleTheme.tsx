import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = ({ theme, toggleTheme }:{ theme: string; toggleTheme: () => void; }) => {
  return (
    <motion.button aria-label={theme === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode'} name='theme-toggle' onClick={toggleTheme} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative p-3 rounded-xl overflow-hidden transition-colors duration-300" >
      <motion.div
        animate={{background: theme === 'dark' ? 'linear-gradient(45deg, #1f2937, #374151)' : 'linear-gradient(45deg, #fbbf24, #f59e0b)'}}
        transition={{ duration: 0.5 }} className="absolute inset-0"/>
      <motion.div animate={{ rotate: theme === 'dark' ? 370 : 0 }} transition={{ duration: 0.6, ease: 'easeInOut' }} className="relative z-10">
        <motion.div animate={{ scale: theme === 'dark' ? 0 : 1, opacity: theme === 'dark' ? 0 : 1 }}
          transition={{ duration: 0.3 }} className="absolute inset-0 flex items-center justify-center">
          <Sun className="w-6 h-6 text-white" name='sun-icon' />
        </motion.div>
        <motion.div
        animate={{ scale: theme === 'dark' ? 1 : 0, opacity: theme === 'dark' ? 1 : 0 }} transition={{ duration: 0.3 }} className="w-6 h-6 flex items-center justify-center"
        >
          <Moon className="w-6 h-6 text-white" name='moon-icon' />
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

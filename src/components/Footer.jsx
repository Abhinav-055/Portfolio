import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaHeart } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="relative py-10 px-4 border-t border-accent/10">
      <div className="max-w-6xl mx-auto">
        {/* Neon divider */}
        <div className="neon-line w-full mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Copyright */}
          <p className="text-slate-text text-sm flex items-center gap-1.5">
            Built with <FaHeart className="text-accent text-xs" /> by Abhinav
            Anand &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

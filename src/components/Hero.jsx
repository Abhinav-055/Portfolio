import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import { HiMail, HiPhone, HiDownload } from 'react-icons/hi';
import profileImg from '../assets/profile.jpg';

const socials = [
  { icon: <FaGithub className="text-xl text-cyan-300" />, href: 'https://github.com/Abhinav-055', label: 'GitHub' },
  { icon: <FaLinkedin className="text-xl text-cyan-300" />, href: 'https://www.linkedin.com/in/abhinav-anand--/', label: 'LinkedIn' },
  { icon: <SiLeetcode className="text-xl text-cyan-300" />, href: 'https://leetcode.com/u/AbhinavAnand05/', label: 'LeetCode' },
  { icon: <SiCodeforces className="text-xl text-cyan-300" />, href: 'https://codeforces.com/profile/abhinavanand2005.aa', label: 'Codeforces' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-8 sm:px-12 md:px-16 lg:px-24 pt-28 lg:pt-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Abhinav Anand
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-cyan-400">Software Developer</span>
          </motion.h2>

          <motion.div
            className="text-lg font-mono text-slate-300 mt-3 mb-2 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <TypeAnimation
              sequence={[
                'Backend Developer',
                2000,
                'Competitive Programmer',
                2000,
                'Problem Solver',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              className="font-mono"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-slate-300 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href="mailto:abhinav05.aa@gmail.com"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <HiMail className="text-cyan-400 text-lg" />
              abhinav05.aa@gmail.com
            </a>
            <a
              href="tel:+916392957330"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <HiPhone className="text-cyan-400 text-lg" />
              +91 6392957330
            </a>
          </motion.div>
          <br />
          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center lg:justify-start gap-5 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-full border border-cyan-400/50 flex items-center justify-center hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.1 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
          <br />
          {/* Resume Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            {/* RESUME_LINK: replace with hosted link when ready */}
            <a
              href="https://tinyurl.com/Abhinav-0551"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-[#0a0f1e] transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              style={{ padding: '0.625rem 1.75rem' }}
            >
              <HiDownload className="hidden" />
              View Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Profile Photo */}
        <motion.div
          className="flex-shrink-0 pr-0 md:pr-4 lg:pr-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="relative overflow-visible">
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 opacity-30 blur-2xl animate-pulse-glow" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(0,255,255,0.4)]">
              <img
                src={profileImg}
                alt="Abhinav Anand"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-accent/50 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-accent" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

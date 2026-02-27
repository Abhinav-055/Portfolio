import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'C/C++', 'SQL', 'HTML/CSS', 'Golang', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks',
    skills: ['Flask', 'Django', 'Gin', 'Echo', 'FastAPI', 'Node.js', 'Next.js', 'Express.js', 'ReactJS', 'NextJS', 'Bootstrap'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'],
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'VS Code', 'GitHub', 'Docker', 'Postman', 'AWS', 'Nginx', 'Render', 'Vercel', 'Netlify', 'Redis', 'Kafka'],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="relative py-24 px-8 md:px-12">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-16">
            Skills
          </h2>
        </motion.div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              className="glass rounded-2xl glow-box mx-auto w-full"
              style={{ padding: '2.5rem' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + ci * 0.15, duration: 0.5 }}
            >
              <h3 className="text-accent font-semibold text-lg font-mono" style={{ marginBottom: '1.5rem' }}>
                {`{ ${category.title} }`}
              </h3>
              <div className="flex flex-wrap w-full" style={{ gap: '0.75rem' }}>
                {category.skills.map((skill, si) => (
                  <motion.div
                    key={skill}
                    className="flex items-center rounded-full bg-accent/5 border border-accent/20 text-light-text hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all duration-300 cursor-default group"
                    style={{ padding: '0.5rem 1rem' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.3 + ci * 0.15 + si * 0.06,
                      duration: 0.4,
                    }}
                    whileHover={{ scale: 1.08, y: -2 }}
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

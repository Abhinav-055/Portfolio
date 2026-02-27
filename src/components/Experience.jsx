import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const experiences = [
  {
    role: 'SDE Intern',
    company: 'Stride.ai',
    period: 'Feb 2025 – Aug 2025',
    location: 'Bengaluru, Karnataka',
    bullets: [
      'Implemented Celery-based distributed task queues with Redis, reducing background task execution time by 60%',
      'Leveraged Apache Kafka for low-latency data streaming, boosting processing efficiency by 45%, and integrated APIs with Next.js',
      'Migrated .NET Framework C# codebase to Python on AWS Lambda, improving efficiency by 30%.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    company: 'Kyure',
    period: 'Jan 2025',
    location: 'Vellore, Tamil Nadu',
    bullets: [
      'Documented 20+ API endpoints for a Django Rest Framework application using Postman, reducing integration time by 30%',
      'Resolved JWT authentication issues during signup, enhancing system reliability by 40%, and implemented backend-driven product pricing, reducing frontend processing overhead and cutting integration time by 35%',
      'Refactored DRF models to align with business logic and eliminated circular dependencies, reducing API response time by 50%',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Scientiflow',
    period: 'Oct 2024 – Dec 2024',
    location: 'Vellore, Tamil Nadu',
    bullets: [
      'Engineered a robust token-based authentication system with encryption and API integration for a Linux-based agent application',
      'Refactored monolithic codebase by modularizing reusable components, reducing redundancy by 30%',
      'Seamlessly integrated AWS services with the Scientiflow application using FastAPI, enabling scalable and efficient cloud-based operations',
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="relative py-24 px-8 md:px-12">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-16">
            Work Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col items-center w-full mb-16">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`relative flex flex-col md:flex-row items-start w-full mb-16 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-primary z-10 shadow-[0_0_12px_rgba(0,212,255,0.5)]" />

              {/* Card */}
              <div
                className={`ml-12 md:ml-0 md:w-[45%] ${
                  i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <motion.div
                  className="glass rounded-2xl glow-box hover:border-accent/30 transition-all duration-300"
                  style={{ padding: '2.5rem' }}
                  whileHover={{ y: -5 }}
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-white-text font-bold text-lg">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-semibold flex items-center gap-2 mt-1">
                        <FaBriefcase className="text-sm" />
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-slate-text">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-accent/70" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-accent/70" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-3 pt-1">
                      {exp.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="text-slate-text text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-accent mt-1.5 flex-shrink-0">▹</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

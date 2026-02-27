import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const educationData = [
  {
    institution: 'Vellore Institute of Technology',
    degree: 'B.Tech in Information Technology',
    period: 'August 2023 – July 2027',
    grade: 'CGPA: 9.11',
    location: 'Vellore, Tamil Nadu',
  },
  {
    institution: 'City Montessori School',
    degree: 'ISC',
    period: 'May 2021 – May 2023',
    grade: 'CGPA: 93.5%',
    location: 'Lucknow, Uttar Pradesh',
  },
];

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="relative py-24 px-8 md:px-12">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-16">
            Education
          </h2>
        </motion.div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              className="glass rounded-2xl glow-box group hover:border-accent/30 transition-all duration-500 relative overflow-hidden mx-auto w-full"
              style={{ padding: '2.5rem' }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                    <FaGraduationCap className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-white-text font-bold text-base sm:text-lg leading-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-accent text-sm font-medium">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3" style={{ marginBottom: '1.5rem' }}>
                  <span className="flex items-center gap-1.5 text-xs text-slate-text bg-accent/5 rounded-full border border-accent/10" style={{ padding: '0.5rem 1rem' }}>
                    <FaCalendarAlt className="text-accent/70" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-text bg-accent/5 rounded-full border border-accent/10" style={{ padding: '0.5rem 1rem' }}>
                    <FaMapMarkerAlt className="text-accent/70" />
                    {edu.location}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-lg bg-accent/10 border border-accent/20" style={{ padding: '0.625rem 1.25rem' }}>
                  <span className="text-accent font-bold text-lg">
                    {edu.grade}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

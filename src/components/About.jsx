import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className=" py-24 ">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-16">
            About Me
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl w-full mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass rounded-2xl glow-box" style={{ padding: '2.5rem' }}>
            <p className="text-slate-text leading-relaxed text-lg text-center">
              Passionate software developer with expertise in{' '}
              <span className="text-accent">backend development</span>,{' '}
              <span className="text-accent">distributed systems</span>, and{' '}
              <span className="text-accent">problem-solving</span>. Currently
              pursuing B.Tech in Information Technology at{' '}
              <span className="text-white-text font-medium">VIT Vellore</span>{' '}
              with a CGPA of{' '}
              <span className="text-accent font-semibold">9.11</span>.
              Experienced in building scalable applications using Python, Go,
              and modern frameworks. Active competitive programmer with keen
              interest in system design and optimization.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Deribit WebSocket Trading Bot',
    description:
      'A real-time cryptocurrency trading bot leveraging WebSocket connections to interact with the Deribit exchange API. Supports automated order placement, position management, and live market data streaming.',
    github: 'https://github.com/Abhinav-055/Deribit-WebSocket-Trading-Bot',
    /* LIVE_LINK: add when deployed */
    live: null,
    tags: ['Python', 'WebSockets', 'Deribit API'],
  },
  {
    title: 'LLM Query Processor',
    description:
      'An intelligent query processing system powered by Large Language Models. Processes natural language queries and generates structured responses with context-aware understanding and efficient API integration.',
    github: 'https://github.com/Abhinav-055/Llm_query_processor',
    /* LIVE_LINK: add when deployed */
    live: null,
    tags: ['Go', 'Redis Pub/Sub', 'OpenAI API'],
  },
  // ADD_PROJECT: Add more projects here
];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="relative py-24 px-8 md:px-12">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-16">
            Projects
          </h2>
        </motion.div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="glass rounded-2xl flex flex-col justify-between glow-box group hover:border-accent/30 transition-all duration-500 relative overflow-hidden mx-auto w-full"
              style={{ padding: '3rem' }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              {/* Hover glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between" style={{ marginBottom: '2rem' }}>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                      />
                    </svg>
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-text hover:text-accent transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-text hover:text-accent transition-colors"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-white-text font-bold text-lg sm:text-xl group-hover:text-accent transition-colors" style={{ marginBottom: '1.25rem' }}>
                  {project.title}
                </h3>
                <p className="text-slate-text text-sm leading-loose" style={{ marginBottom: '2rem' }}>
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="relative z-10 flex flex-wrap mt-auto" style={{ paddingTop: '0.5rem', gap: '0.75rem' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-accent/80 bg-accent/5 rounded-full border border-accent/10"
                    style={{ padding: '0.375rem 0.875rem' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

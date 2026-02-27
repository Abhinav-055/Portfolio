import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // WEB3FORMS_ACCESS_KEY: loaded from .env
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: 'abhinav05.aa@gmail.com',
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-8 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4">
            Contact Me
          </h2>
          <p className="text-slate-text text-center mb-8 max-w-xl mx-auto">
            Have a question or want to work together? Drop me a message and
            I&apos;ll get back to you as soon as possible.
          </p>
          <br/>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl w-full glass rounded-2xl glow-box mb-16"
          style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-slate-text font-mono" style={{ marginBottom: '0.5rem' }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-lg bg-primary-light/80 border border-accent/10 text-light-text placeholder-slate-text/50 focus:outline-none focus:border-accent/50 focus:shadow-[0_0_10px_rgba(0,212,255,0.15)] transition-all duration-300 text-sm"
                style={{ padding: '1rem 1.25rem' }}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-slate-text font-mono" style={{ marginBottom: '0.5rem' }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full rounded-lg bg-primary-light/80 border border-accent/10 text-light-text placeholder-slate-text/50 focus:outline-none focus:border-accent/50 focus:shadow-[0_0_10px_rgba(0,212,255,0.15)] transition-all duration-300 text-sm"
                style={{ padding: '1rem 1.25rem' }}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm text-slate-text font-mono" style={{ marginBottom: '0.5rem' }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="w-full rounded-lg bg-primary-light/80 border border-accent/10 text-light-text placeholder-slate-text/50 focus:outline-none focus:border-accent/50 focus:shadow-[0_0_10px_rgba(0,212,255,0.15)] transition-all duration-300 text-sm resize-none"
              style={{ padding: '1rem 1.25rem' }}
            />
          </div>

          <div className="flex justify-end" style={{ marginTop: '0.5rem' }}>
          <motion.button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 rounded-full border border-accent text-accent font-medium hover:bg-accent/10 transition-all duration-300 glow-border disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ padding: '0.75rem 2rem' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </motion.button>
          </div>
        </motion.form>

        {/* Toast Notifications */}
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-8 left-1/2 z-50 flex items-center gap-3 rounded-xl shadow-2xl ${
              status === 'success'
                ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                : 'bg-red-500/20 border border-red-500/30 text-red-400'
            } backdrop-blur-xl`}
            style={{ padding: '1rem 1.5rem' }}
          >
            {status === 'success' ? (
              <>
                <FaCheckCircle className="text-xl" />
                <span className="font-medium">Message sent successfully!</span>
              </>
            ) : (
              <>
                <FaTimesCircle className="text-xl" />
                <span className="font-medium">
                  Something went wrong. Please try again.
                </span>
              </>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;

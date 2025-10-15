import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const shown = localStorage.getItem('exitPopupShown');
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !submitted) {
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown, submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email captured:', email);
    setSubmitted(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="glass-effect border border-green-500/30 rounded-2xl max-w-lg w-full p-8 relative glow-green"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500/20"
            >
              <X className="w-6 h-6" />
            </button>

            {!submitted ? (
              <>
                <div className="text-center mb-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 glow-green"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <Gift className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-2">WAIT! Before You Go...</h3>
                  <p className="text-xl text-red-400 font-semibold mb-2">
                    Your competitor just signed up.
                  </p>
                  <p className="text-lg text-gray-300">
                    Get your <span className="text-green-400 font-bold">FREE LinkedIn Profile Audit</span> (Worth $500) if you act now!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to claim your audit"
                    className="w-full px-4 py-3 bg-premium-surface border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold text-lg glow-green-strong hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Claim My Free Audit Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>

                <p className="text-sm text-gray-400 text-center mt-4">
                  Limited to 10 audits per week. No credit card required.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <motion.div
                  className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Gift className="w-8 h-8 text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">You're In!</h3>
                <p className="text-gray-300">Check your email for your free audit details.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

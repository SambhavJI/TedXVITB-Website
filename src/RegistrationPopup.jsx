import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RegistrationPopup = () => {
    const [isOpen, setIsOpen] = useState(true);

    // Lock scroll when popup is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-lg bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-h-[90vh] overflow-y-auto flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button (X) */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
                            aria-label="Close"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Event Image */}
                        <div className="relative w-full overflow-hidden flex justify-center bg-black/40">
                            <img
                                src="/BEYOND_ORIGINS.png"
                                alt="Club Event Registration"
                                className="w-full h-auto max-h-[60vh] object-contain block"
                            />
                        </div>

                        {/* Buttons Only */}
                        <div className="p-4 sm:p-6 bg-neutral-900">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="https://forms.gle/5J6t5G32nbhLjENq5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
                                >
                                    Register Now
                                </a>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex-1 border border-white/20 hover:bg-white/5 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-sm sm:text-base"
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default RegistrationPopup;

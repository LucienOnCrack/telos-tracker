'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import slush from "../../../assets/slush.svg"

const EventPage = () => {

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full text-center space-y-12">
        {/* SLUSH Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src={slush}
            alt="SLUSH"
            width={200}
            height={80}
            className="w-48 md:w-64"
            priority
          />
        </motion.div>

        {/* Event Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-white text-lg md:text-xl leading-relaxed">
            We've travelled across Europe to get here, and now we're opening our doors to those who are building tools that challenge the status quo, question the narrative, and pushing the world forward. If this sounds like you, head to the link below and join the waitlist. See you there.
          </p>
        </motion.div>

        {/* Register Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://luma.com/dopzdpa1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-semibold text-lg rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            Register
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default EventPage;





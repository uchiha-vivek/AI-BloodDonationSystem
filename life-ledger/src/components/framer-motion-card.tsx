import { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FramerMotionCard: FC = () => {
  return (
    <section className="grid place-content-center px-4 py-4 md:px-8 md:py-8">
      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 items-center justify-center">
        <Card />
        <Card1 />
        <Card2 />
      </div>
    </section>
  );
};

const Card: FC = () => {
  return (
    <motion.div
      whileHover="hover"
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      transition={{
        duration: 0.5,
        ease: "backInOut",
      }}
      className="p-8 relative h-96 w-full max-w-xs shrink-0 overflow-hidden rounded-xl bg-black flex flex-col justify-between"
      style={{
        backgroundImage: 'url("")', // Set your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 text-white space-y-4 bg-black/60 p-4 rounded">
        <motion.span
          initial={{ scale: 1 }}
          variants={{
            hover: {
              scale: 1.1,
            },
          }}
          transition={{
            duration: 0.3,
            ease: "backInOut",
          }}
          className="block my-2 origin-top-left font-mono text-4xl font-black"
        >
          Find Nearest Blood Bank
        </motion.span>
      </div>
      <Link
        to='/blood-bank'
        className="z-20 rounded border-2 bg-white/10 py-2 text-red-500 hover:bg-white/20 transition text-center"
      >
        Explore!
      </Link>
    </motion.div>
  );
};

const Card1: FC = () => {
  return (
    <motion.div
      whileHover="hover"
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      transition={{
        duration: 0.5,
        ease: "backInOut",
      }}
      className="p-8 relative h-96 w-full max-w-xs shrink-0 overflow-hidden rounded-xl bg-black flex flex-col justify-between"
      style={{
        backgroundImage: 'url("/path/to/your/image2.jpg")', // Set your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 text-white space-y-4 bg-black/60 p-4 rounded">
        <motion.span
          initial={{ scale: 1 }}
          variants={{
            hover: {
              scale: 1.1,
            },
          }}
          transition={{
            duration: 0.3,
            ease: "backInOut",
          }}
          className="block my-2 origin-top-left font-mono text-4xl font-black"
        >
          Medical Assistant Bot
        </motion.span>
      </div>
      <Link
        to='/chat-bot' // Set the correct path
        className="z-20 rounded border-2 bg-white/10 py-2 text-red-500 hover:bg-white/20 transition text-center"
      >
        Try It Out
      </Link>
    </motion.div>
  );
};

const Card2: FC = () => {
  return (
    <motion.div
      whileHover="hover"
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      transition={{
        duration: 0.5,
        ease: "backInOut",
      }}
      className="p-8 relative h-96 w-full max-w-xs shrink-0 overflow-hidden rounded-xl bg-black flex flex-col justify-between"
      style={{
        backgroundImage: 'url("")', // Set your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 text-white space-y-4 bg-black/60 p-4 rounded">
        <motion.span
          initial={{ scale: 1 }}
          variants={{
            hover: {
              scale: 1.1,
            },
          }}
          transition={{
            duration: 0.3,
            ease: "backInOut",
          }}
          className="block my-2 origin-top-left font-mono text-4xl font-black"
        >
          Donor Behaviour
        </motion.span>
      </div>
      <Link
        to='/blood-form' // Set the correct path
        className="z-20 rounded border-2 bg-white/10 py-2 text-red-500 hover:bg-white/20 transition text-center"
      >
        Try It Out
      </Link>
    </motion.div>
  );
};

export default FramerMotionCard;

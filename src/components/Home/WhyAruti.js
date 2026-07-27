import { motion } from "framer-motion";
import {
  Cpu,
  ShieldCheck,
  Zap,
  BrainCircuit,
  Layers3,
  Mic,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Receive intelligent responses in as little as 200–400ms with persistent AI streaming.",
    size: "large",
  },
  {
    icon: Mic,
    title: "Privacy First",
    description:
      "Speech is transcribed locally before sending only the completed question to the AI.",
    size: "medium",
  },
  {
    icon: ShieldCheck,
    title: "Screen-Share Protected",
    description:
      "Native desktop protection keeps Aruti hidden during Zoom, Meet and Teams screen sharing.",
    size: "medium",
  },
  {
    icon: BrainCircuit,
    title: "Smart Detection",
    description:
      "Detects when an interviewer finishes speaking before generating a response.",
    size: "small",
  },
  {
    icon: Layers3,
    title: "AI Failover",
    description:
      "Automatically switches between AI models whenever limits are reached.",
    size: "small",
  },
  {
    icon: Cpu,
    title: "Native Performance",
    description:
      "Built with Rust and Tauri for exceptional speed and minimal resource usage.",
    size: "small",
  },
];

const stats = [
  {
    value: "200–400ms",
    label: "Typical Response",
  },
  {
    value: "100%",
    label: "Local Speech Processing",
  },
  {
    value: "4",
    label: "Automatic AI Fallbacks",
  },
  {
    value: "BYOK",
    label: "Bring Your Own AI",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChooseAruti() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >

          {/* Badge */}

          <motion.div variants={item}>
            <span className="
              inline-flex
              items-center
              rounded-full
              border
              border-[var(--border-color)]
              bg-[var(--card-bg)]
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[var(--text-secondary)]
              backdrop-blur-xl
            ">
              Why Candidates Choose Aruti
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h2
            variants={item}
            className="
              mt-7
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              tracking-tight
              leading-tight
              text-[var(--text-primary)]
            "
          >
            Built for every interview.
            <br />
            <span className="text-cyan-500">
              Trusted when it matters most.
            </span>
          </motion.h2>

          {/* Subtitle */}

          <motion.p
            variants={item}
            className="
              mt-7
              text-lg
              leading-8
              text-[var(--text-secondary)]
            "
          >
            Whether you're interviewing for software engineering,
            product management, consulting, sales, finance, HR, or
            your next dream opportunity, Aruti delivers intelligent,
            private, and lightning-fast AI assistance designed for
            real conversations—not scripted demos.
          </motion.p>

        </motion.div>

        {/* ===================================================
            Bento Cards
            (Part 2 starts from here)
        ==================================================== */}

      </div>
    </section>
  );
}
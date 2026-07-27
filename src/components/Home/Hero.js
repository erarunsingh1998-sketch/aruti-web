import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { bgColor } from "../classes/TailwindClasses";
import { Mic, Monitor, Shield, Zap } from "lucide-react";
import { TbAi } from "react-icons/tb";


const randomPosition = () => ({
  x: Math.random() * 700 - 350,
  y: Math.random() * 500 - 250,
  scale: 0.8 + Math.random() * 0.6,
  rotate: Math.random() * 360,
});

const trustItems = [
  {icon: TbAi, label: "AI Copilot", iconColor:"text-violet-500"},
  {icon: Shield, label: "Stealth Mode", iconColor:"text-emerald-500"},
  {icon: Mic, label: "Local Audio Transcript", iconColor:"text-amber-500"},
  {icon: Monitor, label: "Screen Protection", iconColor:"text-cyan-500" },
  {icon: Zap, label: "Lightening Fast", iconColor:"text-rose-500" },
];

export default function Hero() {
  const [blob, setBlob] = useState(randomPosition());

  useEffect(() => {
    const interval = setInterval(() => {
      setBlob(randomPosition());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.1] dark:opacity-[0.04] [background-image:linear-gradient(var(--text-secondary)_1px,transparent_1px),linear-gradient(90deg,var(--text-secondary)_1px,transparent_1px)] [background-size:64px_64px]"/>

      <AnimatePresence mode="wait">
        <motion.div key={`${blob.x}-${blob.y}-${blob.rotate}`} className="pointer-events-none absolute left-1/4 top-3/4 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.7, x: 0, y: 0 }} animate={{opacity: 0.35, x: blob.x, y: blob.y, scale: blob.scale, rotate: blob.rotate}}
          exit={{ opacity: 0, scale: 1.3 }} transition={{ duration: 5, ease: "easeInOut",}} >
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,#00d4ff,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,#0891b2,transparent_60%)]" />
        </motion.div>
      </AnimatePresence>

<main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-28 pb-10">

  {/* Badge */}

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: .6 }}
    className="inline-flex items-center gap-3 rounded-full border border-[var(--text-secondary)]/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl px-5 py-2"
  >
    <motion.div
      animate={{
        scale: [1, 1.4, 1],
        opacity: [1, .5, 1]
      }}
      transition={{
        repeat: Infinity,
        duration: 2
      }}
      className="h-2 w-2 rounded-full bg-sky-400"
    />

    <span className="text-xs font-semibold uppercase tracking-[0.25em]">
      Powered by Gemini
    </span>

    <div className="h-1 w-1 rounded-full bg-[var(--text-secondary)]" />

    <span className="text-xs font-semibold uppercase tracking-[0.25em]">
      BYOK
    </span>
  </motion.div>

  {/* Heading */}

  <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
    transition={{ delay: .15 }} className="mt-6 max-w-6xl text-center text-3xl font-black leading-none sm:text-4xl md:text-5xl lg:text-6xl">

    <span className="text-gray-600">Stealth.</span> <span className="text-orange-600">Smart.</span> &nbsp;
    <span className="text-green-600">
      Speedy.
    </span>
  </motion.h1>

  {/* Subheading */}

  <motion.h2 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }}
    className="mt-2 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
    The Invisible{" "}
    <span className="text-[var(--text-highlight)]">
      Interview Copilot.
    </span>
  </motion.h2>

  {/* Description */}

  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }}
    className="mt-4 max-w-3xl text-center text-base  text-[var(--text-secondary)] sm:text-lg">
    Ace technical interviews with an ultra-fast desktop AI assistant
    featuring{" "} <span className="font-semibold text-[var(--text-primary)]">Local Audio Transcript</span>{" "}
    &{" "}<span className="font-semibold text-[var(--text-primary)]">Intelligent Question Detection</span>.
    Powered by Gemini, screen-share protected, and designed for lightning-fast AI responses.
  </motion.p>

  {/* CTA */}

  <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}
    transition={{ delay: .6 }} className="mt-10 flex flex-col gap-4 sm:flex-row">

    <button className="rounded-xl bg-[var(--btn-primary-bg)] px-8 py-4 font-semibold text-[var(--btn-primary-text)] shadow-xl transition hover:scale-105 active:scale-95">
      Download for Windows
    </button>

    <button className="group rounded-xl px-8 py-4 backdrop-blur-xl transition">
      <span className="flex items-center gap-3">
        Start Free Trial
        <motion.span animate={{x: [0, 5, 0]}} transition={{ repeat: Infinity, duration: 1.3}}>→</motion.span>
      </span>
    </button>
  </motion.div>

  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .75 }}
    className="mt-4 text-sm text-[var(--text-secondary)]" >
    No credit card required • Bring Your Own Gemini API Key
  </motion.p>

        {/* Trust Pills */}

  <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.9, duration: 0.7,}}
  className="absolute bottom-0 left-1/2 z-10 w-full max-w-4xl -translate-x-1/2 translate-y-1/2">
    <div className={`${bgColor} flex flex-wrap items-center justify-between
      rounded-2xl border border-[var(--text-secondary)]/10 bg-white/70 dark:bg-white/5
      backdrop-blur-2xl shadow px-2 py-2`}>
    {trustItems.map(({ icon: Icon, label, iconColor }, index) => (
      <motion.div key={label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 1 + index * 0.08,}}
        whileHover={{y: -3,}}
        className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium" >
        <Icon size={18} className={iconColor} />

        <span>{label}</span>

        {index !== trustItems.length - 1 && (
          <div className="ml-4 hidden h-5 w-px bg-[var(--text-secondary)]/20 md:block" />
        )}
      </motion.div>
    ))}
  </div>
</motion.div>
    </main>
    </section>
  );
}
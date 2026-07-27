import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Laptop,
  FileText,
  Sparkles,
  Mic,
  CheckCircle2,
} from "lucide-react";

/* ============================================================
   DEMO QUESTIONS
============================================================ */

const demoQuestions = [
  {
    question: "Explain Dependency Injection in Spring Boot.",
    answer:
      "Dependency Injection allows Spring to automatically provide object dependencies, reducing coupling and making applications easier to test and maintain.",
  },
  {
    question: "Difference between REST API and SOAP?",
    answer:
      "REST is lightweight, uses HTTP methods and usually JSON. SOAP is XML based, protocol driven, and offers stricter standards for enterprise systems.",
  },
  {
    question: "Why is Docker used in modern development?",
    answer:
      "Docker packages applications into lightweight containers, ensuring identical environments across development, testing and production.",
  },
];

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function LiveDemo() {
  const [os, setOS] = useState("WIN");

  // 0 = Listening
  // 1 = Question Detected
  // 2 = Typing Answer
  const [stage, setStage] = useState(0);

  const [questionIndex, setQuestionIndex] = useState(0);

  const [typedText, setTypedText] = useState("");

  const current = useMemo(
    () => demoQuestions[questionIndex],
    [questionIndex]
  );

  /* ============================================================
     DEMO LOOP
  ============================================================ */

  useEffect(() => {
    let timeout;

    // Listening
    if (stage === 0) {
      timeout = setTimeout(() => {
        setStage(1);
      }, 1000);
    }

    // Question detected
    else if (stage === 1) {
      timeout = setTimeout(() => {
        setTypedText("");
        setStage(2);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [stage]);

  /* ============================================================
     TYPEWRITER
  ============================================================ */

  useEffect(() => {
    if (stage !== 2) return;

    if (typedText.length < current.answer.length) {
      const timeout = setTimeout(() => {
        setTypedText(current.answer.slice(0, typedText.length + 1));
      }, 18);

      return () => clearTimeout(timeout);
    }

    // Wait before next question
    const timeout = setTimeout(() => {
      setQuestionIndex((prev) => (prev + 1) % demoQuestions.length);
      setStage(0);
    }, 1800);

    return () => clearTimeout(timeout);
  }, [typedText, stage, current]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-24">

      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <AnimatePresence mode="wait">

        <motion.img
          key={`${os}-light`}
          src={os === "WIN" ? "/win-light.png" : "/mac-light.png"}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .5 }}
          className="absolute inset-0 h-full w-full object-cover dark:hidden"
        />

      </AnimatePresence>

      <AnimatePresence mode="wait">

        <motion.img
          key={`${os}-dark`}
          src={os === "WIN" ? "/win-dark.png" : "/mac-dark.png"}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .5 }}
          className="absolute inset-0 hidden h-full w-full object-cover dark:block"
        />

      </AnimatePresence>

      {/* dark overlay */}

      <div className="absolute inset-0 bg-black/10 dark:bg-black/40" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center px-6">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-4xl font-bold text-white dark:text-white"
        >
          Watch Aruti AI Work Live
        </motion.h2>

        <p className="mb-10 max-w-2xl text-center text-white/80 dark:text-white/70">
          Simulating a real interview where Aruti AI listens, detects
          interview questions and generates concise answers instantly.
        </p>

        {/* =====================================================
            OS SWITCHER
        ====================================================== */}

        <div className="mb-10 flex rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-xl">

          <button
            onClick={() => setOS("WIN")}
            className={`flex items-center gap-2 rounded-full px-5 py-2 transition-all ${
              os === "WIN"
                ? "bg-cyan-500 text-white shadow-lg"
                : "text-white/70 hover:text-white"
            }`}
          >
            <Monitor size={18} />
            Windows
          </button>

          <button
            onClick={() => setOS("MAC")}
            className={`flex items-center gap-2 rounded-full px-5 py-2 transition-all ${
              os === "MAC"
                ? "bg-cyan-500 text-white shadow-lg"
                : "text-white/70 hover:text-white"
            }`}
          >
            <Laptop size={18} />
            macOS
          </button>

        </div>

{/* =====================================================
    GLASSMORPHIC OVERLAY
===================================================== */}

<motion.div
  initial={{ opacity: 0, y: 40, scale: 0.96 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="
    w-full
    max-w-5xl
    overflow-hidden
    rounded-[30px]
    border border-white/20
    bg-white/10
    backdrop-blur-3xl
    shadow-[0_20px_80px_rgba(0,0,0,.45)]
    dark:bg-white/[0.05]
  "
>

  {/* Header */}

  <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">

    <div className="flex items-center gap-4">

      <div className="flex gap-2">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20">
          <Sparkles className="text-cyan-400" size={18} />
        </div>

        <div>
          <p className="font-semibold text-white">
            Aruti AI
          </p>

          <p className="text-xs text-white/60">
            Always-on Interview Assistant
          </p>
        </div>

      </div>

    </div>

    {/* Listening */}

    <div className="flex items-center gap-3">

      <div
        className={`
          flex h-10 w-10 items-center justify-center rounded-full
          ${
            stage === 0
              ? "bg-emerald-500/20"
              : stage === 1
              ? "bg-cyan-500/20"
              : "bg-violet-500/20"
          }
        `}
      >
        {stage === 1 ? (
          <CheckCircle2 className="text-cyan-400" size={18} />
        ) : (
          <Mic
            size={18}
            className={
              stage === 0
                ? "text-emerald-400"
                : "text-violet-400"
            }
          />
        )}
      </div>

      <div>

        <p className="text-sm font-semibold text-white">

          {stage === 0 && "Listening..."}

          {stage === 1 && "Question Detected"}

          {stage === 2 && "Generating Answer"}

        </p>

        <div className="mt-1 flex items-end gap-[4px]">

          {[0,1,2,3,4,5].map((bar)=>(
            <motion.div
              key={bar}
              animate={{
                height:
                  stage===0
                    ? [8,22,12,28,10]
                    : [10,10]
              }}
              transition={{
                repeat: Infinity,
                duration: .8,
                delay: bar*.08
              }}
              className="w-[3px] rounded-full bg-cyan-400"
            />
          ))}

        </div>

      </div>

    </div>

  </div>

  {/* BODY */}

  <div className="grid gap-8 p-8 lg:grid-cols-[280px_1fr]">

    {/* =====================================================
        RESUME
    ====================================================== */}

    <motion.div
      layout
      className="
        rounded-2xl
        border border-white/10
        bg-white/10
        p-6
        backdrop-blur-xl
      "
    >

      <div className="mb-5 flex items-center gap-3">

        <div className="rounded-xl bg-cyan-500/20 p-3">
          <FileText className="text-cyan-400" size={20} />
        </div>

        <div>
          <p className="font-semibold text-white">
            Java_Resume.pdf
          </p>

          <p className="text-xs text-white/60">
            Resume Context
          </p>
        </div>

      </div>

      <div className="space-y-3 text-sm text-white/80">

        <div className="rounded-xl bg-white/5 p-3">
          <p className="font-medium text-cyan-300">
            Skills
          </p>

          <p className="mt-2">
            Spring Boot
          </p>

          <p>Hibernate</p>

          <p>Docker</p>

          <p>Microservices</p>

          <p>AWS</p>

        </div>

        <div className="rounded-xl bg-white/5 p-3">

          <p className="font-medium text-cyan-300">
            Experience
          </p>

          <p className="mt-2">
            Backend Java Developer
          </p>

          <p className="text-white/60">
            4+ Years
          </p>

        </div>

      </div>

    </motion.div>

    {/* =====================================================
        AI PANEL
    ====================================================== */}

    <motion.div
      layout
      className="
        rounded-2xl
        border border-white/10
        bg-white/10
        p-6
        backdrop-blur-xl
      "
    >

      <div className="mb-5 flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-[4px] text-cyan-300">
            Live Interview
          </p>

          <h3 className="mt-1 text-2xl font-semibold text-white">
            AI Assistant
          </h3>

        </div>

        <motion.div
          animate={{
            scale:[1,1.15,1]
          }}
          transition={{
            repeat:Infinity,
            duration:1
          }}
          className="h-3 w-3 rounded-full bg-emerald-400"
        />

      </div>

      {/* Question */}

      <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-5">

        <p className="mb-2 text-sm font-medium text-cyan-300">

          {stage===0
            ? "Listening for interviewer..."
            : "Question Detected"}

        </p>

        <AnimatePresence mode="wait">

          <motion.p
            key={current.question}
            initial={{opacity:0,y:10}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-10}}
            className="text-lg font-medium text-white"
          >
            {stage===0
              ? "Waiting for next question..."
              : current.question}
          </motion.p>

        </AnimatePresence>

      </div>

      {/* =====================================================
    AI ANSWER
===================================================== */}

<div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-xl">

  <div className="mb-4 flex items-center justify-between">

    <div className="flex items-center gap-2">

      <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

      <span className="text-sm font-medium text-cyan-300">
        AI Live Answer
      </span>

    </div>

    {stage === 2 && (
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{
          repeat: Infinity,
          duration: 1,
        }}
        className="text-xs text-white/60"
      >
        typing...
      </motion.span>
    )}

  </div>

  <div className="min-h-[170px] rounded-xl border border-cyan-500/10 bg-black/30 p-5">

    {stage === 0 && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex h-full items-center justify-center text-white/40"
      >
        Listening to interviewer...
      </motion.div>
    )}

    {stage === 1 && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex h-full items-center justify-center"
      >
        <div className="flex items-center gap-3">

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
            className="h-5 w-5 rounded-full border-2 border-cyan-400 border-t-transparent"
          />

          <span className="text-white/70">
            Understanding the question...
          </span>

        </div>
      </motion.div>
    )}

    {stage === 2 && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-lg leading-8 text-white">

          {typedText}

          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
            }}
            className="ml-1 inline-block h-6 w-[2px] bg-cyan-400 align-middle"
          />

        </p>
      </motion.div>
    )}

  </div>

</div>

{/* =====================================================
    FEATURE CHIPS
===================================================== */}

<div className="mt-6 flex flex-wrap gap-3">

  {[
    "Stealth Overlay",
    "AI Copilot",
    "Resume Context",
    "BYOK Ready",
    "Ultra Low Latency",
    "Local Audio",
  ].map((item) => (
    <motion.div
      key={item}
      whileHover={{
        y: -3,
        scale: 1.04,
      }}
      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-xl"
    >
      {item}
    </motion.div>
  ))}

</div>

{/* =====================================================
    FOOTER
===================================================== */}

<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">

  <div>

    <p className="text-sm font-medium text-white">
      Aruti AI
    </p>

    <p className="text-xs text-white/50">
      Real-time Interview Intelligence
    </p>

  </div>

  <motion.div
    animate={{
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      repeat: Infinity,
      duration: 2,
    }}
    className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300"
  >
    ● AI Ready
  </motion.div>

</div>

    </motion.div>

  </div>

</motion.div>

      </div>
    </section>
  );
}
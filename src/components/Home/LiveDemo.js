import { AnimatePresence, motion } from "framer-motion"
import { FileText, Laptop, Monitor, Paperclip, SendHorizonal } from "lucide-react";
import { Baloo_Tamma_2, Gugi } from "next/font/google"
import { useEffect, useMemo, useState } from "react";

export const cursive = Baloo_Tamma_2({ subsets: ["latin"] });
export const brandFont = Gugi({ subsets: ["latin"], weight: "400" });

/* ============================================================
   DEMO QUESTIONS
============================================================ */

const demoQuestions = [
  {question: "Explain Dependency Injection in Spring Boot.",
    answer:"Dependency Injection allows Spring to automatically provide object dependencies, reducing coupling and making applications easier to test and maintain.",
  },{
    question: "Difference between REST API and SOAP?",
    answer: "REST is lightweight, uses HTTP methods and usually JSON. SOAP is XML based, protocol driven, and offers stricter standards for enterprise systems.",
  },{question: "Why is Docker used in modern development?",
    answer: "Docker packages applications into lightweight containers, ensuring identical environments across development, testing and production.",
  },
];

export default function LiveDemo(){

    const [os, setOS] = useState('WIN');
    const [stage, setStage] = useState(0);     // 0 = Listening // 1 = Question Detected  // 2 = Typing Answer
    const [questionIndex, setQuestionIndex] = useState(0);
    const [typedText, setTypedText] = useState("");

    const current = useMemo(() => demoQuestions[questionIndex],[questionIndex]);

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

    return <section id="demo" className="w-full min-h-screen pt-12 pb-8">
        <div className="">
            {/* Headings */}
            <div className="w-full text-center">
                <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-5 text-center text-4xl font-bold text-gray-900 dark:text-white">
                  Watch <span className={`${cursive.className} text-semibold text-orange-600 `}>Aruti AI</span> Work Live
                </motion.h2>
                <p className="mx-auto mb-5 max-w-2xl text-center text-gray-900/80 dark:text-white/70">
                  Watch our Agents in action  where Aruti AI listens, detects interview questions and generates concise answers instantly.
                </p>
            </div>
            <div className="mx-auto mb-10 flex w-fit rounded-full border border-gray-600/20 bg-gray-500/30 p-1 backdrop-blur-xl">
              <button onClick={() => setOS("WIN")} className={`flex items-center gap-2 rounded-full px-5 py-2 transition-all ${os === "WIN" ? "bg-cyan-500 text-white shadow-lg" : "hover:text-sky-600 dark:text-white/70 dark:hover:text-white" } `}>
                <Monitor size={18} />Windows
              </button>
              <button onClick={() => setOS("MAC")} className={`flex items-center gap-2 rounded-full px-5 py-2 transition-all ${ os === "MAC" ? "bg-cyan-500 text-white shadow-lg" : "hover:text-sky-600 dark:text-white/70 dark:hover:text-white"}`}>
                <Laptop size={18} /> macOS 
              </button>
            </div>
        </div>

        <main className="w-full min-h-[110vh] relative px-3 py-2 ">
                
              {/* RAW OS Platforms bg */}
            <AnimatePresence>
                <motion.img key={`${os}-dark`} src={os === "WIN" ? "/win-dark.png" : "/mac-dark.png"} initial={{ opacity: 0, scale: 1.03 }} whileInView={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .2 }} className="absolute inset-0 -z-10 hidden h-full w-full object-stretch dark:block" />
                <motion.img key={`${os}-light`} src={os === "WIN" ? "/win-light.png" : "/mac-light.png"} initial={{ opacity: 0, scale: 1.03 }} whileInView={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .2 }} className="absolute inset-0 -z-10 h-full w-full object-stretch dark:hidden" />
            </AnimatePresence>

            {/* LIVE ARUTI AI UI In action1*/}

            <motion.div initial={{ opacity: 0, y: 40, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="ml-20 mt-15 w-full max-w-3xl overflow-hidden rounded-[30px] bg-transparent ">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-500/40 bg-slate-950/30 dark:bg-gray-100/40 backdrop-blur-sm px-6 py-1">
                    <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                            <span className="h-3 w-3 rounded-full bg-red-400" />
                            <span className="h-3 w-3 rounded-full bg-yellow-400" />
                            <span className="h-3 w-3 rounded-full bg-green-400" />
                        </div>

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl">
                                <img src="/icon.png" className="w-10" />
                            </div>

                            <div>
                                <p className="font-semibold text-white text-xl leading-5">
                                    Aruti <span className="text-sky-300">AI</span>
                                </p>
                                <p className="text-xs text-white/60 leading-4">
                                    Always-on Interview Assistant
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

                {/* BODY */}
                <div className="grid gap-5 pt-2 lg:grid-cols-[220px_1fr]">
                    {/* =====================================================
                        RESUME
                    ====================================================== */}
                    <motion.div layout className="hidden lg:block rounded-2xl border border-white/10 bg-slate-900/20 p-6 backdrop-blur-xs" >
                        <div className="mb-5 flex items-center gap-3">
                            <div className="rounded-xl p-3">
                                <FileText className="text-cyan-700 dark:text-cyan-300" size={20} />
                            </div>
                            <div>
                                <p className="font-semibold text-white">
                                    Java_Resume.pdf
                                </p>
                                <p className="text-xs text-white/80">
                                    Resume Context
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3 text-sm text-white/80">

                            <div className="rounded-xl bg-slate-900/10 p-3">
                                <p className="font-medium text-cyan-700 dark:text-cyan-300">Skills </p>
                                <p className="mt-2">Spring Boot</p>
                                <p>Hibernate</p>
                                <p>Docker</p>
                                <p>Microservices</p>
                                <p>AWS</p>
                            </div>

                            <div className="rounded-xl bg-slate-900/10 p-3">
                                <p className="font-medium text-cyan-300"> Experience </p>
                                <p className="mt-2"> Backend Java Developer</p>
                                <p className="text-white/60"> 4+ Years </p>
                            </div>

                        </div>
                    </motion.div>

                    {/* =====================================================
                        AI PANEL
                    ====================================================== */}
                    <motion.div layout className="relative rounded-2xl border border-white/10 bg-slate-900/20 px-4 py-3 backdrop-blur-xs" >
                        {/* Chat Box displaying demo detected question and typing animated AI answer after 350ms of question detection and also changing questions and answers*/}
                        {/* ===========================
                            CHAT WINDOW
                        =========================== */}

                        <div className="flex h-full flex-col pb-9  ">
                            {/* Header */}
                            <div className="mb-2 flex items-center justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-[3px] text-cyan-300">
                                        Live Interview
                                    </p>
                                </div>
                                <motion.div animate={{ scale: [0.85, 1.15, 0.85] }} transition={{repeat: Infinity,duration: 1.2,}} className="h-3 w-3 rounded-full bg-emerald-600" />
                            </div>
                            {/* Chat Area */}
                            <div className="flex h-full flex-col">
                                {/* Messages */}
                                <div className="flex-1 space-y-5 overflow-y-auto pr-1">
                                    {/* Interviewer */}
                                    <AnimatePresence mode="wait">
                                        <motion.div key={current.question} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .25 }} className="flex justify-start">
                                            <div className="max-w-[88%]">
                                                <div className="rounded-2xl rounded-tl-md border border-cyan-500/30 bg-cyan-500/15 px-5 py-1">
                                                    <div className="text-[15px] leading-7 text-white">
                                                        {stage === 0 ? "Waiting for next interview question..." : current.question}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* AI */}
                                    <div className="flex justify-end">
                                        <div className="max-w-[92%]">
                                            <div className="rounded-2xl rounded-tr-sm border border-gray-600/20 bg-slate-600/30 px-3 py-2">
                                                {(stage === 0 || stage === 1) && (<div className="flex items-center">
                                                        <div className="flex items-center gap-1 px-2 py-2">
                                                            {[0,1,2].map(dot => ( <motion.span key={dot} animate={{ y:[0,-6,0] }} transition={{  duration:.6,  repeat:Infinity, delay:dot*.18, ease:"easeInOut" }} className="h-2.5 w-2.5 rounded-full bg-cyan-300" />))}
                                                        </div>
                                                    </div>
                                                )}
                                                {stage === 2 && (<motion.div  initial={{ opacity:0 }}  animate={{ opacity:1 }} >
                                                        <p className="text-[15px] leading-6 text-white">
                                                            {typedText}
                                                            <motion.span animate={{ opacity:[0,1,0] }} transition={{  repeat:Infinity,  duration:.8 }} className="ml-1 inline-block h-6 w-[2px] bg-cyan-400 align-middle" />
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* INPUT BAR */}

                                <div className="mt-4 border-t border-white/10 pt-4">
                                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-sm">
                                        {/* Attachment */}
                                        <button className="flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-white/10" >
                                            <Paperclip size={18} className="text-white/60" />
                                        </button>
                                        {/* Input */}

                                        <input readOnly placeholder="Ask Aruti AI..." className=" flex-1 bg-transparent text-sm text-white placeholder:text-white/40 outline-none " />

                                        {/* Send */}
                                        <button className=" flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white transition hover:bg-cyan-400 " >
                                            <SendHorizonal size={18}/>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>                        
                        
                        {/* =====================================================
                            FOOTER
                        ===================================================== */}
                        <div className="absolute bottom-1 w-9/10 flex items-center justify-between border-t border-white/10 pt-2">
                            <p className={` text-sm font-medium text-white ${brandFont.className}`}>
                            Aruti <span className="text-sky-300">AI</span>
                            </p>
                            <motion.div animate={{opacity: [0.5, 1, 0.5],}} transition={{repeat: Infinity,duration: 2,}} className="rounded-full border border-emerald-400/40 bg-emerald-200/30 px-4 py-2 text-xs font-medium text-emerald-950">
                                ● Powered By Gemini
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </main>
    </section>
}
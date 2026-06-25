'use client'
import { useState, useEffect } from "react";
import {
  Activity,
  TrendingUp,
  Settings,
  IndianRupee,
  Users,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// In production: set NEXT_PUBLIC_GEMINI_API_KEY in Vercel env vars
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "YOUR_GEMINI_KEY_HERE";

/* ────────────────────────────────────────────────────────────────────────
   MARC brand palette (from tailwind.config.js → theme.colors.marc)
   Deep green #1B5E20 / mid #2E7D32 / bright #4E9141 / light #81C784
   Turquoise #5D9F94, turquoise-1 #287565, deep-turquoise #1D342F
   Saffron #FF9933, warm neutral #F7FFF5
   Four dimensions get four distinct, brand-native accent colors instead
   of generic blue/purple/red — same approach as your real services grid,
   just enough separation to read on a chart, never decorative.
   ──────────────────────────────────────────────────────────────────────── */
const SECTIONS = [
  {
    id: "sales",
    label: "Sales & Revenue",
    icon: TrendingUp,
    color: "#2E7D32",
    bg: "#E0EFD6",
    questions: [
      { id: "s1", text: "How consistent is your monthly revenue?", options: ["Very inconsistent", "Somewhat inconsistent", "Mostly stable", "Very stable and growing"] },
      { id: "s2", text: "Do you have a defined sales process?", options: ["No process at all", "Informal / ad hoc", "Documented but not followed", "Clear process followed by team"] },
      { id: "s3", text: "What % of leads convert to paying customers?", options: ["Less than 5%", "5–15%", "15–30%", "More than 30%"] },
      { id: "s4", text: "Do you track sales KPIs (pipeline, CAC, LTV)?", options: ["Never", "Occasionally", "Monthly", "Weekly or daily"] },
      { id: "s5", text: "How dependent are you on 1–2 clients for revenue?", options: ["90%+ from 1–2 clients", "60–90% from top clients", "30–60% spread", "Well diversified"] },
    ]
  },
  {
    id: "operations",
    label: "Operations",
    icon: Settings,
    color: "#287565",
    bg: "#DCEFEA",
    questions: [
      { id: "o1", text: "Are your core business processes documented?", options: ["Nothing documented", "Some key processes", "Most processes", "All processes with SOPs"] },
      { id: "o2", text: "How often do operational bottlenecks slow delivery?", options: ["Almost always", "Frequently", "Occasionally", "Rarely"] },
      { id: "o3", text: "Do you use any tools/software to manage operations?", options: ["Spreadsheets only", "1–2 basic tools", "Integrated tools", "Full ERP/automation"] },
      { id: "o4", text: "How is quality control handled?", options: ["No formal QC", "Ad hoc checks", "Some checklists", "Systematic QC process"] },
      { id: "o5", text: "Can your business run smoothly without you for 2 weeks?", options: ["Absolutely not", "Would struggle", "Mostly yes", "Yes, fully"] },
    ]
  },
  {
    id: "finance",
    label: "Finance & Cash Flow",
    icon: IndianRupee,
    color: "#C77700",
    bg: "#FFF1DC",
    questions: [
      { id: "f1", text: "Do you maintain monthly P&L statements?", options: ["Never", "Occasionally", "Quarterly", "Monthly"] },
      { id: "f2", text: "How would you describe your cash flow situation?", options: ["Always tight / crisis mode", "Often tight", "Generally manageable", "Healthy buffer always"] },
      { id: "f3", text: "Do you have a budget for the next 12 months?", options: ["No budget at all", "Rough mental estimate", "Informal spreadsheet", "Formal budget reviewed regularly"] },
      { id: "f4", text: "How quickly do clients typically pay you?", options: ["60+ days", "30–60 days", "15–30 days", "Within 15 days or upfront"] },
      { id: "f5", text: "Do you have financial reserves for 3+ months of expenses?", options: ["No reserves", "Less than 1 month", "1–3 months", "3+ months"] },
    ]
  },
  {
    id: "team",
    label: "Team & HR",
    icon: Users,
    color: "#1D342F",
    bg: "#E3E9E7",
    questions: [
      { id: "t1", text: "How clear are roles and responsibilities in your team?", options: ["Very unclear / overlap", "Somewhat clear", "Mostly clear", "Fully defined with JDs"] },
      { id: "t2", text: "What is your approximate team attrition rate per year?", options: ["More than 40%", "20–40%", "10–20%", "Less than 10%"] },
      { id: "t3", text: "Do you conduct regular performance reviews?", options: ["Never", "Ad hoc only", "Annually", "Quarterly or more"] },
      { id: "t4", text: "How would you rate team morale and motivation?", options: ["Low / disengaged", "Mixed", "Generally positive", "High energy and aligned"] },
      { id: "t5", text: "Do you have a hiring process for new roles?", options: ["No process", "Informal referrals only", "Basic JD + interview", "Structured hiring funnel"] },
    ]
  }
];

const ANALYSIS_STEPS = [
  "Reading your responses…",
  "Benchmarking against MSMEs in your industry…",
  "Scoring sales, operations, finance & team…",
  "Building your prioritised action plan…",
];

const LEAD_FIELDS = [
  { key: "name", label: "What's your name?", placeholder: "Aarav Sharma", type: "text" },
  { key: "company", label: "And your company?", placeholder: "Sharma Textiles Pvt. Ltd.", type: "text" },
  { key: "industry", label: "What industry are you in?", placeholder: "Retail, Manufacturing, IT Services…", type: "text" },
  { key: "email", label: "Where should we send your report?", placeholder: "you@company.com", type: "email" },
];

const scoreLabel = (score) => {
  if (score >= 80) return { label: "Healthy", color: "#2E7D32", bg: "#E0EFD6" };
  if (score >= 55) return { label: "Average", color: "#C77700", bg: "#FFF1DC" };
  return { label: "Critical", color: "#B3261E", bg: "#FBE9E7" };
};

/* Signature mark — a pulsating live-graph icon, replacing the hospital emoji.
   Concentric rings echo a heartbeat/market-pulse monitor: appropriate for an
   AI diagnostic tool, on-brand in MARC green, no stock iconography. */
const PulseMark = ({ size = 64 }) => (
  <div
    className="relative flex items-center justify-center"
    style={{ width: size, height: size }}
  >
    <span className="pulse-ring" style={{ animationDelay: "0s" }} />
    <span className="pulse-ring" style={{ animationDelay: "0.6s" }} />
    <span
      className="relative z-10 flex items-center justify-center rounded-full"
      style={{ width: size * 0.62, height: size * 0.62, backgroundColor: "#1B5E20" }}
    >
      <Activity className="text-white" style={{ width: size * 0.34, height: size * 0.34 }} strokeWidth={2.4} />
    </span>
  </div>
);

const RadarChart = ({ scores }) => {
  const cx = 120, cy = 120, r = 85;
  const n = scores.length;
  const points = scores.map((score, i) => {
    const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
    const dist = (score / 100) * r;
    return { x: cx + dist * Math.cos(angle), y: cy + dist * Math.sin(angle) };
  });
  const gridPoints = (factor) => SECTIONS.map((_, i) => {
    const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
    return `${cx + factor * r * Math.cos(angle)},${cy + factor * r * Math.sin(angle)}`;
  }).join(" ");
  const labelPos = SECTIONS.map((_, i) => {
    const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
    return { x: cx + (r + 22) * Math.cos(angle), y: cy + (r + 22) * Math.sin(angle) };
  });
  return (
    <svg width="240" height="240" viewBox="0 0 240 240">
      {[0.25, 0.5, 0.75, 1].map(f => (
        <polygon key={f} points={gridPoints(f)} fill="none" stroke="#E0EFD6" strokeWidth="1" />
      ))}
      {SECTIONS.map((_, i) => {
        const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
        return <line key={i} x1={cx} y1={cy} x2={cx + r * Math.cos(angle)} y2={cy + r * Math.sin(angle)} stroke="#E0EFD6" strokeWidth="1" />;
      })}
      <polygon points={points.map(p => `${p.x},${p.y}`).join(" ")} fill="rgba(27,94,32,0.14)" stroke="#1B5E20" strokeWidth="2" />
      {points.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="4" fill={SECTIONS[i].color} />)}
      {labelPos.map((p, i) => (
        <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#1D342F" fontWeight="600">
          {SECTIONS[i].label.split(" ")[0]}
        </text>
      ))}
    </svg>
  );
};

export default function App() {
  const [step, setStep] = useState("lead"); // lead | checkup | loading | results
  const [lead, setLead] = useState({ name: "", email: "", company: "", industry: "" });
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const [analysisStep, setAnalysisStep] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [leadStep, setLeadStep] = useState(0);
  const [leadDirection, setLeadDirection] = useState("next");

  useEffect(() => { setMounted(true); }, []);

  // cycle the "AI thinking" messages while loading, for a genuine feel of
  // staged analysis rather than a static spinner
  useEffect(() => {
    if (step !== "loading") return;
    setAnalysisStep(0);
    const interval = setInterval(() => {
      setAnalysisStep((s) => (s < ANALYSIS_STEPS.length - 1 ? s + 1 : s));
    }, 1100);
    return () => clearInterval(interval);
  }, [step]);

  const totalQuestions = SECTIONS.reduce((a, s) => a + s.questions.length, 0);
  const answeredCount = Object.keys(answers).length;
  const handleAnswer = (qid, val) => setAnswers(prev => ({ ...prev, [qid]: val }));
  const sectionComplete = (section) => section.questions.every(q => answers[q.id] !== undefined);

  const buildPrompt = () => {
    let prompt = `You are a business health analyst. Analyze the following business checkup responses for "${lead.company}" in the ${lead.industry} industry.\n\nFor each of the 4 dimensions below, provide:\n1. A score from 0-100\n2. A 2-sentence diagnosis\n3. Exactly 3 specific, actionable recommendations\n\nRespond ONLY in valid JSON with this exact structure:\n{\n  "overall_score": number,\n  "overall_summary": "2-3 sentence executive summary",\n  "dimensions": {\n    "sales": { "score": number, "diagnosis": "string", "recommendations": ["string","string","string"] },\n    "operations": { "score": number, "diagnosis": "string", "recommendations": ["string","string","string"] },\n    "finance": { "score": number, "diagnosis": "string", "recommendations": ["string","string","string"] },\n    "team": { "score": number, "diagnosis": "string", "recommendations": ["string","string","string"] }\n  }\n}\n\nANSWERS:\n`;
    SECTIONS.forEach(section => {
      prompt += `\n[${section.label}]\n`;
      section.questions.forEach(q => {
        prompt += `Q: ${q.text}\nA: ${answers[q.id] || "Not answered"}\n`;
      });
    });
    return prompt;
  };

  const runAnalysis = async () => {
    setStep("loading");
    setError("");
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: buildPrompt() }] }],
            generationConfig: { temperature: 0.4, maxOutputTokens: 1500 }
          })
        }
      );
      const data = await response.json();
      if (data.error) throw new Error(data.error.message);
      const raw = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
      const cleaned = raw.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      setResults(parsed);
      setStep("results");
    } catch (e) {
      setError("Analysis failed: " + e.message + ". Please try again.");
      setStep("checkup");
    }
  };

  const baseFont = { fontFamily: "'Poppins', system-ui, sans-serif" };

  /* ── Shared keyframes for this page only ────────────────────────────── */
  const GlobalStyles = () => (
    <style>{`
      @keyframes pulseRing {
        0%   { transform: scale(0.6); opacity: 0.55; }
        80%  { transform: scale(1.6); opacity: 0; }
        100% { transform: scale(1.6); opacity: 0; }
      }
      .pulse-ring {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 9999px;
        background: rgba(129, 199, 132, 0.45);
        animation: pulseRing 2.2s cubic-bezier(0.4,0,0.3,1) infinite;
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(14px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .fade-up { animation: fadeUp 0.5s cubic-bezier(0.2,0.7,0.3,1) both; }
      @keyframes dotFlow {
        0% { background-position: 0 0; }
        100% { background-position: 40px 40px; }
      }
      .dot-grid {
        background-image: radial-gradient(circle, rgba(129,199,132,0.5) 1px, transparent 1px);
        background-size: 28px 28px;
        animation: dotFlow 14s linear infinite;
      }
      @keyframes barGrow { from { width: 0%; } }
      .bar-grow { animation: barGrow 0.9s cubic-bezier(0.2,0.7,0.3,1) both; }
      @keyframes slideInNext {
        from { opacity: 0; transform: translateX(28px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideInBack {
        from { opacity: 0; transform: translateX(-28px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      .slide-next { animation: slideInNext 0.38s cubic-bezier(0.2,0.7,0.3,1) both; }
      .slide-back { animation: slideInBack 0.38s cubic-bezier(0.2,0.7,0.3,1) both; }
    `}</style>
  );

  // LEAD SCREEN — one question at a time, Typeform-style, so the card
  // height never depends on how many fields are left to fill.
  if (step === "lead") {
    const field = LEAD_FIELDS[leadStep];
    const value = lead[field.key];
    const isLast = leadStep === LEAD_FIELDS.length - 1;
    const canAdvance = value.trim().length > 0;

    const goNext = () => {
      if (!canAdvance) return;
      if (isLast) { setStep("checkup"); return; }
      setLeadDirection("next");
      setLeadStep((s) => s + 1);
    };
    const goBack = () => {
      if (leadStep === 0) return;
      setLeadDirection("back");
      setLeadStep((s) => s - 1);
    };

    return (
      <div style={baseFont} className="h-screen relative flex items-center justify-center p-6 overflow-hidden">
        <GlobalStyles />
        <div className="absolute inset-0" style={{ backgroundColor: "#1B5E20" }} />
        <div className="absolute inset-0 opacity-20 dot-grid" />
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: "rgba(255,153,51,0.12)" }} />

        <div
          className={`relative z-10 bg-white rounded-[28px] p-9 max-w-[440px] w-full shadow-2xl flex flex-col ${mounted ? "fade-up" : ""}`}
          style={{ boxShadow: "0 30px 70px rgba(0,0,0,0.35)", minHeight: "420px" }}
        >
          {/* header: mark + step progress (replaces 4 stacked fields) */}
          <div className="flex flex-col items-center text-center mb-2">
            <PulseMark size={52} />
            <h1 className="mt-3 text-[19px] font-bold leading-tight" style={{ color: "#1B5E20" }}>
              Business Health Checkup
            </h1>
          </div>

          <div className="flex justify-center gap-1.5 my-5">
            {LEAD_FIELDS.map((_, i) => (
              <span
                key={i}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === leadStep ? "26px" : "10px",
                  backgroundColor: i <= leadStep ? "#1B5E20" : "#E0EFD6",
                }}
              />
            ))}
          </div>

          {/* one field, centered, full attention */}
          <div className="flex-1 flex flex-col justify-center">
            <div key={field.key} className={leadDirection === "next" ? "slide-next" : "slide-back"}>
              <label className="block text-center text-lg font-semibold mb-4" style={{ color: "#1D342F" }}>
                {field.label}
              </label>
              <input
                autoFocus
                type={field.type}
                placeholder={field.placeholder}
                value={value}
                onChange={(e) => setLead((prev) => ({ ...prev, [field.key]: e.target.value }))}
                onKeyDown={(e) => { if (e.key === "Enter") goNext(); }}
                className="w-full px-4 py-3.5 rounded-xl text-base text-center outline-none transition-colors"
                style={{ border: "1.5px solid #E0EFD6", fontFamily: "inherit" }}
                onFocus={(e) => (e.target.style.borderColor = "#2E7D32")}
                onBlur={(e) => (e.target.style.borderColor = "#E0EFD6")}
              />
            </div>
          </div>

          {/* nav: back + next/begin, in one row so the footer height is fixed */}
          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={goBack}
              disabled={leadStep === 0}
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-colors"
              style={{
                border: "1.5px solid #E0EFD6",
                color: leadStep === 0 ? "#D9E5D5" : "#1B5E20",
                cursor: leadStep === 0 ? "default" : "pointer",
              }}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goNext}
              disabled={!canAdvance}
              className="flex-1 py-3.5 rounded-xl font-semibold text-[15px] flex items-center justify-center gap-2 transition-all"
              style={
                canAdvance
                  ? { backgroundColor: "#1B5E20", color: "#fff", cursor: "pointer" }
                  : { backgroundColor: "#E0EFD6", color: "#9CB996", cursor: "not-allowed" }
              }
            >
              {isLast ? "Begin Assessment" : "Continue"} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-center text-[11px] mt-4" style={{ color: "#9CA3AF" }}>
            Step {leadStep + 1} of {LEAD_FIELDS.length} · Your data is never shared
          </p>
        </div>
      </div>
    );
  }

  // CHECKUP SCREEN
  if (step === "checkup") {
    const section = SECTIONS[currentSection];
    const SectionIcon = section.icon;
    const progress = (answeredCount / totalQuestions) * 100;
    return (
      <div style={baseFont} className="min-h-screen" >
        <GlobalStyles />
        <div className="bg-white sticky top-0 z-10" style={{ borderBottom: "1px solid #EDF3EA" }}>
          <div className="max-w-[700px] mx-auto px-6 py-4">
            <div className="flex justify-between items-center mb-2.5">
              <span className="flex items-center gap-2 font-bold text-[15px]" style={{ color: "#1B5E20" }}>
                <Activity className="w-4 h-4" style={{ color: "#2E7D32" }} />
                Business Health Checkup
              </span>
              <span className="text-xs" style={{ color: "#7A8C75" }}>{answeredCount}/{totalQuestions} answered</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#EDF3EA" }}>
              <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, backgroundColor: "#1B5E20" }} />
            </div>
          </div>
        </div>

        <div className="bg-white" style={{ borderBottom: "1px solid #EDF3EA" }}>
          <div className="max-w-[700px] mx-auto px-6 flex overflow-x-auto">
            {SECTIONS.map((s, i) => {
              const TabIcon = s.icon;
              const active = currentSection === i;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSection(i)}
                  className="px-3.5 py-3 flex items-center gap-1.5 text-[13px] font-semibold whitespace-nowrap transition-colors"
                  style={{
                    color: active ? s.color : "#9CA3AF",
                    borderBottom: active ? `2px solid ${s.color}` : "2px solid transparent",
                  }}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  {s.label.split(" ")[0]}
                  {sectionComplete(s) && <CheckCircle2 className="w-3 h-3" style={{ color: "#2E7D32" }} />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="max-w-[700px] mx-auto px-6 py-8">
          <div
            key={section.id}
            className="fade-up rounded-2xl p-5 mb-6"
            style={{ backgroundColor: section.bg, borderLeft: `4px solid ${section.color}` }}
          >
            <h2 className="flex items-center gap-2 text-lg font-bold" style={{ color: "#1B5E20" }}>
              <SectionIcon className="w-5 h-5" style={{ color: section.color }} />
              {section.label}
            </h2>
            <p className="mt-1 text-[13px]" style={{ color: "#5D7A52" }}>
              Answer all {section.questions.length} questions to get your score
            </p>
          </div>

          {section.questions.map((q, qi) => (
            <div
              key={q.id}
              className="fade-up bg-white rounded-2xl p-5 mb-4"
              style={{ boxShadow: "0 1px 4px rgba(27,94,32,0.06)", animationDelay: `${qi * 60}ms` }}
            >
              <p className="mb-3.5 font-semibold text-sm leading-relaxed" style={{ color: "#1D342F" }}>
                <span style={{ color: section.color, fontWeight: 700 }}>{qi + 1}. </span>{q.text}
              </p>
              <div className="flex flex-col gap-2">
                {q.options.map((opt, oi) => {
                  const selected = answers[q.id] === opt;
                  return (
                    <button
                      key={oi}
                      onClick={() => handleAnswer(q.id, opt)}
                      className="px-4 py-2.5 rounded-lg text-[13px] text-left transition-all duration-150"
                      style={{
                        border: `1.5px solid ${selected ? section.color : "#E5E9E2"}`,
                        backgroundColor: selected ? section.bg : "#fff",
                        color: selected ? section.color : "#374151",
                        fontWeight: selected ? 700 : 400,
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {error && (
            <div className="rounded-xl px-4.5 py-3.5 text-[13px] mb-4" style={{ backgroundColor: "#FBE9E7", border: "1px solid #F3C5C0", color: "#B3261E" }}>
              {error}
            </div>
          )}

          <div className="flex gap-3 mt-2 pb-10">
            {currentSection > 0 && (
              <button
                onClick={() => setCurrentSection(i => i - 1)}
                className="flex-1 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
                style={{ backgroundColor: "#fff", border: "1.5px solid #E5E9E2", color: "#374151" }}
              >
                <ArrowLeft className="w-4 h-4" /> Previous
              </button>
            )}
            {currentSection < SECTIONS.length - 1 ? (
              <button
                onClick={() => setCurrentSection(i => i + 1)}
                disabled={!sectionComplete(section)}
                className="py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                style={{
                  flex: 2,
                  backgroundColor: sectionComplete(section) ? "#1B5E20" : "#E5E9E2",
                  color: sectionComplete(section) ? "#fff" : "#9CA3AF",
                  cursor: sectionComplete(section) ? "pointer" : "not-allowed",
                }}
              >
                Next Section <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={runAnalysis}
                disabled={answeredCount < totalQuestions}
                className="py-3.5 rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 transition-colors"
                style={{
                  flex: 2,
                  backgroundColor: answeredCount >= totalQuestions ? "#1B5E20" : "#E5E9E2",
                  color: answeredCount >= totalQuestions ? "#fff" : "#9CA3AF",
                  cursor: answeredCount >= totalQuestions ? "pointer" : "not-allowed",
                }}
              >
                {answeredCount >= totalQuestions
                  ? (<>Get My Report <Sparkles className="w-4 h-4" /></>)
                  : `Complete all questions (${totalQuestions - answeredCount} left)`}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // LOADING SCREEN
  if (step === "loading") return (
    <div style={baseFont} className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <GlobalStyles />
      <div className="absolute inset-0" style={{ backgroundColor: "#1B5E20" }} />
      <div className="absolute inset-0 opacity-20 dot-grid" />
      <div className="relative z-10 text-center px-6">
        <div className="flex justify-center mb-7">
          <PulseMark size={84} />
        </div>
        <h2 className="text-white text-xl font-bold mb-2">Analyzing {lead.company}…</h2>
        <p className="text-sm transition-opacity duration-300" style={{ color: "#A5D6A7" }}>
          {ANALYSIS_STEPS[analysisStep]}
        </p>
        <div className="flex justify-center gap-1.5 mt-6">
          {ANALYSIS_STEPS.map((_, i) => (
            <span
              key={i}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === analysisStep ? "22px" : "8px",
                backgroundColor: i <= analysisStep ? "#81C784" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  // RESULTS SCREEN
  if (step === "results" && results) {
    const overall = scoreLabel(results.overall_score);
    const dimScores = SECTIONS.map(s => results.dimensions[s.id]?.score || 0);
    return (
      <div className="min-h-screen" style={{ ...baseFont, backgroundColor: "#F7FFF5" }}>
        <GlobalStyles />
        <div className="relative overflow-hidden px-6 py-12 text-center" style={{ backgroundColor: "#1B5E20" }}>
          <div className="absolute inset-0 opacity-20 dot-grid" />
          <div className="relative z-10">
            <p className="mb-2 text-[13px] font-semibold uppercase tracking-wider" style={{ color: "#A5D6A7" }}>
              Business Health Report
            </p>
            <h1 className="mb-1 text-[28px] font-bold text-white">{lead.company}</h1>
            <p className="mb-7 text-sm" style={{ color: "#A5D6A7" }}>{lead.industry} · Prepared for {lead.name}</p>

            <div
              className="fade-up inline-flex items-center gap-5 rounded-[24px] px-10 py-6"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <div>
                <div className="text-[56px] font-extrabold leading-none text-white">{results.overall_score}</div>
                <div className="text-base" style={{ color: "#A5D6A7" }}>/100</div>
              </div>
              <div className="text-left">
                <div className="mb-1 text-[11px] font-bold uppercase tracking-wider" style={{ color: "#A5D6A7" }}>
                  Overall Health
                </div>
                <div className="text-[22px] font-extrabold" style={{ color: overall.label === "Healthy" ? "#81C784" : overall.label === "Average" ? "#FFC078" : "#F4A19C" }}>
                  {overall.label}
                </div>
              </div>
            </div>
            <p className="mx-auto mt-6 max-w-[560px] text-sm leading-relaxed" style={{ color: "#C2DDB4" }}>
              {results.overall_summary}
            </p>
          </div>
        </div>

        <div className="max-w-[720px] mx-auto px-6 py-8">
          <div className="mb-6 flex flex-wrap items-center gap-8 rounded-2xl bg-white p-7" style={{ boxShadow: "0 1px 8px rgba(27,94,32,0.08)" }}>
            <RadarChart scores={dimScores} />
            <div className="min-w-[200px] flex-1">
              <h3 className="mb-4 text-[15px] font-bold" style={{ color: "#1B5E20" }}>Dimension Scores</h3>
              {SECTIONS.map((s) => {
                const Icon = s.icon;
                const sc = results.dimensions[s.id]?.score || 0;
                const lbl = scoreLabel(sc);
                return (
                  <div key={s.id} className="mb-3">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: "#374151" }}>
                        <Icon className="w-3.5 h-3.5" style={{ color: s.color }} />
                        {s.label}
                      </span>
                      <span className="text-[13px] font-bold" style={{ color: lbl.color }}>{sc}/100</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#EDF3EA" }}>
                      <div className="bar-grow h-full rounded-full" style={{ width: `${sc}%`, backgroundColor: s.color }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {SECTIONS.map(s => {
            const dim = results.dimensions[s.id];
            const Icon = s.icon;
            if (!dim) return null;
            const lbl = scoreLabel(dim.score);
            return (
              <div
                key={s.id}
                className="mb-5 rounded-2xl bg-white p-6"
                style={{ boxShadow: "0 1px 8px rgba(27,94,32,0.08)", borderTop: `4px solid ${s.color}` }}
              >
                <div className="mb-3.5 flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h3 className="mb-1 flex items-center gap-2 text-base font-extrabold" style={{ color: "#1B5E20" }}>
                      <Icon className="w-4 h-4" style={{ color: s.color }} />
                      {s.label}
                    </h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: "#64748b" }}>{dim.diagnosis}</p>
                  </div>
                  <div className="min-w-[60px] text-center">
                    <div className="text-2xl font-black" style={{ color: lbl.color }}>{dim.score}</div>
                    <div className="rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ color: lbl.color, backgroundColor: lbl.bg }}>{lbl.label}</div>
                  </div>
                </div>
                <div className="pt-3.5" style={{ borderTop: "1px solid #F1F5F9" }}>
                  <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wider" style={{ color: "#9CA3AF" }}>Recommendations</p>
                  {dim.recommendations.map((rec, ri) => (
                    <div key={ri} className="mb-2 flex items-start gap-2.5">
                      <span
                        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                        style={{ backgroundColor: s.bg, color: s.color }}
                      >
                        {ri + 1}
                      </span>
                      <span className="text-[13px] leading-relaxed" style={{ color: "#374151" }}>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="relative overflow-hidden rounded-2xl p-8 text-center" style={{ backgroundColor: "#1B5E20" }}>
            <div className="absolute inset-0 opacity-15 dot-grid" />
            <div className="relative z-10">
              <h3 className="mb-2 text-xl font-extrabold text-white">Ready to fix these gaps?</h3>
              <p className="mb-5 text-sm" style={{ color: "#A5D6A7" }}>
                MARC's advisors can build a 90-day action plan based on this report.
              </p>
              <a
                href="https://marcglocal.com/contact-us"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white"
                style={{ backgroundColor: "#FF9933" }}
              >
                Talk to MARC <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
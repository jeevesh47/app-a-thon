import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { CodeParticles } from "@/components/CodeParticles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: 'APP"A"THON — Code the Edge. Master the Exceptions.' },
      {
        name: "description",
        content:
          'APP"A"THON is a technical coding competition where teams build working solutions and defend their edge-case model in a final presentation.',
      },
      { property: "og:title", content: 'APP"A"THON — Code the Edge. Master the Exceptions.' },
      {
        property: "og:description",
        content:
          "A coding challenge focused on edge cases, exception handling and a mandatory Edge Case Model presentation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Format", href: "#format" },
  { label: "Problems", href: "#problems" },
  { label: "Rules", href: "#rules" },
  { label: "Timeline", href: "#timeline" },
  { label: "Prizes", href: "#prizes" },
];

const RULES = [
  "Choose one problem statement from the revealed challenges.",
  "Develop an app/prototype within the given time.",
  "Ensure your solution is innovative, functional and relevant.",
  "Present and demonstrate your solution before the jury panel.",
  "Judging will be based on innovation, functionality, technical implementation, impact, UI/UX and presentation.",
  "Jury decision will be final.",
];

const STEPS = [
  {
    n: "01",
    title: "Problem Statement",
    body: "Every team receives the same sealed problem statement at kickoff. Read it closely — the wording hides the traps.",
  },
  {
    n: "02",
    title: "Coding & Implementation",
    body: "Build a working solution in the language of your choice. Correct output on the happy path is only the entry ticket.",
  },
  {
    n: "03",
    title: "Edge Case Identification",
    body: "Hunt down everything that could break your logic — nulls, limits, duplicates, malformed input, scale.",
  },
  {
    n: "04",
    title: "Output Generation",
    body: "Produce clean, reproducible outputs for normal runs and for each edge case you claim to handle.",
  },
  {
    n: "05",
    title: "Edge Case Model",
    body: "Turn your findings into a structured model: scenario, expectation, actual behaviour, and the guard you wrote.",
  },
];

const PROBLEMS: { title: string; desc: string; cat: string }[] = [
  // Education
  { title: "Student Dropout Risk Predictor", desc: "Flag at-risk students early from attendance, grades and engagement signals.", cat: "Education" },
  { title: "Classroom Resource Allocation Optimizer", desc: "Assign rooms, labs and equipment across timetables with zero conflicts.", cat: "Education" },
  { title: "Plagiarism & Similarity Detection in Code Submissions", desc: "Detect copied and lightly-refactored submissions at scale.", cat: "Education" },
  { title: "Attendance Pattern Analyzer", desc: "Surface chronic absenteeism patterns and anomalies from raw attendance logs.", cat: "Education" },
  // Healthcare & Public Health
  { title: "Medicine Stock Expiry Alert System", desc: "Predict expiring inventory and trigger reorder or redistribution alerts.", cat: "Healthcare" },
  { title: "Blood Bank Supply-Demand Balancer", desc: "Match blood group inventory against forecasted hospital demand.", cat: "Healthcare" },
  { title: "Elderly Fall-Risk Scoring from Mobility Data", desc: "Score fall risk from gait and movement telemetry to prioritise care.", cat: "Healthcare" },
  // Agriculture & Environment
  { title: "Pest Attack Early Warning System", desc: "Predict pest outbreaks from weather and historical crop data.", cat: "Agriculture" },
  { title: "Irrigation Scheduling Optimizer", desc: "Schedule watering from soil moisture, crop stage and forecast data.", cat: "Agriculture" },
  { title: "Crop Yield Prediction from Soil and Weather Data", desc: "Estimate yield per plot ahead of harvest for planning and pricing.", cat: "Agriculture" },
  // Transportation & Urban Planning
  { title: "Ambulance Dispatch Optimizer", desc: "Route the nearest available unit through live traffic to minimise response time.", cat: "Transportation" },
  { title: "EV Charging Station Placement Optimizer", desc: "Pick station locations that maximise coverage under budget constraints.", cat: "Transportation" },
  { title: "Parking Space Availability Predictor", desc: "Forecast free parking spots by zone and time of day.", cat: "Transportation" },
  // Disaster Management & Safety
  { title: "Disaster Relief Resource Distribution Optimizer", desc: "Allocate food, medicine and crews across affected zones by urgency.", cat: "Disaster Management" },
  { title: "Fire Incident Response Time Analyzer", desc: "Analyse dispatch logs to find response-time bottlenecks by district.", cat: "Disaster Management" },
  // Smart City & Infrastructure
  { title: "Water Pipeline Leak Detection", desc: "Localise leaks from pressure and flow sensor anomalies.", cat: "Smart City" },
  
  { title: "Electricity Usage Anomaly Detector", desc: "Catch theft, meter faults and abnormal consumption in usage streams.", cat: "Smart City" },
  // Cyber Security
  { title: "IoT Device Anomaly Detector", desc: "Spot compromised IoT devices from behavioural traffic baselines.", cat: "Cyber Security" },
  { title: "Deepfake Detection for Fraud Prevention", desc: "Classify manipulated audio and video used in identity fraud.", cat: "Cyber Security" },
  { title: "Credential Stuffing Attack Detector", desc: "Identify automated login attacks across authentication logs in real time.", cat: "Cyber Security" },
];

const PROBLEM_CATEGORIES = [
  "All",
  "Education",
  "Healthcare",
  "Agriculture",
  "Transportation",
  "Disaster Management",
  "Smart City",
  "Cyber Security",
];


const MODEL = [
  { k: "Problem scenario", v: "Restate the case you are testing in one clear line." },
  { k: "Normal-case logic", v: "Show the intended flow your solution follows when input behaves." },
  { k: "Identified edge cases", v: "List each exceptional scenario and why it threatens the logic." },
  { k: "Expected vs actual output", v: "Put them side by side — before and after your fix." },
  { k: "How the code handles it", v: "Point to the guard, validation or fallback that catches it." },
  { k: "Improvements / optimizations", v: "What you would harden next given more time." },
];

const TIMELINE = [
  { phase: "9:30 - 10:30", title: "Inauguration Ceremony", when: "Date TBA", body: "Formal opening of the event with welcome address, Tamil Thai Valthu, dignitary speeches, chief guest addresses, and felicitation." },
  { phase: "10:30 - 12:40", title: "APP Building - Session I", when: "Date TBA", body: "Participants begin developing their app/prototype based on the chosen problem statement, focusing on core functionality and innovative solutions." },
  { phase: "12:40 - 13:10", title: "Lunch Break", when: "Date TBA", body: "A short break for participants to refresh and recharge before continuing the app development sessions." },
  { phase: "13:10 - 16:10", title: "APP Building - Session II", when: "Date TBA", body: "Participants continue building and refining their app/prototype, focusing on completing core features and improving functionality." },
  { phase: "16:10 - 16:30", title: "Valedictory Ceremony", when: "Date TBA", body: "Final submission, announcement of winners, prize distribution, National Anthem, and formal conclusion of the event." },
];
  
const PRIZES = [
  { rank: "Runner Up", amount: "Prize TBA", perks: ["Certificates", "Goodies"], featured: false },
  { rank: "Champion", amount: "Prize TBA", perks: ["Winner trophy", "Certificates", "Goodies"], featured: true },
  { rank: "Best Edge Case Model", amount: "Special Award", perks: ["Certificates", "Special mention"], featured: false },
];

const FAQS = [
  {
    q: "Who can participate?",
    a: "Eligibility is open to all students from participating institutions. Exact criteria will be confirmed on the registration form.",
  },
  {
    q: "What is the team size?",
    a: "Teams of 2 to 4 members (placeholder). Solo entries may be allowed at the organisers' discretion.",
  },
  {
    q: "Which programming languages are allowed?",
    a: "Any mainstream language — C, C++, Java, Python, JavaScript and more. Judging looks at logic and edge-case handling, not syntax choice.",
  },
  {
    q: "How is the winner decided?",
    a: "Working solution, depth and correctness of identified edge cases, quality of handling, and clarity of the final presentation.",
  },
  {
    q: "Can we use AI tools or external libraries?",
    a: "Standard libraries are fine. Any restrictions on AI assistance will be stated in the rulebook shared at kickoff.",
  },
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      APP<span className="text-gradient">&quot;A&quot;</span>THON
    </span>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass shadow-2xl" : "border border-transparent"
        }`}
      >
        <a href="#top" className="font-display text-sm font-bold tracking-[0.18em] sm:text-base">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfT56rOasmwIhuhehfhPXnwRrk_BD-Hht5E5YmREN3ef_hQNw/viewform?usp=sharing&ouid=109236939160750032323" className="btn-primary hidden rounded-full px-5 py-2 text-sm sm:inline-block">
            Register
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="btn-ghost rounded-full px-3 py-2 text-sm md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-5xl rounded-3xl p-4 md:hidden">
          <div className="flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfT56rOasmwIhuhehfhPXnwRrk_BD-Hht5E5YmREN3ef_hQNw/viewform?usp=sharing&ouid=109236939160750032323"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 rounded-full px-5 py-3 text-center text-sm"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
      {children}
    </span>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-medium sm:text-lg">{q}</span>
        <span
          className={`text-primary transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          aria-hidden
        >
          ＋
        </span>
      </button>
      <div
        className="grid transition-all duration-400 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

function ProblemStatements() {
  const [cat, setCat] = useState("All");
  const items = cat === "All" ? PROBLEMS : PROBLEMS.filter((p) => p.cat === cat);

  return (
    <section id="problems" className="relative px-5 py-28">
      <div aria-hidden className="absolute inset-0 grid-bg-soft" />
      <div
        aria-hidden
        className="orb h-[26rem] w-[26rem] top-24 -right-32"
        style={{ background: "var(--neon)", opacity: 0.2 }}
      />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Problem Statements</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-3xl font-bold sm:text-5xl">
            Choose a real-world challenge. <span className="text-gradient">Code the solution.</span>{" "}
            Conquer the edge cases.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Twenty production-grade problem statements across seven domains. Pick one at kickoff and
            make it survive everything the judges throw at it.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap gap-2">
            {PROBLEM_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 ${
                  cat === c
                    ? "border-primary/60 bg-primary/15 text-primary"
                    : "border-border bg-secondary/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
                style={cat === c ? { boxShadow: "var(--glow-neon)" } : undefined}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={(i % 8) * 60}>
              <button
                type="button"
                className="glass glass-hover group flex h-full w-full flex-col rounded-2xl p-6 text-left transition-shadow duration-300 hover:shadow-[var(--glow-neon)]"
              >
                <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-primary uppercase">
                  {p.cat}
                </span>
                <h3 className="font-display mt-4 text-base leading-snug font-semibold sm:text-lg">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <span className="mt-auto pt-4 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-primary">
                  View details →
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative isolate flex min-h-screen items-center justify-center px-5 pt-32 pb-24">
        <div aria-hidden className="absolute inset-0 grid-bg" />
        <div
          aria-hidden
          className="orb h-[26rem] w-[26rem] -top-24 -left-20"
          style={{ background: "var(--cyan)" }}
        />
        <div
          aria-hidden
          className="orb h-[30rem] w-[30rem] top-1/3 -right-32"
          style={{ background: "var(--neon)", animationDelay: "4s" }}
        />
        <div
          aria-hidden
          className="orb h-[22rem] w-[22rem] -bottom-24 left-1/3"
          style={{ background: "var(--teal)", animationDelay: "8s", opacity: 0.35 }}
        />
        <CodeParticles />

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionLabel>Technical Coding Competition</SectionLabel>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 text-5xl leading-[0.95] font-bold sm:text-7xl lg:text-8xl">
              <Wordmark />
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-display mt-6 text-lg tracking-wide text-foreground/90 sm:text-2xl">
              Code the Edge. Master the Exceptions.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A coding challenge where a working solution is only half the job — the other half is
              proving how it survives everything that should never happen.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#register" className="btn-primary w-full rounded-full px-8 py-4 text-sm sm:w-auto">
                Register Now
              </a>
              <a href="#about" className="btn-ghost w-full rounded-full px-8 py-4 text-sm sm:w-auto">
                Learn More
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-14 grid grid-cols-3 gap-3 text-center">
              {[
                ["6", "Stages"],
                ["7+", "Edge case classes"],
                ["1", "Mandatory model"],
              ].map(([v, l]) => (
                <div key={l} className="glass rounded-2xl px-3 py-5">
                  <div className="font-display text-gradient text-2xl font-bold sm:text-3xl">{v}</div>
                  <div className="mt-1 text-[11px] tracking-wide text-muted-foreground uppercase">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative px-5 py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionLabel>About the Event</SectionLabel>
            <h2 className="mt-6 max-w-3xl text-3xl font-bold sm:text-5xl">
              The solution is expected. The <span className="text-gradient">exceptions</span> are the
              competition.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            <Reveal delay={80} className="lg:col-span-3">
              <div className="glass glass-hover h-full rounded-3xl p-8">
                <p className="leading-relaxed text-muted-foreground">
                  APP&quot;A&quot;THON is a coding-based technical challenge where participants receive a
                  problem statement and must develop a working solution with special focus on edge cases
                  and exceptional scenarios.
                </p>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  Anyone can make code run on clean input. Here, judges push on the seams: what happens on
                  an empty payload, a duplicated key, a value one step past the limit, or a dataset ten
                  times larger than you planned for. Teams are rewarded for the failures they anticipated,
                  not just the tests they passed.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section id="format" className="relative px-5 py-28">
        <div aria-hidden className="orb h-96 w-96 top-20 left-1/2 -translate-x-1/2" style={{ background: "var(--neon)", opacity: 0.22 }} />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>How the Event Works</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold sm:text-5xl">Six stages, one standard.</h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className="glass glass-hover h-full rounded-3xl p-7">
                  <div className="font-display text-gradient text-4xl font-bold">{s.n}</div>
                  <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENTS */}
      <ProblemStatements />

      {/* RULES */}
      <section id="rules" className="relative px-5 py-28">
        <div aria-hidden className="absolute inset-0 grid-bg-soft" />
        <div
          aria-hidden
          className="orb h-96 w-96 top-10 -left-24"
          style={{ background: "var(--neon)", opacity: 0.2 }}
        />
        <div className="relative mx-auto max-w-4xl">
          <Reveal>
            <SectionLabel>Rules</SectionLabel>
            <h2 className="mt-6 max-w-3xl text-3xl font-bold sm:text-5xl">
              The <span className="text-gradient">rules</span> of engagement.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Six rules govern APP"A"THON. Read them once — they define what qualifies and how
              your work is judged.
            </p>
          </Reveal>

          <div className="mt-14 space-y-4">
            {RULES.map((r, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="glass glass-hover flex items-start gap-5 rounded-2xl p-6">
                  <span
                    className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-lg font-bold text-primary"
                    style={{ boxShadow: "var(--glow-neon)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">{r}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* TIMELINE */}
      <section id="timeline" className="relative px-5 py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <SectionLabel>Timeline</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold sm:text-5xl">Event schedule.</h2>
            <p className="mt-4 text-sm text-muted-foreground">Dates are placeholders and will be confirmed soon.</p>
          </Reveal>

          <div className="relative mt-14 pl-8 sm:pl-12">
            <div
              aria-hidden
              className="absolute top-2 bottom-2 left-[3px] w-px sm:left-[7px]"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            />
            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.phase} delay={i * 80}>
                  <div className="relative">
                    <span
                      aria-hidden
                      className="absolute top-6 -left-8 h-2 w-2 rounded-full sm:-left-12 sm:h-3.5 sm:w-3.5"
                      style={{ backgroundImage: "var(--gradient-brand)", boxShadow: "var(--glow-cyan)" }}
                    />
                    <div className="glass glass-hover rounded-2xl p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-xs text-primary">{t.phase}</span>
                        <span className="text-xs text-muted-foreground">{t.when}</span>
                      </div>
                      <h3 className="mt-2 text-xl font-semibold">{t.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRIZES */}
      <section id="prizes" className="relative px-5 py-28">
        <div aria-hidden className="orb h-[28rem] w-[28rem] top-0 right-0" style={{ background: "var(--cyan)", opacity: 0.18 }} />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Prizes &amp; Recognition</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold sm:text-5xl">
              Rewarded for what you <span className="text-gradient">anticipated</span>.
            </h2>
          </Reveal>

          <div className="mt-14 grid items-center gap-6 md:grid-cols-3">
            {PRIZES.map((p, i) => (
              <Reveal key={p.rank} delay={i * 90}>
                <div
                  className={`glass glass-hover rounded-3xl p-8 text-center ${
                    p.featured ? "md:-translate-y-6 md:py-12" : ""
                  }`}
                  style={p.featured ? { boxShadow: "var(--glow-neon)" } : undefined}
                >
                  <div className="text-xs tracking-[0.22em] text-muted-foreground uppercase">{p.rank}</div>
                  <div className="font-display text-gradient mt-4 text-3xl font-bold sm:text-4xl">
                    {p.amount}
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                    {p.perks.map((perk) => (
                      <li key={perk}>{perk}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTER */}
      <section id="register" className="relative px-5 py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="glass relative overflow-hidden rounded-[2rem] p-10 text-center sm:p-16">
              <div aria-hidden className="orb h-72 w-72 -top-20 left-1/2 -translate-x-1/2" style={{ background: "var(--neon)" }} />
              <div className="relative">
                <SectionLabel>Registration</SectionLabel>
                <h2 className="mt-6 text-3xl font-bold sm:text-5xl">Bring your worst inputs.</h2>
                <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Team size: 2–4 members (placeholder). Open to all students of participating institutions
                  (placeholder). Registration closes once slots are filled.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfT56rOasmwIhuhehfhPXnwRrk_BD-Hht5E5YmREN3ef_hQNw/viewform?usp=sharing&ouid=109236939160750032323" className="btn-primary w-full rounded-full px-9 py-4 text-sm sm:w-auto">
                    Register Now
                  </a>
                  <a href="#rules" className="btn-ghost w-full rounded-full px-9 py-4 text-sm sm:w-auto">
                    Read the rules
                  </a>
                </div>
                <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                  <div className="rounded-2xl border border-border px-4 py-3">Team size: 2–3</div>
                  <div className="rounded-2xl border border-border px-4 py-3">Entry: ₹150</div>
                  <div className="rounded-2xl border border-border px-4 py-3">Mode: Offline</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    

      {/* FOOTER */}
      <footer className="relative border-t border-border px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-xl font-bold tracking-[0.14em]">
              <Wordmark />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Code the Edge. Master the Exceptions.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.18em] uppercase">Explore</h3>
            <div className="mt-4 flex flex-col gap-2">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {n.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mx-auto mt-12 max-w-6xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
          Organized by [Your Club / College Name] · © {new Date().getFullYear()} APP&quot;A&quot;THON
        </div>
      </footer>
    </div>
  );
}

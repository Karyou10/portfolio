import { useParams, Link } from "react-router";
import { Footer } from "../components/Footer";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20
    }
  }
};
import sparkCaseStudyImg from "../../assets/spark_case_study.png";
import sparkImg from "../../assets/Spark First image.png";
import sparkVideo from "../../assets/Spark Deliveries (Case study) -- Behance_2.mp4";
import sparkPreviewImg from "../../assets/Spark preview.png";
import notespaceHeroImg from "../../assets/notespace_hero.png";
import notespaceAppImg from "../../assets/notespace_app.png";
import notespacePreviewImg from "../../assets/Mockup for Notespace.png";
import napsPreviewImg from "../../assets/Hsaa.jpeg";
import definingSolutionGif from "../../assets/Defining the solution.gif";
import beforeAfterImg from "../../assets/before&After.png";

const caseStudyData: Record<string, { title: string; subtitle: string; role: string; timeline: string; team: string; }> = {
  naps: {
    title: "Designed a department student hub covering 7 core flows — from onboarding to mentorship.",
    subtitle: "",
    role: "Product Designer",
    timeline: "8 months",
    team: "3 Engineers, 2 PM",
  },
  spark: {
    title: "Spark Deliveries",
    subtitle: "Optimizing dispatch and merchant management systems for last-mile logistics.",
    role: "Product Designer",
    timeline: "4 months",
    team: "1 Engineer, 1 PM",
  },
  notespace: {
    title: "Notespace",
    subtitle: "Designing a smart note-taking platform built for how students actually study.",
    role: "Product Designer",
    timeline: "3 months",
    team: "1 Engineer, 2 PM",
  },
};

const allCaseStudies = [
  {
    id: "spark",
    title: "Spark Deliveries",
    description: "Optimizing dispatch and merchant management systems for last-mile logistics.",
    image: sparkPreviewImg,
  },
  {
    id: "notespace",
    title: "Notespace",
    description: "Designing a smart note-taking platform built for how students actually study.",
    image: notespacePreviewImg,
  },
  {
    id: "naps",
    title: "Designing a student platform replacing 4+ informal channels for an entire university department.",
    description: "Helping students find resources and mentors without relying on scattered WhatsApp groups.",
    image: napsPreviewImg,
  },
];

/* ── Section heading component ──────────────────────────── */
function SectionLabel({ children, color = "#888" }: { children: React.ReactNode; color?: string }) {
  return (
    <h3
      className="text-[12px] font-bold tracking-[0.15em] uppercase font-geist"
      style={{ color }}
    >
      {children}
    </h3>
  );
}

/* ── Read More Case Studies component ──────────────────── */
function ReadMoreCaseStudies({ currentId }: { currentId: string }) {
  const others = allCaseStudies.filter((cs) => cs.id !== currentId);

  return (
    <div className="pt-16 border-t border-[#f0f0f0] space-y-6">
      <h2 className="text-xl font-semibold text-[#111] tracking-tight font-fraunces">
        Read More Case Studies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {others.map((cs) => (
          <Link
            key={cs.id}
            to={`/work/${cs.id}`}
            className="group flex flex-row bg-[#f9f9f9] rounded-2xl overflow-hidden border border-neutral-100 hover:border-neutral-200 hover:shadow-sm transition-all no-underline"
          >
            {/* Thumbnail */}
            <div className="w-[140px] shrink-0 bg-neutral-200 overflow-hidden">
              <img
                src={cs.image}
                alt={cs.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col justify-center gap-2 p-5">
              <span className="text-[16px] font-semibold text-[#111] font-fraunces leading-snug group-hover:text-[#333] transition-colors">
                {cs.title}
              </span>
              <span className="text-[13px] text-[#999] font-newsreader leading-relaxed line-clamp-2">
                {cs.description}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const study = id ? caseStudyData[id] : null;

  if (!study) {
    return (
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-16 lg:px-24 pt-28 pb-16 min-h-screen flex flex-col items-center justify-center font-geist">
        <h1 className="text-2xl font-semibold text-[#111] font-fraunces mb-4">Case study not found</h1>
        <Link to="/work" className="text-[14px] text-[#111] underline decoration-neutral-300 hover:decoration-neutral-600 font-medium">
          ← Back to Work
        </Link>
      </div>
    );
  }

  const isSpark = id === "spark";
  const isNotespace = id === "notespace";
  const isNaps = id === "naps";

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 md:px-16 lg:px-24 pt-28 pb-16 min-h-screen flex flex-col justify-between font-geist">
      <div className={`w-full ${isSpark ? "max-w-5xl" : "max-w-3xl"} mx-auto space-y-10`}>
        {/* Back Link */}
        <div>
          <Link
            to="/work"
            className="inline-flex items-center gap-1 text-[13px] font-medium text-[#666] bg-[#f5f5f5] hover:bg-[#e8e8e8] hover:text-[#111] px-4 py-1.5 rounded-full transition-all font-geist"
          >
            &larr; Back to Work
          </Link>
        </div>

        {/* Title + Live Site Link */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111] font-fraunces">
              {study.title}
            </h1>
            <p className="text-[16px] text-[#888] font-newsreader leading-relaxed max-w-lg">
              {study.subtitle}
            </p>
          </div>
          {isNotespace && (
            <a
              href="https://notespace-iota.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white bg-[#f97316] hover:bg-[#ea580c] px-4 py-2 rounded-full transition-all font-geist self-start shrink-0"
            >
              Visit live site ↗
            </a>
          )}
        </div>

        {/* Metadata Bar */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#888] font-geist border-b border-[#f0f0f0] pb-6">
          <span><span className="font-medium text-[#555]">Role</span> — {study.role}</span>
          <span><span className="font-medium text-[#555]">Timeline</span> — {study.timeline}</span>
          <span><span className="font-medium text-[#555]">Team</span> — {study.team}</span>
        </div>

        {/* ═══════════════════════════════════════════════════
            SPARK DELIVERIES CASE STUDY
            ═══════════════════════════════════════════════════ */}
        {isSpark && (
          <div className="space-y-8">
            <img src={sparkImg} alt="Spark case study cover" className="w-full rounded-[24px]" />
            <video controls className="w-full rounded-[24px]" src={sparkVideo} />
            <img src={sparkCaseStudyImg} alt="Spark case study details" className="w-full rounded-[24px]" />
          </div>
        )}

        {/* ═══════════════════════════════════════════════════
            NOTESPACE CASE STUDY — STAR FORMAT
            ═══════════════════════════════════════════════════ */}
        {isNotespace && (
          <div className="space-y-20 mt-4">

            {/* ── Hero Screenshot ── */}
            <img
              src={notespaceHeroImg}
              alt="Notespace landing page"
              className="w-full rounded-[24px] border border-neutral-100 shadow-sm"
            />

            {/* ── SITUATION ── */}
            <div className="space-y-6">
              <SectionLabel color="#f97316">Situation</SectionLabel>
              <p className="text-[#555] leading-[1.8] text-[16px] font-newsreader">
                University students rely on fragmented tools — Google Docs, phone cameras, random WhatsApp groups — to capture and share lecture notes. There was no product purpose-built for how students actually study: fast-paced, collaborative, and often mobile-first.
              </p>
              <p className="text-[#555] leading-[1.8] text-[16px] font-newsreader">
                A small team approached me to design a note-taking platform from scratch. The product needed to ship quickly and compete against established tools by being laser-focused on the student workflow.
              </p>
            </div>

            {/* ── TASK ── */}
            <div className="space-y-6">
              <SectionLabel color="#f97316">Task</SectionLabel>
              <p className="text-[#555] leading-[1.8] text-[16px] font-newsreader">
                As the sole product designer, I was responsible for:
              </p>
              <ul className="space-y-3 text-[#555] leading-[1.8] text-[16px] font-newsreader ml-6 list-disc">
                <li>End-to-end product design — from research to shipped UI</li>
                <li>Defining the information architecture and core user flows</li>
                <li>Building a reusable component system in Figma</li>
                <li>Collaborating with 1 engineer and 2 PMs across a 3-month timeline</li>
              </ul>
            </div>

            {/* ── ACTION — Research & Discovery ── */}
            <div className="space-y-6">
              <SectionLabel color="#f97316">Action</SectionLabel>
              <h3 className="text-[20px] font-semibold text-[#111] font-fraunces">Research & Discovery</h3>
              <p className="text-[#555] leading-[1.8] text-[16px] font-newsreader">
                I interviewed 12 university students across 4 departments to understand their note-taking habits. Key patterns emerged:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { stat: "83%", label: "used 3+ apps to manage notes" },
                  { stat: "67%", label: "lost notes within 2 weeks of lectures" },
                  { stat: "91%", label: "wanted real-time collaboration" },
                ].map((item) => (
                  <div key={item.label} className="bg-[#fff7ed] rounded-xl p-5 text-center space-y-2 border border-orange-100">
                    <span className="text-3xl font-bold text-[#f97316] font-fraunces">{item.stat}</span>
                    <p className="text-[13px] text-[#888] font-geist">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── ACTION — Design Decisions ── */}
            <div className="space-y-6">
              <h3 className="text-[20px] font-semibold text-[#111] font-fraunces">Design Decisions</h3>
              <p className="text-[#555] leading-[1.8] text-[16px] font-newsreader">
                Based on research findings, I focused on three design pillars:
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: "Speed over features",
                    desc: "Stripped the editor to essentials — no bloated toolbars. Students need to start typing within 2 seconds of opening the app."
                  },
                  {
                    title: "Organization by default",
                    desc: "Auto-tagging, favorites, and folder structures that match how students think: by course, date, and urgency."
                  },
                  {
                    title: "Collaboration as a core primitive",
                    desc: "Real-time sync with presence indicators. No invite friction — share a link, start editing together."
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <span className="text-orange-500 mt-1 shrink-0 text-lg">◆</span>
                    <div>
                      <span className="text-[#111] font-medium font-geist">{item.title}</span>
                      <p className="text-[#555] text-[15px] font-newsreader leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Screenshot: App Interface ── */}
            <div className="space-y-3">
              <img
                src={notespaceAppImg}
                alt="Notespace app dashboard — note editor and sidebar navigation"
                className="w-full rounded-[24px] border border-neutral-100 shadow-sm"
              />
              <p className="text-[12px] text-[#aaa] font-geist text-center italic">
                The note editor with sidebar navigation, favorites, and real-time collaboration indicators.
              </p>
            </div>

            {/* ── ACTION — Visual System ── */}
            <div className="space-y-6">
              <h3 className="text-[20px] font-semibold text-[#111] font-fraunces">Visual System</h3>
              <p className="text-[#555] leading-[1.8] text-[16px] font-newsreader">
                I designed a clean, energizing visual language anchored by Notespace's brand orange (#f97316). The system uses General Sans typography, soft charcoal neutrals for readability, and generous whitespace to keep the interface calm during intensive study sessions.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { color: "#f97316", label: "Primary Orange" },
                  { color: "#1a1a2e", label: "Charcoal" },
                  { color: "#f5f5f5", label: "Surface" },
                  { color: "#ffffff", label: "Background" },
                ].map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div
                      className="w-full h-16 rounded-xl border border-neutral-100"
                      style={{ backgroundColor: item.color }}
                    />
                    <p className="text-[12px] text-[#888] font-geist">{item.label}</p>
                    <p className="text-[11px] text-[#bbb] font-geist-mono">{item.color}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RESULT ── */}
            <div className="space-y-6">
              <SectionLabel color="#f97316">Result</SectionLabel>
              <p className="text-[#555] leading-[1.8] text-[16px] font-newsreader">
                Notespace shipped on time within the 3-month window. The product launched as a fully functional web app now live at{" "}
                <a
                  href="https://notespace-iota.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f97316] underline decoration-orange-200 hover:decoration-orange-400 transition-colors font-medium"
                >
                  notespace-iota.vercel.app
                </a>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { stat: "100%", label: "Design-to-dev handoff accuracy" },
                  { stat: "< 2s", label: "Time to first note from login" },
                  { stat: "3 months", label: "Concept to live product" },
                ].map((item) => (
                  <div key={item.label} className="bg-[#f9f9f9] rounded-xl p-5 text-center space-y-2 border border-neutral-100">
                    <span className="text-2xl font-bold text-[#111] font-fraunces">{item.stat}</span>
                    <p className="text-[13px] text-[#888] font-geist">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Reflection ── */}
            <div className="space-y-4 bg-[#fff7ed] rounded-2xl p-8 border border-orange-100">
              <SectionLabel color="#f97316">Reflection</SectionLabel>
              <p className="text-[#555] leading-[1.8] text-[16px] font-newsreader">
                This project taught me how to make sharp product decisions under tight constraints. With only 3 months and a lean team, every design choice had to directly serve the user's workflow. I learned to ruthlessly prioritize features, advocate for simplicity in stakeholder discussions, and design systems that an engineer can ship fast without losing quality.
              </p>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════
            NAPS CASE STUDY
            ═══════════════════════════════════════════════════ */}
        {isNaps && (
          <div className="space-y-20 mt-4">
            {/* ── Hero Image ── */}
            <img
              src={napsPreviewImg}
              alt="NAPS Student Hub mockup on laptop"
              className="w-full rounded-[24px] border border-neutral-100 shadow-sm"
            />

            {/* ── THE GAP ── */}
            <div className="space-y-6">
              <SectionLabel color="#2563eb">The Gap</SectionLabel>
              <div className="space-y-4 text-[#555] leading-[1.8] text-[16px] font-newsreader">
                <p>
                  The department student portal and platform.
                </p>
                <p>
                  Resources access is shared over WhatsApp, files lost, confusing RSVP system. Students and admins disconnected with no standard infrastructure.
                </p>
                <p>
                  My task: design a responsive web platform that resolves resource sharing, forums, and events with streamlined, structured and reliable interactions.
                </p>
              </div>

              {/* Before & After Image Asset */}
              <div className="pt-4">
                <img
                  src={beforeAfterImg}
                  alt="Before and After NAPS"
                  className="w-full rounded-[24px] border border-neutral-100 shadow-sm"
                />
              </div>
            </div>

            {/* ── DESIGN & DECISION ── */}
            <div className="space-y-6">
              <SectionLabel color="#2563eb">Design & Decision</SectionLabel>
              <p className="text-[#555] leading-[1.8] text-[16px] font-newsreader">
                I started with a layout to structure the UI. For each feature, I mapped the user steps a student would take — from login to dashboard, to resource upload to confirmation, mentorship application to approval.
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: "1. Registration pillar — CRM for admin",
                    desc: "physical image/approval automated verification process, no physical checks, not manual. Only verified department students can access the platform."
                  },
                  {
                    title: "2. Resource Library structure",
                    desc: "folders organized by level (100 - 400) mirrors how students already study. This zeroed down their materials search learning curve."
                  },
                  {
                    title: "3. Forum design",
                    desc: "real-time messaging with departments, announcements, and general discussions. Familiar UX layout like WhatsApp and Discord to keep engagement high, but styled and structured to avoid noise."
                  },
                  {
                    title: "4. Mentorship pill",
                    desc: "'Ready to be a Mentor' and 'Ready to be a Mentee' are separate flows with distinct paths, with separate forms and confirmation pages. Prevented confusion between the two journeys from the start."
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <span className="text-blue-500 mt-1 shrink-0 text-lg">◆</span>
                    <div>
                      <span className="text-[#111] font-medium font-geist">{item.title}</span>
                      <p className="text-[#555] text-[15px] font-newsreader leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-[#555] leading-[1.8] text-[16px] font-newsreader pt-2">
                Detailed screens was built across mobile, tablet and desktop size — to account for usage on different devices and sizes.
              </p>

              {/* Defining the solution GIF asset replacement */}
              <div className="space-y-3 pt-4">
                <img
                  src={definingSolutionGif}
                  alt="Defining the solution layout preview"
                  className="w-full rounded-[24px] border border-neutral-100 shadow-sm"
                />
                <p className="text-[12px] text-[#aaa] font-geist text-center italic">
                  Defining the solution layout process and screen transitions.
                </p>
              </div>
            </div>

            {/* ── FIELD RESEARCH ── */}
            <div className="space-y-6">
              <SectionLabel color="#2563eb">Field Research</SectionLabel>
              <p className="text-[#555] leading-[1.8] text-[16px] font-newsreader">
                I interviewed a focus team of two — vice president of the set, and lead frontend developer.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { stat: "3 rules", label: "to create a balance between design language and dev limits." },
                  { stat: "2 states", label: "designing for states like empty and populated statuses — reduced the missing gaps." },
                  { stat: "1 test", label: "testing dynamic component sizes and variations (competing text wrapping etc)" },
                ].map((item) => (
                  <div key={item.stat} className="bg-[#f0f9ff] rounded-xl p-5 text-center space-y-2 border border-sky-100">
                    <span className="text-2xl font-bold text-[#2563eb] font-fraunces">{item.stat}</span>
                    <p className="text-[13px] text-[#666] font-geist">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── OUTCOME ── */}
            <div className="space-y-6">
              <SectionLabel color="#2563eb">Outcome</SectionLabel>
              <div className="space-y-5">
                {[
                  "NAPS replaced the informal media layout with a centralized platform.",
                  "Students gained structure of access to resources, mentorship, and events for the first time.",
                  "The mentorship program went from manual and unorganized to a full application → session → communication → feedback loop.",
                  "The resource library reduced admin approval workload, resulting in faster and smoother material uploads.",
                  "Events moved from last-minute announcements to a structured RSVP system with calendar integration and details section."
                ].map((text, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="text-blue-500 mt-1 shrink-0 text-lg">◆</span>
                    <p className="text-[#555] text-[16px] font-newsreader leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── REFLECTION ── */}
            <div className="space-y-6">
              <div className="space-y-2">
                <SectionLabel color="#2563eb">Reflection</SectionLabel>
                <h3 className="text-2xl font-semibold text-[#111] font-fraunces">Guiding Insights</h3>
                <p className="text-[16px] text-neutral-500 font-newsreader leading-relaxed">
                  Qualitative insights over quantitative stats. Here's what guided the thinking behind the experience.
                </p>
              </div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {[
                  {
                    number: "01",
                    title: "Friction is a design tool",
                    description: "Approval gates protected the community. I learned to judge steps by purpose, not by count."
                  },
                  {
                    number: "02",
                    title: "Design the edge cases",
                    description: "Error states and timeouts aren't afterthoughts — for users on unstable internet, they're the main experience."
                  },
                  {
                    number: "03",
                    title: "Discovery needs a flow too",
                    description: "A guided first-session walkthrough would have surfaced mentorship and forum faster — the platform's two highest-value features."
                  }
                ].map((insight) => (
                  <motion.div 
                    key={insight.number} 
                    variants={itemVariants}
                    className="bg-[#f8fafc] border border-neutral-100/80 rounded-2xl p-6 md:p-8 flex flex-col space-y-4 h-full"
                  >
                    <span className="text-[12px] font-bold text-blue-500 font-geist-mono tracking-wider uppercase">{insight.number}</span>
                    <div className="space-y-2">
                      <h4 className="text-[18px] font-semibold text-[#111] font-fraunces leading-tight">{insight.title}</h4>
                      <p className="text-neutral-500 text-[14px] leading-relaxed font-newsreader">{insight.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        )}

        {!isSpark && !isNotespace && !isNaps && (
          <div className="bg-[#f3f5f8] rounded-[24px] p-12 flex items-center justify-center min-h-[320px]">
            <div className="text-center space-y-4">
              <div className="text-5xl">🚧</div>
              <h2 className="text-xl font-semibold text-[#111] font-fraunces">Full case study coming soon</h2>
              <p className="text-[#888] text-[15px] font-newsreader max-w-md leading-relaxed">
                I'm currently writing up the detailed process, research insights, and design decisions for this project.
              </p>
              <a
                href={`mailto:momohfayd@gmail.com?subject=Case%20Study%20Request%20-%20${study.title}`}
                className="inline-flex items-center gap-2 mt-4 text-[14px] font-medium text-[#111] bg-[#f5f5f5] hover:bg-[#e8e8e8] px-5 py-2 rounded-full transition-all font-geist"
              >
                Request the full deck →
              </a>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════
            READ MORE CASE STUDIES
            ═══════════════════════════════════════════════════ */}
        {id && <ReadMoreCaseStudies currentId={id} />}
      </div>

      <Footer />
    </div>
  );
}

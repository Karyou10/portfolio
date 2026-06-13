import { useParams, Link } from "react-router";
import { Footer } from "../components/Footer";
import sparkCaseStudyImg from "../../assets/spark_case_study.png";
import sparkImg from "../../assets/Spark First image.png";
import sparkVideo from "../../assets/Spark Deliveries (Case study) -- Behance_2.mp4";
import sparkPreviewImg from "../../assets/Spark preview.png";
import notespaceHeroImg from "../../assets/notespace_hero.png";
import notespaceAppImg from "../../assets/notespace_app.png";
import notespacePreviewImg from "../../assets/Mockup for Notespace.png";
import napsPreviewImg from "../../assets/Hsaa.jpeg";

const caseStudyData: Record<string, { title: string; subtitle: string; role: string; timeline: string; team: string; }> = {
  naps: {
    title: "NAPS Student Hub",
    subtitle: "Designing a responsive digital workspace and community platform for university students.",
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
    title: "NAPS Student Hub",
    description: "Designing a responsive digital workspace and community platform for university students.",
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
            NAPS / OTHER CASE STUDIES — Coming Soon
            ═══════════════════════════════════════════════════ */}
        {!isSpark && !isNotespace && (
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

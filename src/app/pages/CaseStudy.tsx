import { useParams, Link } from "react-router";
import { Footer } from "../components/Footer";
import sparkCaseStudyImg from "../../assets/spark_case_study.png";
import sparkImg from "../../assets/Spark First image.png";
import sparkVideo from "../../assets/Spark Deliveries (Case study) -- Behance_2.mp4";
import notespaceHeroImg from "../../assets/notespace_hero.png";
import notespaceAppImg from "../../assets/notespace_app.png";

const caseStudyData: Record<string, { title: string; role: string; timeline: string; team: string; }> = {

  naps: {
    title: "NAPS Student Hub",
    role: "Product Designer",
    timeline: "8 months",
    team: "3 Engineers, 2 PM",
  },
  spark: {
    title: "Spark Deliveries",
    role: "Product Designer",
    timeline: "4 months",
    team: "1 Engineer, 1 PM",
  },
  notespace: {
    title: "Notespace",
    role: "Product Designer",
    timeline: "3 months",
    team: "1 Engineer, 2 PM",
  },
};

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

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111] font-fraunces">
          {study.title}
        </h1>

        {/* Metadata Bar */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#888] font-geist border-b border-[#f0f0f0] pb-6">
          <span><span className="font-medium text-[#555]">Role</span> — {study.role}</span>
          <span><span className="font-medium text-[#555]">Timeline</span> — {study.timeline}</span>
          <span><span className="font-medium text-[#555]">Team</span> — {study.team}</span>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {isSpark && (
            <div className="space-y-8">
              {/* First Image */}
              <img src={sparkImg} alt="Spark case study cover" className="w-full rounded-[24px]" />
              {/* Video */}
              <video controls className="w-full rounded-[24px]" src={sparkVideo} />
              {/* Second Image */}
              <img src={sparkCaseStudyImg} alt="Spark case study details" className="w-full rounded-[24px]" />
            </div>
          )}
          
          {isNotespace && (
            <div className="space-y-16 mt-8">
              <img src={notespaceHeroImg} alt="Notespace landing page" className="w-full rounded-[24px] border border-neutral-100 shadow-sm" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                <div className="space-y-4">
                  <h3 className="text-[14px] font-bold text-orange-500 tracking-widest uppercase font-geist">The Problem</h3>
                  <p className="text-[#555] leading-[1.75] text-[16px] font-newsreader">
                    Students and study groups often struggle with inefficient collaboration during fast-paced lectures. Existing tools like Google Docs feel heavy and aren't optimized for rapid note-taking, leading to fragmented notes and sync delays across different devices.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[14px] font-bold text-orange-500 tracking-widest uppercase font-geist">The Solution</h3>
                  <p className="text-[#555] leading-[1.75] text-[16px] font-newsreader">
                    A lightweight, student-centric workspace with real-time collaboration that never lags. We designed a clean, focused writing interface paired with intuitive organization—tags, favorites, and shared notes—to keep study groups on the same page.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-[14px] font-bold text-[#888] tracking-widest uppercase font-geist">Key Features & Design</h3>
                <ul className="space-y-4 text-[#555] leading-[1.75] text-[16px] font-newsreader">
                  <li className="flex gap-3"><span className="text-orange-500">◆</span> <strong>Real-time Sync:</strong> Multi-user editing with visual presence indicators for seamless study group collaboration.</li>
                  <li className="flex gap-3"><span className="text-orange-500">◆</span> <strong>Instant Rich-Text:</strong> Responsive note-writing with quick styling, list options, and automatic saving.</li>
                  <li className="flex gap-3"><span className="text-orange-500">◆</span> <strong>Vibrant & Focused UI:</strong> Energizing primary orange (#f97316) paired with modern General Sans typography and soft charcoal neutrals for readability.</li>
                </ul>
              </div>

              <img src={notespaceAppImg} alt="Notespace app interface" className="w-full rounded-[24px] border border-neutral-100 shadow-sm" />
            </div>
          )}

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
        </div>
      </div>

      <Footer />
    </div>
  );
}

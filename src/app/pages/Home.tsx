import { Link } from "react-router";
import { useEffect } from "react";
import avatarImg from "../../assets/avatar.jpg";
import dashboardImg from "../../assets/dashboard_mockup.png";
import { Footer } from "../components/Footer";

export function Home() {
  useEffect(() => {
    document.title = "Fayd Momoh — Product Designer";
  }, []);

  const contactLinks = [
    { label: "Email", value: "momohfayd@gmail.com", href: "mailto:momohfayd@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/fayd-momoh", href: "https://www.linkedin.com/in/fayd-momoh-970976273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { label: "Behance", value: "behance.net/fayd", href: "#" },
  ];

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 md:px-16 lg:px-24 pt-28 pb-16 min-h-screen flex flex-col justify-between font-geist">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Column: Heading, Bio, Contacts */}
        <div className="flex flex-col space-y-8 max-w-xl">
          {/* Availability Indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[13px] text-[#888] font-geist">
              Available for full-time opportunities
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-1">
            <h1 className="text-4xl font-semibold tracking-tight text-[#111] font-fraunces">
              Hi, I'm Fayd Momoh
            </h1>
            <h2 className="text-4xl font-semibold tracking-tight text-[#888] font-fraunces leading-tight">
              I design products that turn complex workflows into intuitive user experiences
            </h2>
          </div>

          {/* Bio copy — shortened to 2 paragraphs */}
          <div className="space-y-5 text-[#555] leading-[1.75] text-[16px] font-normal font-newsreader">
            <p>
              Product Designer with 2+ years of experience across mobile, web, and internal tools — shaping experiences in health-tech, logistics, education, and productivity platforms.
            </p>
            <p>
              I've designed note-taking platforms at{" "}
              <Link to="/work/notespace" className="text-[#111] underline decoration-neutral-300 hover:decoration-neutral-600 transition-colors font-medium">
                Notespace
              </Link>
              , student portals for{" "}
              <Link to="/work/naps" className="text-[#111] underline decoration-neutral-300 hover:decoration-neutral-600 transition-colors font-medium">
                NAPS Student Hub
              </Link>
              , and logistics systems at{" "}
              <Link to="/work/spark" className="text-[#111] underline decoration-neutral-300 hover:decoration-neutral-600 transition-colors font-medium">
                Spark Deliveries
              </Link>
              .
            </p>
          </div>

          {/* Contact grid */}
          <div className="pt-4 border-t border-[#f0f0f0] space-y-3">
            {contactLinks.map((link) => (
              <div key={link.label} className="grid grid-cols-[100px_1fr] items-center text-[15px] font-geist">
                <span className="text-[#888] font-normal">{link.label}</span>
                <a
                  href={link.href}
                  className="text-[#111] underline decoration-neutral-300 hover:decoration-neutral-600 transition-colors font-normal justify-self-start"
                >
                  {link.value}
                </a>
              </div>
            ))}
            {/* Resume — styled as a pill button for primary CTA */}
            <div className="grid grid-cols-[100px_1fr] items-center text-[15px] font-geist">
              <span className="text-[#888] font-normal">Resume</span>
              <a
                href="#"
                download
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111] bg-[#f5f5f5] hover:bg-[#e8e8e8] px-4 py-1.5 rounded-full transition-all justify-self-start"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full bg-[#f3f5f8] rounded-[24px] p-6 sm:p-8 flex items-center justify-center transition-all duration-300 hover:shadow-sm">
            <div className="w-full bg-white rounded-xl shadow-xs overflow-hidden border border-neutral-100/50">
              <img
                src={dashboardImg}
                alt="Product Design Work Preview"
                className="w-full h-auto object-cover display-block"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { Link } from "react-router";
import { useEffect, useRef } from "react";
import avatarImg from "../../assets/avatar.jpg";
import { Footer } from "../components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "About — Fayd Momoh";
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

    tl.from(".animate-profile", {
      opacity: 0,
      y: 20,
    });

    tl.from(".animate-bio p", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
    }, "-=0.5");

    gsap.from(".animate-exp", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".animate-exp-trigger",
        start: "top 90%",
        toggleActions: "play none none none",
      }
    });

    gsap.from(".animate-tools-skills", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".animate-tools-skills-trigger",
        start: "top 90%",
        toggleActions: "play none none none",
      }
    });

    gsap.from(".animate-how", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".animate-how-trigger",
        start: "top 90%",
        toggleActions: "play none none none",
      }
    });

    gsap.from(".animate-exploring", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".animate-exploring-trigger",
        start: "top 95%",
        toggleActions: "play none none none",
      }
    });
  }, { scope: containerRef });

  const experience = [
    { role: "Product Designer", company: "Notespace", year: "2026" },
    { role: "Product Designer", company: "Psychology Hub", year: "2024 – 2025" },
    { role: "Product Designer", company: "Spark Deliveries", year: "2024" },
    { role: "Product Designer", company: "Purpival", year: "2023 – 2024" },
  ];

  const tools = ["Figma", "FigJam", "Framer", "Rive", "HTML / CSS", "Git"];
  const skills = [
    "Product Thinking",
    "Interaction Design",
    "UX Research",
    "User Flows",
    "Prototyping",
    "Design Systems",
    "Information Architecture",
  ];

  const howIWork = [
    "I default to async, but love a good design crit",
    "I prototype early — shipping beats perfecting",
    "I pair with engineers weekly, not just at handoff",
    "I use data and research to guide decisions, not assumptions",
  ];

  return (
    <div ref={containerRef} className="w-full max-w-[1280px] mx-auto px-6 md:px-16 lg:px-24 pt-28 pb-16 min-h-screen flex flex-col justify-between font-geist">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Column: Story */}
        <div className="flex flex-col space-y-8 max-w-xl">
          {/* Photo + Name */}
          <div className="flex items-start gap-5 animate-profile">
            <img
              src={avatarImg}
              alt="Fayd Momoh"
              className="w-24 h-24 rounded-2xl object-cover border border-neutral-100 shrink-0"
            />
            <div className="space-y-1 pt-1">
              <h1 className="text-3xl font-semibold tracking-tight text-[#111] font-fraunces">
                Fayd Momoh
              </h1>
              <p className="text-[15px] text-[#888] font-geist">
                Product Designer · Lagos, Nigeria
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-5 text-[#555] leading-[1.75] text-[16px] font-normal font-newsreader animate-bio">
            <p>
              I'm a Product Designer based in Lagos, Nigeria. Over the past 3 years, I've worked across health-tech, logistics, and community platforms to build interfaces that feel clear, useful, and built with structure.
            </p>
            <p>
              I believe that good design is structure first. I spend my time understanding the core user problem, mapping out information architecture, and collaborating closely with engineering and product partners to bring focused designs to life.
            </p>
            <p>
              My process is research-led and systems-minded. I care deeply about the people using what I build — especially in contexts where design can shift real-world behavior.
            </p>
            <p>
              Want to collaborate or just say hi? Check out my{" "}
              <Link to="/work" className="text-[#111] underline decoration-neutral-300 hover:decoration-neutral-600 transition-colors font-medium">
                case studies
              </Link>{" "}
              or send me an{" "}
              <a href="mailto:momohfayd@gmail.com" className="text-[#111] underline decoration-neutral-300 hover:decoration-neutral-600 transition-colors font-medium">
                email
              </a>.
            </p>
          </div>

          {/* Experience Section */}
          <div className="space-y-4 pt-2 animate-exp-trigger animate-exp">
            <h3 className="text-[12px] font-bold text-[#888] tracking-widest uppercase font-geist">
              Experience
            </h3>
            <div className="space-y-3">
              {experience.map((exp) => (
                <div key={exp.company} className="grid grid-cols-[1fr_auto] gap-4 items-baseline text-[15px]">
                  <div>
                    <span className="text-[#111] font-medium font-geist">{exp.role}</span>
                    <span className="text-[#888] font-geist"> — {exp.company}</span>
                  </div>
                  <span className="text-[#aaa] text-[13px] font-geist-mono tabular-nums">{exp.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Tools, Skills & How I Work */}
        <div className="w-full space-y-10 lg:pl-12">
          <div className="grid grid-cols-2 gap-8 animate-tools-skills-trigger animate-tools-skills">
            {/* Tools */}
            <div className="space-y-4">
              <h3 className="text-[12px] font-bold text-[#888] tracking-widest uppercase font-geist">
                Tools
              </h3>
              <ul className="space-y-2 text-[#333] text-[15px] font-normal font-geist">
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-[12px] font-bold text-[#888] tracking-widest uppercase font-geist">
                Skills
              </h3>
              <ul className="space-y-2 text-[#333] text-[15px] font-normal font-geist">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* How I Work */}
          <div className="space-y-4 animate-how-trigger animate-how">
            <h3 className="text-[12px] font-bold text-[#888] tracking-widest uppercase font-geist">
              How I Work
            </h3>
            <ul className="space-y-3 text-[#555] text-[15px] font-newsreader leading-relaxed">
              {howIWork.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1 shrink-0">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Currently Exploring */}
          <div className="space-y-4 animate-exploring-trigger animate-exploring">
            <h3 className="text-[12px] font-bold text-[#888] tracking-widest uppercase font-geist">
              Currently Exploring
            </h3>
            <div className="flex flex-wrap gap-2">
              {["AI Design Tools", "Motion Design", "Design Engineering"].map((item) => (
                <span
                  key={item}
                  className="text-[13px] text-[#666] bg-[#f5f5f5] px-3 py-1 rounded-full font-geist"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

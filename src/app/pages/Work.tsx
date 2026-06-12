import { Link } from "react-router";
import { useEffect } from "react";
import napsImg from "../../assets/Hsaa.jpeg";
import sparkImg from "../../assets/Spark preview.png";
import notespaceImg from "../../assets/Mockup for Notespace.png";
import { Footer } from "../components/Footer";

export function Work() {
  useEffect(() => {
    document.title = "Work — Fayd Momoh";
  }, []);

  const caseStudies = [
    {
      id: "spark",
      title: "Optimizing dispatch and merchant management systems for last-mile logistics.",
      description: "Improved driver coordination, live order tracking, and core merchant dashboard flows — reducing delivery delays by 35% and increasing customer satisfaction scores.",
      image: sparkImg,
      role: "Product Designer",
      timeline: "4 months",
      team: "1 Engineer, 1 PM",
      tags: ["Mobile App", "Logistics & Routing", "Driver Experience", "User Flows"],
    },
    {
      id: "notespace",
      title: "Designing a smart note-taking platform built for how students actually study.",
      description: "Created an intuitive workspace for capturing, organizing, and reviewing lecture notes — with features like auto-tagging, collaborative notebooks, and exam prep mode.",
      image: notespaceImg,
      role: "Product Designer",
      timeline: "3 months",
      team: "1 Engineer, 2 PM",
      tags: ["Product Design", "Web App", "EdTech", "UX Research"],
    },
    {
      id: "naps",
      title: "Designing a responsive digital workspace and community platform for university students.",
      description: "Streamlined student portal registrations, department forums, resource archives, and peer mentoring flows for 10,000+ members — reducing onboarding time by 40%.",
      image: napsImg,
      role: "Product Designer",
      timeline: "8 months",
      team: "3 Engineers, 2 PM",
      tags: ["Interaction Design", "Web App", "Information Architecture"],
    },
  ];

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 md:px-16 lg:px-24 pt-28 pb-16 min-h-screen flex flex-col justify-between font-geist">
      <div className="w-full max-w-3xl mx-auto space-y-10">
        {/* Back Link */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-[13px] font-medium text-[#666] bg-[#f5f5f5] hover:bg-[#e8e8e8] hover:text-[#111] px-4 py-1.5 rounded-full transition-all font-geist"
          >
            &larr; Go back
          </Link>
        </div>

        {/* Intro — confident, no "a few" */}
        <p className="text-[18px] text-[#555] leading-[1.75] font-newsreader">
          Selected projects showcasing product thinking, systems design, and user-centered problem solving across health-tech, logistics, and education.
        </p>

        {/* Section Title */}
        <div className="pt-4 space-y-6">
          <h2 className="text-xl font-semibold text-[#111] tracking-tight font-fraunces">Case Studies</h2>

          {/* List of Case Studies — clickable cards */}
          <div className="space-y-6">
            {caseStudies.map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.id}`}
                className="group flex flex-col md:flex-row bg-[#f3f5f8] rounded-[24px] overflow-hidden p-6 gap-6 md:gap-8 items-stretch transition-all duration-300 hover:shadow-md border border-transparent hover:border-neutral-200 cursor-pointer no-underline hover:scale-[1.01]"
              >
                {/* Left side: Project Image */}
                <div className="relative w-full md:w-[40%] bg-neutral-200 rounded-xl overflow-hidden min-h-[220px] md:min-h-0 shrink-0 border border-neutral-100/40">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-[#e3e6eb] flex items-center justify-center font-geist text-neutral-400 font-medium text-sm p-4 text-center">
                      Mockup Coming Soon
                    </div>
                  )}
                </div>

                {/* Right side: Project Details */}
                <div className="w-full md:w-[60%] flex flex-col justify-center py-2 space-y-3">
                  {/* Metadata bar */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-[#999] font-geist">
                    <span>{project.role}</span>
                    <span>·</span>
                    <span>{project.timeline}</span>
                    <span>·</span>
                    <span>{project.team}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-[20px] font-semibold text-[#111] leading-snug font-fraunces group-hover:text-[#333] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-500 text-[14px] leading-relaxed font-newsreader">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-[#777] bg-white/80 border border-neutral-200/60 px-2.5 py-0.5 rounded-full font-geist"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA — replaces the "adding more" note */}
        <div className="pt-8 space-y-4">
          <div className="bg-[#f9f9f9] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[15px] text-[#333] font-medium font-geist">
                Want to see more of my work?
              </p>
              <p className="text-[13px] text-[#888] font-newsreader mt-1">
                I can share detailed case study decks, process walkthroughs, and design system documentation.
              </p>
            </div>
            <a
              href="mailto:momohfayd@gmail.com?subject=Case%20Study%20Deck%20Request"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[#111] bg-white hover:bg-[#f0f0f0] border border-neutral-200 px-5 py-2 rounded-full transition-all font-geist shrink-0"
            >
              Request full deck →
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

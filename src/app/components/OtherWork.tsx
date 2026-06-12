import { useState } from "react";

const otherProjects = [
  { year: "2024", title: "Notespace — Note-taking App", roles: "Product Design · Mobile" },
  { year: "2023", title: "10.8.8 Africa — Internal Dashboard", roles: "UX Design · Web" },
  { year: "2022", title: "Spark Deliveries — Driver App", roles: "Mobile Design · Research" },
];

function ProjectRow({ project }: { project: (typeof otherProjects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "20px 0",
        textDecoration: "none",
        borderBottom: "1px solid #ebebeb",
        transition: "opacity 0.2s",
        opacity: hovered ? 1 : 0.75,
      }}
    >
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 12,
          fontWeight: 400,
          color: "#bbb",
          minWidth: 36,
          flexShrink: 0,
        }}
      >
        {project.year}
      </span>

      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(14px, 1.5vw, 16px)",
          fontWeight: 500,
          color: "#111",
          flex: 1,
          transition: "transform 0.2s",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
          display: "inline-block",
        }}
      >
        {project.title}
      </span>

      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          fontWeight: 400,
          color: "#aaa",
          flexShrink: 0,
          textAlign: "right",
        }}
        className="hidden sm:inline"
      >
        {project.roles}
      </span>

      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 16,
          flexShrink: 0,
          transition: "transform 0.2s, color 0.2s",
          transform: hovered ? "translate(2px,-2px)" : "translate(0,0)",
          display: "inline-block",
          color: hovered ? "#111" : "#ccc",
        }}
      >
        ↗
      </span>
    </a>
  );
}

export function OtherWork() {
  return (
    <section
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#fff",
        borderTop: "1px solid #e8e8e8",
      }}
    >
      <div
        style={{ padding: "64px 20px" }}
        className="sm:px-10 md:px-16 xl:px-20 py-20 lg:py-24"
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            color: "#aaa",
            letterSpacing: "0.08em",
            margin: "0 0 8px",
          }}
        >
          OTHER PROJECTS
        </p>
        <div style={{ borderTop: "1px solid #ebebeb" }}>
          {otherProjects.map((p) => (
            <ProjectRow key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

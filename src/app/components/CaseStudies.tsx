import { useState } from "react";

interface CaseStudy {
  num: string;
  category: string;
  year: string;
  title: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  bg: string;
}

const caseStudies: CaseStudy[] = [
  {
    num: "01",
    category: "Health-Tech",
    year: "2024",
    title: "CareLink Africa",
    tags: ["Product Design", "UX Research", "User Flows"],
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVsZW1lZGljaW5lJTIwbW9iaWxlJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc4MTAyMjU4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "CareLink Africa — healthcare marketplace",
    bg: "#dce8e1",
  },
  {
    num: "02",
    category: "EdTech",
    year: "2023",
    title: "NAPS — Student Hub",
    tags: ["UX Design", "Design System", "Research"],
    imageUrl:
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMHBvcnRhbCUyMGRhc2hib2FyZCUyMFVJJTIwZGVzaWdufGVufDF8fHx8MTc4MTAyMjU3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "NAPS Student Hub — university portal",
    bg: "#dde1ee",
  },
  {
    num: "03",
    category: "Logistics",
    year: "2023",
    title: "Spark Deliveries",
    tags: ["Product Design", "Mobile", "Dashboard"],
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBkZWxpdmVyeSUyMGFwcCUyMHRyYWNraW5nJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc4MTAyMjU3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "Spark Deliveries — logistics platform",
    bg: "#ede5d8",
  },
];

function ArrowIcon({ inverted }: { inverted: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M2 14L14 2M14 2H6M14 2V10"
        stroke={inverted ? "#fff" : "#555"}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        textDecoration: "none",
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid #e4e4e4",
        background: "#fff",
        transition: "box-shadow 0.32s ease, transform 0.32s ease",
        boxShadow: hovered ? "0 20px 56px rgba(0,0,0,0.09)" : "0 1px 8px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {/* Image block */}
      <div
        style={{
          width: "100%",
          background: cs.bg,
          overflow: "hidden",
          position: "relative",
          /* Responsive height via aspect-ratio trick */
          aspectRatio: "16 / 7",
        }}
      >
        <img
          src={cs.imageUrl}
          alt={cs.imageAlt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.55s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        {/* Subtle dark overlay on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.12)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.32s ease",
          }}
        />
      </div>

      {/* Info strip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 28px",
          borderTop: "1px solid #ebebeb",
          gap: 16,
        }}
      >
        {/* Left: number + title + meta */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, minWidth: 0 }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: "#c0c0c0",
              letterSpacing: "0.04em",
              flexShrink: 0,
            }}
          >
            {cs.num}
          </span>
          <div style={{ minWidth: 0 }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(15px, 1.8vw, 20px)",
                fontWeight: 700,
                color: "#111",
                letterSpacing: "-0.3px",
                margin: "0 0 3px",
                lineHeight: 1.15,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {cs.title}
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 400,
                color: "#aaa",
                margin: 0,
              }}
            >
              {cs.category} · {cs.year}
            </p>
          </div>
        </div>

        {/* Right: tags + arrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          {/* Tags — hidden on mobile */}
          <div
            style={{ display: "flex", gap: 8 }}
            className="hidden md:flex"
          >
            {cs.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#666",
                  background: "#f2f2f2",
                  borderRadius: 6,
                  padding: "5px 11px",
                  whiteSpace: "nowrap",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Arrow button */}
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: `1.5px solid ${hovered ? "#111" : "#e0e0e0"}`,
              background: hovered ? "#111" : "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "background 0.25s, border-color 0.25s, transform 0.25s",
              transform: hovered ? "rotate(-45deg)" : "rotate(0deg)",
            }}
          >
            <ArrowIcon inverted={hovered} />
          </div>
        </div>
      </div>
    </a>
  );
}

export function CaseStudies() {
  return (
    <section
      id="work"
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
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 40,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                color: "#aaa",
                letterSpacing: "0.08em",
                margin: "0 0 10px",
              }}
            >
              CASE STUDIES
            </p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(26px, 4vw, 44px)",
                fontWeight: 800,
                color: "#111",
                letterSpacing: "-1px",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Featured Work
            </h2>
          </div>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 400,
              color: "#bbb",
            }}
          >
            3 projects
          </span>
        </div>

        {/* Stacked cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.num} cs={cs} />
          ))}
        </div>
      </div>
    </section>
  );
}

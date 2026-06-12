const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "12+", label: "Products Shipped" },
  { value: "3", label: "Industries" },
  { value: "0→1", label: "Products Built" },
];

const tools = ["Figma", "FigJam", "Framer", "Rive", "Adobe XD", "HTML / CSS"];

export function About() {
  return (
    <section
      id="about"
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
        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "28px 24px",
            paddingBottom: 52,
            marginBottom: 52,
            borderBottom: "1px solid #ebebeb",
          }}
          className="sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 800,
                  color: "#111",
                  letterSpacing: "-1.5px",
                  margin: "0 0 4px",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 400,
                  color: "#999",
                  margin: 0,
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bio + tools two-col on desktop */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48 }}
          className="lg:grid-cols-[1fr_240px] lg:gap-20"
        >
          {/* Bio */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#aaa",
                letterSpacing: "0.08em",
                margin: "0 0 18px",
              }}
            >
              ABOUT
            </p>
            <p
              style={{
                fontSize: "clamp(15px, 1.6vw, 17px)",
                fontWeight: 400,
                color: "#333",
                lineHeight: 1.8,
                margin: "0 0 16px",
                maxWidth: 580,
              }}
            >
              I'm Fayd — a Product Designer with ~4 years of experience turning messy
              problems into focused, usable products. I've worked across health-tech
              (CareLink Africa, NAPS), logistics (Spark Deliveries), and community
              platforms, always with a cross-functional team.
            </p>
            <p
              style={{
                fontSize: "clamp(15px, 1.6vw, 17px)",
                fontWeight: 400,
                color: "#333",
                lineHeight: 1.8,
                margin: 0,
                maxWidth: 580,
              }}
            >
              My process is research-led and systems-minded. I care deeply about the
              people using what I build — especially in contexts where design can shift
              real behaviour.
            </p>

            <a
              href="mailto:momohfayd@gmail.com"
              id="contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 28,
                fontSize: 14,
                fontWeight: 600,
                color: "#111",
                textDecoration: "none",
                borderBottom: "1.5px solid #111",
                paddingBottom: 1,
              }}
            >
              momohfayd@gmail.com
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
                  stroke="#111"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Tools */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#aaa",
                letterSpacing: "0.08em",
                margin: "0 0 18px",
              }}
            >
              TOOLS
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {tools.map((tool, i) => (
                <li
                  key={tool}
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#333",
                    padding: "11px 0",
                    borderBottom: i < tools.length - 1 ? "1px solid #f2f2f2" : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#ccc",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

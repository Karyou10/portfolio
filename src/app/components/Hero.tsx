export function Hero() {
  return (
    <section
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#fff",
        paddingTop: 64,
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{ width: "100%" }}
        className="px-5 sm:px-10 md:px-20 xl:px-24 py-16 lg:py-24"
      >
        {/* Available badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "7px 14px",
            borderRadius: 100,
            border: "1px solid #e4e4e4",
            background: "#f7f7f7",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#3ecf8e",
              display: "inline-block",
              boxShadow: "0 0 0 2.5px #c6f0de",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 500,
              color: "#666",
              letterSpacing: "0.01em",
            }}
          >
            Product Designer · 4 yrs exp
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(42px, 8vw, 96px)",
            fontWeight: 800,
            color: "#111",
            letterSpacing: "-3px",
            lineHeight: 1.02,
            margin: "0 0 28px",
            maxWidth: "14ch",
          }}
        >
          Designing clarity from complexity.
        </h1>

        {/* Accent rule */}
        <div style={{ width: 56, height: 3, background: "#111", marginBottom: 28, borderRadius: 2 }} />

        {/* Sub copy */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(15px, 1.8vw, 18px)",
            fontWeight: 400,
            color: "#777",
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 0 40px",
          }}
        >
          I craft digital products that feel intuitive and drive real outcomes.
          Currently at 10.8.8 Africa — working across health-tech, logistics,
          and community platforms in emerging markets.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 64 }}>
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              background: "#111",
              border: "none",
              borderRadius: 8,
              padding: "14px 28px",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            View Work
          </button>
          <a
            id="resume"
            href="#"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "#111",
              background: "#fff",
              border: "1.5px solid #ddd",
              borderRadius: 8,
              padding: "14px 28px",
              textDecoration: "none",
              display: "inline-block",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#999")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#ddd")}
          >
            Download CV
          </a>
        </div>

        {/* Bottom meta row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            flexWrap: "wrap",
            paddingTop: 32,
            borderTop: "1px solid #ebebeb",
          }}
        >
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#aaa", letterSpacing: "0.07em", margin: "0 0 3px" }}>
              BASED IN
            </p>
            <p style={{ fontSize: 14, fontWeight: 500, color: "#333", margin: 0 }}>Lagos, Nigeria</p>
          </div>
          <div style={{ width: 1, height: 28, background: "#e8e8e8" }} className="hidden sm:block" />
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#aaa", letterSpacing: "0.07em", margin: "0 0 3px" }}>
              CURRENTLY AT
            </p>
            <p style={{ fontSize: 14, fontWeight: 500, color: "#333", margin: 0 }}>10.8.8 Africa</p>
          </div>
          <div style={{ width: 1, height: 28, background: "#e8e8e8" }} className="hidden sm:block" />
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#aaa", letterSpacing: "0.07em", margin: "0 0 3px" }}>
              AVAILABILITY
            </p>
            <p style={{ fontSize: 14, fontWeight: 500, color: "#3ecf8e", margin: 0 }}>Open to hire</p>
          </div>
        </div>
      </div>
    </section>
  );
}

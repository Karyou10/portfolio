import { BrowserRouter, Routes, Route } from "react-router";
import { Nav } from "./components/Nav";
import { PageTransition } from "./components/PageTransition";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { CaseStudy } from "./pages/CaseStudy";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen relative select-none overflow-x-hidden flex flex-col justify-between">
        <div className="relative z-10 w-full flex-1">
          <Nav />
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:id" element={<CaseStudy />} />
            </Routes>
          </PageTransition>
        </div>

        {/* Global Page Background at the bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden z-0"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1) 70%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1) 70%)"
          }}
        >
          <DottedGlowBackground 
            gap={14} 
            radius={1.5}
            color="#ccc"
            glowColor="#3b82f6"
            opacity={0.3}
            speedMin={0.3}
            speedMax={0.8}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}


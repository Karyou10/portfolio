import { Link, useLocation } from "react-router";
import avatarImg from "../../assets/avatar.jpg";

export function Nav() {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "home" },
    { to: "/about", label: "about" },
    { to: "/work", label: "work" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent py-8">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-16 lg:px-24 flex items-center justify-between">
        {/* Profile Avatar on the left */}
        <Link to="/" className="block shrink-0">
          <img
            src={avatarImg}
            alt="Fayd Momoh"
            className="w-12 h-12 rounded-full object-cover border border-neutral-100 hover:opacity-90 transition-all duration-200"
          />
        </Link>

        <nav className="flex items-center gap-1 bg-[#f5f5f5] p-1 rounded-full border border-neutral-200/50">
          {navLinks.map((link) => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 capitalize ${
                  active
                    ? "bg-white text-[#111] shadow-sm border border-neutral-200/50"
                    : "text-neutral-500 hover:text-[#111] hover:bg-neutral-200/50 border border-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

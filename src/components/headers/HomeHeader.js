import { useState, useEffect } from "react";
import { Menu, X, User, LayoutDashboard, LogOut, Sparkles } from "lucide-react";

export default function HomeHeader({ user = null, onLogout }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 lg:px-10 py-3.5 transition-all duration-300">
      {/* Main Floating Navbar Capsule */}
      <div className={` mx-auto flex items-center justify-between py-2.5 px-5 rounded-full transition-all duration-300 ${
          scrolled
            ? "w-8/10 bg-gradient-to-r from-sky-200/30 to-slate-200/30 dark:from-slate-950/60 dark:to-gray-950/60 shadow-lg shadow-gray-500/50 border border-slate-500/50 backdrop-blur"
            : "w-full bg-transparent border-[var(--text-secondary)]/15"
        }`}
      >
        {/* Brand Logo */}
        <a href="/" className="flex items-center space-x-2 shrink-0">
          <img src="/logo-light.png" alt="logo" className="w-36 sm:w-40 dark:hidden" />
          <img src="/logo-dark.png" alt="logo" className="w-36 sm:w-40 hidden dark:block" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className={`hidden lg:flex items-center ${scrolled ? 'space-x-6' : 'space-x-8'} uppercase tracking-wider text-md font-semibold `}>
          <a href="#features" className="hover:text-[var(--text-highlight)] dark:text-gray-200 transition-colors duration-200">
            Features
          </a>
          <a href="#pricing" className="hover:text-[var(--text-highlight)] dark:text-gray-200 transition-colors duration-200">
            Pricing
          </a>
          <a href="#working" className="hover:text-[var(--text-highlight)] dark:text-gray-200 transition-colors duration-200">
            How It Works
          </a>
          <a href="#download" className="hover:text-[var(--text-highlight)] dark:text-gray-200 transition-colors duration-200">
            Download App
          </a>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {user?.id ? (
            /* Logged In State */
            <div className="flex items-center space-x-3">
              {/* Subscribe CTA */}
              <a href="/subscribe" className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--btn-primary-text)] bg-[var(--btn-primary-bg)] hover:bg-[var(--text-highlight)] rounded-full transition-all duration-300 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Subscribe
              </a>

              {/* Profile Hover Dropdown Container */}
              <div
                className="relative"
                onMouseEnter={() => setProfileDropdownOpen(true)}
                onMouseLeave={() => setProfileDropdownOpen(false)}
              >
                <button  onClick={() => setProfileDropdownOpen((prev) => !prev)} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--text-secondary)]/30 bg-[var(--tile-2)] hover:border-[var(--text-highlight)] transition-all cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-[var(--text-highlight)]/20 text-[var(--text-highlight)] flex items-center justify-center font-bold text-xs">
                    {user.name ? user.name.charAt(0).toUpperCase() : <User className="w-4 h-4" />}
                  </div>
                  <span className="text-xs font-medium text-[var(--text-primary)] max-w-[100px] truncate">
                    {user.name || "Account"}
                  </span>
                </button>

                {/* Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 top-full pt-2 w-48 animate-fade-in z-50">
                    <div className="bg-[var(--tile-1)] backdrop-blur-xl border border-[var(--text-secondary)]/20 rounded-2xl shadow-xl py-2 text-sm text-[var(--text-primary)] overflow-hidden">
                      <a
                        href="/dashboard"
                        className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[var(--tile-2)] transition-colors text-xs font-medium"
                      >
                        <LayoutDashboard className="w-4 h-4 text-[var(--text-highlight)]" />
                        Dashboard
                      </a>
                      <button
                        onClick={onLogout}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-rose-500/10 hover:text-rose-500 text-xs font-medium transition-colors text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Logged Out State */
            <>
              <a
                href="/login"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                Login
              </a>
              <a
                href="/signup"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--btn-primary-text)] bg-[var(--btn-primary-bg)] hover:bg-[var(--text-highlight)] rounded-full transition-all duration-300 shadow-sm"
              >
                Sign Up
              </a>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full text-[var(--text-primary)] hover:bg-[var(--tile-2)] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto bg-[var(--bg-color)]/95 backdrop-blur-xl border border-[var(--text-secondary)]/20 rounded-3xl p-5 shadow-2xl animate-fade-in flex flex-col gap-4">
          <nav className="flex flex-col space-y-3 uppercase tracking-wider text-xs font-semibold text-[var(--text-secondary)]">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[var(--text-highlight)] transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[var(--text-highlight)] transition-colors"
            >
              Pricing
            </a>
            <a
              href="#working"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[var(--text-highlight)] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[var(--text-highlight)] transition-colors"
            >
              Download App
            </a>
          </nav>

          <hr className="border-[var(--text-secondary)]/20" />

          {/* Mobile Auth/Profile Actions */}
          <div className="flex flex-col gap-2.5 pt-1">
            {user?.id ? (
              <>
                <a
                  href="/subscribe"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--btn-primary-text)] bg-[var(--btn-primary-bg)] rounded-full text-center"
                >
                  <Sparkles className="w-4 h-4 text-[var(--text-highlight)]" />
                  Subscribe
                </a>
                <a
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--tile-2)] rounded-full text-center"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogout && onLogout();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-rose-500 bg-rose-500/10 rounded-full text-center"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <a
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-center text-[var(--text-primary)] bg-[var(--tile-2)] rounded-full"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-center text-[var(--btn-primary-text)] bg-[var(--btn-primary-bg)] rounded-full"
                >
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
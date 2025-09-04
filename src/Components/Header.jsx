import { label } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

const Header = () => {
  // State for single open dropdown/accordion on desktop and mobile
  const [openDropdown, setOpenDropdown] = useState("");
  const [openMobileSection, setOpenMobileSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? "" : key));
  };

  const toggleMobileSection = (key) => {
    setOpenMobileSection((prev) => (prev === key ? "" : key));
  };
  const location = useLocation();
  const currentPath = location.pathname;

  const pageTitles = {
    "/": {
      welcomeText: "WELCOME TO",
      title: "Drone4S Lab",
      variant: "normal",
    },
    "/about-dora": {
      welcomeText: "ABOUT DORA",
      title: "DORA OFFICE",
      variant: "reverse",
    },
    "/message-dora": {
      welcomeText: "MESSAGE FROM DORA",
      title: "DORA OFFICE",
      variant: "reverse",
    },
    "/dora-staff": { 
    //   welcomeText: "MESSAGE FROM DORA",
      title: "DORA Staff",
      variant: "normal",
     },
    "/giving-back": {  
        welcomeText: "Giving back to continue to grow together and raise the tradition of excellence.",
        title: "Giving Back" ,
        variant: "reverse",
    },
    "/contact-us": { title: "",
      variant: "reverse",
      welcomeText: "",
     },
    "/american-express": { title: "Welcome to Drone4S Lab",
      variant: "reverse",
      welcomeText: "Drone for Sustainability",
     },
    "/about": { title: "About Drone Lab",
      variant: "normal",
      welcomeText: "",
     }
  };

  const { welcomeText, title, variant } = pageTitles[currentPath] || {
    welcomeText: "",
    title: "DORA OFFICE",
    variant: "normal",
  };
  const images = [
        "/top1.jpeg",
        "/top2.jpeg",
        "/top4.jpeg",
        "/top5.jpeg",
        "/top3.jpeg",
    ];
const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Decrement index for rightward shift
            setIndex((prev) => (prev - 1 + images.length) % images.length);
        }, 10000); // switch every 2s
        return () => clearInterval(interval);
    }, [images.length]);

    const getVisibleImages = () => {
        return [
            images[index % images.length],
            images[(index + 1) % images.length],
            images[(index + 2) % images.length],
        ];
    };
    
  return (
    <header className="w-full text-[15px]">
      {/* Top Bar */}
        {/* Brand Bar */}
      {/* <div className="bg-blue-950 border-b border-slate-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={`${process.env.PUBLIC_URL}/iitr_.svg`}
                alt="IIT Roorkee Logo"
                className="h-16 w-16   text-white"
              />
              <div className="leading-tight">
                <p className="text-[18px] font-semibold tracking-wide text-white">
                  Sponsored Research Projects - Prof RD Garg
                </p>
                <p className="text-xs text-white">
                  Indian Institute of Technology Roorkee
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="md:hidden inline-flex flex-col gap-1.5"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="w-6 h-0.5 bg-slate-800"></span>
              <span className="w-6 h-0.5 bg-slate-800"></span>
              <span className="w-6 h-0.5 bg-slate-800"></span>
            </button>
          </div>
        </div>
      </div> */}

      {/* Shrinked Hero Section */}
      <section className="relative w-full" style={{ height: "40vh" }}>
        
        <nav className="relative z-20">
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            {/* Desktop menu */}
            {/* <div className="hidden lg:flex items-center gap-5 text-white h-12"> */}
            <div className="hidden lg:flex items-center gap-9 text-white h-12 justify-end">
              {navItems.map((item) =>
                item.links ? (
                  <div
                    className="relative"
                    key={item.key}
                    // onMouseLeave={() => setOpenDropdown(null)}
                    // onMouseEnter={() => setOpenDropdown(item.key)}
                  >
                    <button
                      onClick={() => toggleDropdown(item.key)}
                      className="inline-flex items-center gap-1 hover:text-blue-300"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.key}
                    >
                      {item.label}
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === item.key && (
                      <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-white text-slate-800 shadow-lg">
                        {item.links.map((link) => (
                          <Link
                            key={link.label}
                            to={link.href}
                            className="block px-3 py-2 hover:bg-slate-100 rounded-md"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="hover:text-blue-300"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* Mobile menu trigger */}
            <div className="lg:hidden">
              <div className="flex items-center justify-between px-4 py-3">
                <button
                  aria-expanded={isMenuOpen}
                  aria-controls="mobileNavPanel"
                  onClick={() => setIsMenuOpen((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-md border border-white/40 px-3 py-2 text-white hover:bg-white/10"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  Menu
                </button>
                <div className="flex items-center gap-2">
                  <a
                    href="/"
                    className="text-white/90 hover:text-white text-sm"
                  >
                    Home
                  </a>
                  {/* <a
                    href="/login"
                    className="text-white/90 hover:text-white text-sm"
                  >
                    Login
                  </a> */}
                  {/* <a
                    href="/donations"
                    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500"
                  >
                    Donate
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu overlay */}
          {isMenuOpen && (
            <button
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="lg:hidden fixed inset-0 z-[49] bg-black/40"
            />
          )}

          <div
            id="mobileNavPanel"
            role="dialog"
            aria-modal="true"
            className={`lg:hidden fixed left-0 right-0 top-0 z-50 rounded-b-xl bg-slate-900 text-white shadow-2xl transition-transform duration-300 ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src={`${process.env.PUBLIC_URL}/iitr_logo.png`}
                  alt="IIT Roorkee Logo"
                  className="h-8 w-8"
                />
                <div className="text-left">
                  <p className="text-base font-semibold leading-none">
                    DORA Office
                  </p>
                  <p className="text-xs text-white/70">IIT Roorkee</p>
                </div>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md p-2 hover:bg-white/10"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-4 py-3">
              <div className="flex items-center rounded-lg bg-white px-3 py-2">
                <input
                  className="w-full bg-transparent text-sm text-gray-800 outline-none"
                  placeholder="Search"
                />
                <svg
                  className="ml-2 h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <nav className="max-h-[70vh] overflow-y-auto pb-8 px-2 text-sm">
              {navItems.map((item) =>
                item.links ? (
                  <div className="rounded-md" key={item.key}>
                    <button
                      onClick={() => toggleMobileSection(item.key)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left hover:bg-white/10"
                      aria-haspopup="true"
                      aria-expanded={openMobileSection === item.key}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          openMobileSection === item.key ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openMobileSection === item.key && (
                      <div className="ml-3 space-y-1 pb-2">
                        {item.links.map((link) => (
                          <Link
                            key={link.label}
                            to={link.href}
                            className="block rounded px-3 py-2 text-white/90 hover:bg-white/10"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="mt-1 block rounded-md px-3 py-3 hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </nav>
        {/* <div className="w-full flex justify-center items-center bg- overflow-hidden ">
            <div className="flex w-full">
                {getVisibleImages().map((img, i) => {
                    // Apply different styles for left, middle, right
                    let extraClasses = "";
                    if (i === 0 || i === 2) {
                        // left and right → half width + only top & bottom border
                        extraClasses = "w-1/4 border-y-4 border-white";
                    } else if (i === 1) {
                        // middle → full width + all borders
                        extraClasses = "w-1/2 border-4 border-white";
                    }

                    return (
                        <div key={i} className={`${extraClasses} aspect-[550/220]`}>
                            <img
                                src={img}
                                alt={`showcase-${i}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    );
                })}
            </div>
        </div> */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/front.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

        

        {/* Hero Text */}
        <div className="relative z-10 flex-1 flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center w-full py-24">
            {variant === "normal" ? (
              <>
                {welcomeText && (
                  <p className="text-white/90 text-[18px] sm:text-[20px] tracking-[.2em] font-semibold">
                    {welcomeText}
                  </p>
                )}
                <h1 className="mt-3 text-white font-extrabold leading-tight text-[40px] sm:text-[56px] md:text-[64px] tracking-wide">
                  {title}
                </h1>
              </>
            ) : (
              <>
                {welcomeText && (
                  <p className="text-white font-extrabold leading-tight text-[40px] sm:text-[56px] md:text-[64px] tracking-wide">
                    {title}
                  </p>
                )}
                <h1 className="mt-3 text-white/90 text-[18px] sm:text-[20px] tracking-[.2em] font-semibold">
                  {welcomeText}
                </h1>
              </>
            )}
          </div>
        </div>
        
      </section>
    </header>
  );
};

export default Header;

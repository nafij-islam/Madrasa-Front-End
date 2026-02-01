import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import logo from "../../assets/logo.jpeg";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const menuItems = [
    { id: 1, title: "হোম", url: "/" },
    {
      id: 2,
      title: "আমাদের পরিচিতি",
      url: "#",
      submenu: [
        { title: "মাদরাসা সম্পর্কে", url: "/about-us" },
        
      ],
    },
    { id: 3, title: "শিক্ষক ও প্রশাসন", url: "/teachers-administration" },
    { id: 4, title: "ভর্তি তথ্য", url: "/admission-info" },
    { id: 5, title: "দান ও সহযোগিতা", url: "/donation-support" },
    { id: 6, title: "গ্যালারি", url: "/gallery" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`sticky top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white px-1 shadow-xl py-2"
            : "bg-[#E8F5E9] px-1 py-2"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* ================= LOGO ================= */}
            <Link to="/" className="flex items-center gap-2 lg:gap-3 group">
              <img
                src={logo}
                alt="Madrasah Logo"
                className={`
                  rounded-full border-2 border-[#1F7A4D]
                   duration-500 
                  w-11 h-11
                  sm:w-12 sm:h-12
                  ${
                    scrolled
                      ? "lg:w-14 lg:h-14"
                      : "lg:w-20 lg:h-20"
                  }
                `}
              />

              <div className="flex flex-col justify-center leading-tight">
                <span
                  className={`text-[#1F7A4D] font-black transition-all duration-300 ${
                    scrolled
                      ? "text-lg lg:text-xl"
                      : "text-xl lg:text-2xl"
                  }`}
                >
                  শাহ্ আজম রহ.
                </span>
                <span className="text-[#F4C430] text-[10px] lg:text-xs font-bold tracking-[2px] uppercase">
                  মডেল মাদ্রাসা
                </span>
              </div>
            </Link>

            {/* ================= DESKTOP MENU ================= */}
            <ul className="hidden xl:flex items-center lg:gap-6 2xl:gap-8">
              {menuItems.map((item) => (
                <li key={item.id} className="relative group">
                  {item.submenu ? (
                    <div className="flex items-center gap-1 cursor-pointer py-2 text-[18px] font-bold text-gray-600 hover:text-[#1F7A4D] transition-all">
                      {item.title}
                      <FaChevronDown
                        size={12}
                        className="group-hover:rotate-180 transition-transform"
                      />

                      <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 border-t-4 border-[#1F7A4D]">
                        {item.submenu.map((sub, index) => (
                          <NavLink
                            key={index}
                            to={sub.url}
                            className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-[#E8F5E9] hover:text-[#1F7A4D] rounded-lg transition-all"
                          >
                            {sub.title}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `relative text-[18px] font-bold transition-all duration-300 py-2 px-1 ${
                          isActive
                            ? "text-[#1F7A4D]"
                            : "text-gray-600 hover:text-[#1F7A4D]"
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>

            {/* ================= CONTACT BUTTON ================= */}
            <div className="hidden xl:block">
              <Link
                to="/contact"
                className="bg-[#1F7A4D] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#F4C430] hover:text-[#1F7A4D] transition-all inline-block"
              >
                যোগাযোগ
              </Link>
            </div>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setOpen(true)}
                className="text-[#1F7A4D] p-2 hover:bg-[#1F7A4D]/10 rounded-xl"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[200] shadow-2xl transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b">
            <span className="text-[#1F7A4D] font-bold text-lg">মেনু</span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 bg-gray-100 rounded-full text-gray-500"
            >
              <FaChevronDown className="rotate-90" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6">
            <ul className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <li key={item.id}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileSubMenuOpen(!mobileSubMenuOpen)
                        }
                        className="flex items-center justify-between w-full px-5 py-4 rounded-2xl font-black text-[#1F7A4D] bg-gray-50"
                      >
                        {item.title}
                        <FaChevronDown
                          className={`transition-transform ${
                            mobileSubMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          mobileSubMenuOpen ? "max-h-40 mt-2" : "max-h-0"
                        }`}
                      >
                        {item.submenu.map((sub, i) => (
                          <NavLink
                            key={i}
                            to={sub.url}
                            onClick={() => setOpen(false)}
                            className="block pl-10 py-3 text-[#1F7A4D]/80 font-bold border-l-2 border-[#1F7A4D]/20 ml-5 hover:text-[#1F7A4D]"
                          >
                            {sub.title}
                          </NavLink>
                        ))}
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={item.url}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-5 py-4 rounded-2xl font-black transition-all ${
                          isActive
                            ? "bg-[#1F7A4D] text-white"
                            : "text-[#1F7A4D] hover:bg-[#E8F5E9]"
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border-t bg-gray-50">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center w-full py-4 bg-[#F4C430] text-[#1F7A4D] font-black rounded-2xl"
            >
              যোগাযোগ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Wholesale Inquiry", path: "/wholesale" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="bg-[#4b2e2e] text-[#f8d7a3] py-4 px-6 flex justify-between items-center relative z-50">
        <h1 className="text-2xl font-bold">Seema Gold</h1>

        {/* Desktop Nav */}
        <nav className="relative hidden md:flex space-x-2">
          {links.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className="relative px-4 py-2 rounded-full text-sm font-medium"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-emerald-500 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}

                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive ? "text-white" : "hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-2xl">
          ☰
        </button>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed top-0 right-0 h-full w-64 bg-[#4b2e2e] text-[#f8d7a3] z-50 p-6 shadow-xl"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Menu</h2>
                <button onClick={() => setIsOpen(false)} className="text-2xl">
                  ✕
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                {links.map((item) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2 rounded-lg transition ${
                        isActive
                          ? "bg-emerald-500 text-white"
                          : "hover:bg-[#6d3f2b]"
                      }`}
                    >
                      {item.name}
                    </NavLink>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

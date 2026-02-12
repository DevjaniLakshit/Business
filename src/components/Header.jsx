import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Wholesale Inquiry", path: "/wholesale" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-[#4b2e2e] text-[#f8d7a3] py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">Seema Gold</h1>

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
    </header>
  );
};

export default Header;

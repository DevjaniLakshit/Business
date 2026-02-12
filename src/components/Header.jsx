import React from "react";

const Header = () => {
  const links = ["Home", "About", "Products", "Wholesale Inquiry", "Contact"];
  return (
    <header className="bg-[#4b2e2e] text-[#f8d7a3] py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">Seema Gold</h1>
      <nav className="space-x-6 hidden md:block">
        {links.map((item) => (
          <a
            key={item}
            href="#"
            className="text-inherit no-underline transition-colors duration-300 hover:text-emerald-600"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;

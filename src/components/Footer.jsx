import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4b2e2e] text-white px-8 py-10">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <p>Home</p>
          <p>Products</p>
          <p>Contact</p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Wholesale Info</h4>
          <p>Bulk Orders</p>
          <p>Dealer Login</p>
          <p>Shipping & Payment</p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <p>Call: +91 XXXXX XXXXX</p>
          <p>Email: info@yourincense.com</p>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-300">
        © 2026 Your Incense. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

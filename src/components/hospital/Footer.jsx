import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-3">Pawar Surgical Hospital</h3>
          <p className="text-gray-300">
            Providing compassionate and advanced surgical care to our community.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Information</h4>
          <p className="flex items-center gap-2 mb-1">
            <MapPin size={18} /> 4175/1, Navi Peth, Bhosale Chowk – Urban Bank,
            Pandharpur, Maharashtra – 413304
          </p>
          <p className="flex items-center gap-2 mb-1">
            <Phone size={18} /> <a href="tel:+919765009785" className="hover:text-blue-400">+91 9765009785</a>
          </p>
          <p className="flex items-center gap-2">
            <Mail size={18} /> <a href="mailto:info@pawarsurgical.com" className="hover:text-blue-400">info@pawarsurgical.com</a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="tel:+919765009785" className="hover:text-blue-400">Call</a></li>
            <li><a href="https://www.instagram.com/pawarhospital2800" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">Instagram</a></li>
            <li><a href="https://www.facebook.com/aditya.pawar.54772/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Facebook</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Credits */}
      <div className="text-center text-gray-400 text-sm">
        © 2025 Pawar Surgical Hospital. All rights reserved. <br />
        Created by{" "}
        <span className="font-bold">Vishal Tondale</span> ({" "}
        <a href="tel:+919067804781" className="hover:text-blue-400">Call</a>,{" "}
        <a href="https://www.linkedin.com/in/vishal-tondale-aa285a20a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>,{" "}
        <a href="https://www.instagram.com/01.vishal_t/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">Instagram</a>)
      </div>
    </footer>
  );
}

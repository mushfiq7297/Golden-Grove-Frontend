"use client";

import { Facebook, Instagram, Twitter, Github, Dribbble } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-center gap-4 text-center lg:flex-row lg:items-start lg:justify-between border-b border-border/60">
          {/* Logo / Brand */}
          <div className="flex items-center justify-center gap-2 text-primary mb-6 lg:mb-0">
             <Link
            to="/"
            className="hidden md:flex items-center p-1 gap-1"
          >
            <img
              src="https://i.ibb.co.com/Pvfwv7rh/navbar-logo-removebg-preview.png"
              alt="Site Logo"
              className="h-12 w-auto object-contain"
            />
            
          </Link>
            
          </div>

          {/* Tagline */}
          <p className=" text-sm text-muted-foreground">
            Creating sustainable, eco-friendly products for a greener future.  
            Crafted with care — inspired by nature.
          </p>
        </div>

        {/* Links */}
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 ">
          {[
            {
              title: "Services",
              links: [
                "1on1 Coaching",
                "Company Review",
                "Accounts Review",
                "HR Consulting",
                "SEO Optimization",
              ],
            },
            {
              title: "Company",
              links: ["About", "Meet the Team", "Careers"],
            },
            {
              title: "Helpful Links",
              links: ["Contact", "FAQs", "Live Chat"],
            },
            {
              title: "Legal",
              links: ["Accessibility", "Returns Policy", "Refund Policy"],
            },
            {
              title: "Downloads",
              links: ["Marketing Calendar", "SEO Infographics"],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <p className="font-semibold text-foreground">{section.title}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Socials */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[Facebook, Instagram, Twitter, Github, Dribbble].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="text-muted-foreground hover:text-primary transition-transform hover:-translate-y-1"
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-border/60 pt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-0">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Bamboo Co. All rights reserved.
          </p>

          <p className="flex items-center text-xs text-muted-foreground">
            Created with{" "}
            <span className="mx-1 text-green-500 text-xs animate-pulse">💚</span> by{" "}
            <span className="ml-1 font-medium text-foreground">Mushfiq</span>
          </p>

          <ul className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

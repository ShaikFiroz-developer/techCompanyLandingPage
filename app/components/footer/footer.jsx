import React from "react";
import Link from "next/link"; // Assuming you are using Next.js for routing

function Footer() {
  const navLinks = [
    {
      name: "What we do",
      path: "/what-we-do",
      subLinks: [
        { name: "Our Services", path: "/what-we-do/services" },
        { name: "Our Team", path: "/what-we-do/team" },
        { name: "Our Vision", path: "/what-we-do/vision" },
      ],
    },
    {
      name: "Insights",
      path: "/insights",
      subLinks: [
        { name: "Blog", path: "/insights/blog" },
        { name: "Reports", path: "/insights/reports" },
        { name: "Webinars", path: "/insights/webinars" },
      ],
    },
    {
      name: "Freemium",
      path: "/freemium",
      subLinks: [
        { name: "Free Tier", path: "/freemium/free-tier" },
        { name: "Premium Plans", path: "/freemium/premium-plans" },
      ],
    },
    {
      name: "Pricing",
      path: "/pricing",
      subLinks: [
        { name: "Basic", path: "/pricing/basic" },
        { name: "Standard", path: "/pricing/standard" },
        { name: "Enterprise", path: "/pricing/enterprise" },
      ],
    },
    {
      name: "Careers",
      path: "/careers",
      subLinks: [
        { name: "Job Openings", path: "/careers/jobs" },
        { name: "Internships", path: "/careers/internships" },
        { name: "Culture", path: "/careers/culture" },
      ],
    },
    {
      name: "FAQs",
      path: "/faqs",
      subLinks: [
        { name: "General", path: "/faqs/general" },
        { name: "Pricing", path: "/faqs/pricing" },
        { name: "Technical", path: "/faqs/technical" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-black flex justify-center items-center text-white p-8">
      <div className="w-11/12 lg:w-6/12 mg:w-11/12 grid lg:grid-cols-3 mg:grid-cols-3 items-center justify-center gap-4">
        {navLinks.map((link) => (
          <div key={link.name}>
            <a className="text-lg font-bold hover:underline">{link.name}</a>
            <ul className="list-none list-inside mt-2">
              {link.subLinks.map((subLink) => (
                <li
                  className=" hover:text-blue-600 cursor-pointer"
                  key={subLink.name}
                >
                  <a className="hover:underline">{subLink.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;

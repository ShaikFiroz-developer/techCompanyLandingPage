"use client";
import React from "react";
import { motion } from "framer-motion";

const companyHighlights = [
  "Seamless Data Migration: Smooth, secure transitions to the cloud.",
  "Robust Cloud Storage: Scalable and reliable storage solutions.",
  "Advanced Cybersecurity: Top-tier data protection.",
  "Insightful Resources: Blogs, reports, and webinars for industry insights.",
  "Freemium Model: Free core features with premium upgrade options.",
  "Transparent Pricing: Clear, straightforward plans with no hidden fees.",
  "Dynamic Workplace: Inclusive environment with exciting career opportunities.",
  "Comprehensive Support: Responsive, knowledgeable assistance.",
  "Global Reach: Available in multiple languages for worldwide support.",
];

function Screen3() {
  return (
    <motion.div
      id="screen3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex flex-col lg:flex-row mg:flex-row justify-start w-full items-center min-h-screen"
    >
      <motion.div className="w-full lg:w-1/2 mg:1/2 flex justify-center">
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="text-5xl w-auto h-full flex items-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#1c0707c8]"
        >
          What we actually do?
        </motion.p>
      </motion.div>

      <motion.div className="w-full lg:w-1/2 mg:1/2 bg-[#000000] min-h-screen flex justify-center items-center rounded-l text-white">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-2xl p-8"
        >
          <motion.ul>
            {companyHighlights.map((highlight, index) => {
              const [title, description] = highlight.split(": ");
              return (
                <motion.li
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.2 }}
                  className="mb-4 text-sm"
                >
                  <span className="font-bold">{title}:</span>{" "}
                  <span className="font-normal">{description}</span>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Screen3;

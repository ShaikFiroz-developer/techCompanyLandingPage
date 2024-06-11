"use client";
import React from "react";
import { motion } from "framer-motion";

function Screen2() {
  return (
    <motion.div
      id="screen2"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/whatsappclonechatyourway.appspot.com/o/optimism-bearded-young-man-with-dark-curly-hair-holding-his-hands-near-beard-sitting-office-table-smiling-looking-laptop-screen%20(1).jpg?alt=media&token=b61dbf62-ac89-412a-a434-e464ee3063c7')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="text-center flex flex-col justify-start bg-black bg-opacity-50 p-8 rounded"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          1.5 Million+ Satisfied Customers
        </motion.h1>
        <motion.ul
          className="text-xl list-disc justify-start list-inside"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <motion.li
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            Seamless Data Migration
          </motion.li>
          <motion.li
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
          >
            Robust Cloud Storage
          </motion.li>
          <motion.li
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.5 }}
          >
            Advanced Cybersecurity
          </motion.li>
          <motion.li
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 4 }}
          >
            Insightful Resources
          </motion.li>
          <motion.li
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 4.5 }}
          >
            Dynamic Workplace
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}

export default Screen2;

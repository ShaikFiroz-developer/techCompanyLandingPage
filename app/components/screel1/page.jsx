"use client";
import React from "react";
import { motion } from "framer-motion";
import "@/app/styles/screen1.module.css";
import { Button } from "@mui/material";
import { CircleRounded } from "@mui/icons-material";

const Screen1 = () => {
  return (
    <motion.div
      id="scree1"
      className=" flex flex-col min-h-screen  items-center justify-center  w-full "
    >
      <motion.span className="w-full flex flex-col justify-center items-center">
        <motion.p
          className="text-3xl  lg:text-7xl mg:text-6xl w-auto h-fit  font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff2f2f] to-[#c90b0bdc]"
          initial={{ x: "-100vw" }}
          animate={{ x: "0vw" }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: "-50px" }}
        >
          CloudStore Innovations
        </motion.p>
        <motion.p
          className="w-11/12 lg:w-6/12 mg:w-6/12   font-medium"
          initial={{ x: "100vw" }}
          animate={{ x: "0vw" }}
          transition={{ duration: 0.5 }}
        >
          CloudStore Innovations revolutionizes business operations with
          state-of-the-art cloud solutions, including seamless data migration,
          robust storage, and advanced cybersecurity. Our insightful
          resources—blogs, industry reports, and webinars—keep clients ahead of
          the curve in cloud technology. Experience our platform through our
          unique freemium model, with transparent pricing and flexible upgrade
          options. We offer a dynamic workplace with exciting career
          opportunities and comprehensive customer support, available in
          multiple languages. Empowering businesses globally, CloudStore
          Innovations is your trusted partner in cloud excellence.
          <br />
          <span>
            <Button className="hover:bg-[#ff2f2fbc] hover:text-white">
              Signin
            </Button>{" "}
            <Button className="hover:bg-[#ff2f2fbc] hover:text-white">
              Know about us
            </Button>
          </span>
        </motion.p>
      </motion.span>
      <motion.div
        className="fixed bottom-0  w-full flex justify-start bg-transparent"
        initial={{ x: "-20vw" }}
        animate={{ x: "0vw" }}
        transition={{ duration: 0.5 }}
        style={{ zIndex: "104" }}
      >
        <motion.button className="text-sm font-mono text-blue-900">
          <b className="text-sm font-semibold">
            Online <CircleRounded style={{ color: "green" }} />
          </b>{" "}
          <br />
          Chat with us right Now!
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Screen1;

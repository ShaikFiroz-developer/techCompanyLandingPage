"use client";
import React, { useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import {
  Box,
  Typography,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

const faqs = [
  {
    question: "What services does CloudStore Innovations offer?",
    answer:
      "We offer cloud storage solutions, data migration, advanced cybersecurity, and seamless API integration.",
  },
  {
    question: "How does the freemium model work?",
    answer:
      "You can start with our free tier to access basic features. Upgrade to a premium plan for more storage, advanced features, and dedicated support.",
  },
  {
    question: "What kind of customer support do you provide?",
    answer:
      "We provide 24/7 customer support via chat, email, and phone for all premium plans. Basic support is available for free tier users.",
  },
  {
    question: "How secure is my data with CloudStore Innovations?",
    answer:
      "We implement advanced encryption and multiple layers of security to ensure your data is protected.",
  },
  {
    question: "Can I upgrade my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time through your account settings.",
  },
  {
    question: "Do you offer custom solutions for businesses?",
    answer:
      "Yes, we offer custom cloud solutions tailored to the specific needs of businesses. Contact our sales team for more details.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for our premium plans.",
  },
  {
    question: "Is there a limit to the number of users?",
    answer:
      "Our plans come with different user limits. The Enterprise plan offers unlimited users.",
  },
];

const Page6 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="screen6"
      className="min-h-screen flex flex-col items-center text-sm font-mono justify-center bg-gray-100"
    >
      <Box
        sx={{
          width: "75%",
          maxWidth: "800px",
          bgcolor: "white",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography sx={{ mb: 2, textAlign: "center" }}>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Accordion
              expanded={openIndex === index}
              onChange={() => toggleFAQ(index)}
            >
              <AccordionSummary
                expandIcon={
                  openIndex === index ? <ExpandLess /> : <ExpandMore />
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Page6;

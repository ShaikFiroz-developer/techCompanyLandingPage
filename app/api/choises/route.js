const options = [
  {
    name: "What we do",
    suboptions: [
      "Overview",
      "Services",
      "Products",
      "Case Studies",
      "Testimonials",
      "Partners",
      "How it works",
    ],
  },
  {
    name: "Insights",
    suboptions: [
      "Blog",
      "Articles",
      "Whitepapers",
      "Case Studies",
      "Industry Reports",
      "Webinars",
      "Podcasts",
      "News",
      "Research",
    ],
  },
  {
    name: "Freemium",
    suboptions: [
      "Features Comparison",
      "Sign Up",
      "Free Tier Features",
      "Premium Tier Features",
      "Upgrade Options",
      "User Testimonials",
      "FAQ",
    ],
  },
  {
    name: "Pricing",
    suboptions: [
      "Pricing Plans",
      "Features Comparison",
      "Free Trial",
      "Discounts and Offers",
      "Payment Methods",
      "Billing FAQ",
      "Refund Policy",
    ],
  },
  {
    name: "Careers",
    suboptions: [
      "Open Positions",
      "Company Culture",
      "Employee Benefits",
      "Career Development",
      "Internship Programs",
      "Application Process",
      "Meet the Team",
      "FAQs",
    ],
  },
  {
    name: "FAQs",
    suboptions: [
      "General Questions",
      "Account Management",
      "Billing and Payments",
      "Product/Service Usage",
      "Troubleshooting",
      "Privacy and Security",
      "Contact Support",
      "Popular Questions",
    ],
  },
];

export async function GET(req, res) {
  const jsonResponse = JSON.stringify(options);
  return new Response(jsonResponse, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

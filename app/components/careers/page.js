"use client";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";

function Screen5() {
  const [searchTerm, setSearchTerm] = useState("");
  const jobOpenings = [
    "Web Developer",
    "AI/ML Engineer",
    "Customer Support",
    "Sales Manager",
    "Tech Lead",
    "Product Manager",
    "UX Designer",
    "Data Scientist",
    "Network Administrator",
    "Cloud Solutions Architect",
  ];

  const filteredJobs = jobOpenings.filter((job) =>
    job.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      id="screen5"
      className="min-h-screen w-full flex justify-center items-center font-mono bg-gray-100"
    >
      <div className="w-fit min-h-96 flex flex-col justify-start items-start p-5 bg-white shadow-lg rounded-lg">
        <div className="flex gap-5 mb-4">
          <h2 style={{ marginLeft: "-8px" }} className="font-semibold text-2xl">
            Search recent job openings
          </h2>
          <div className="flex items-center border border-black rounded">
            <input
              style={{ height: "20px" }}
              className="text-black border-0 focus:outline-none px-2"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search jobs..."
            />
            <Search className="text-black" />
          </div>
        </div>
        <div>
          <ul className="list-disc text-blue-500">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <li style={{ cursor: "pointer" }} key={index}>
                  {job}
                </li>
              ))
            ) : (
              <li>No job openings found</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Screen5;

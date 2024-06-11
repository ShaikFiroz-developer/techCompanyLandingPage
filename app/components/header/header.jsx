"use client";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Header({ setMenuOpenedd }) {
  const [languages, setLanguages] = useState([]);
  const [choices, setChoices] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [hover, setHover] = useState(false);
  const [hoveredId, setHoveredId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setDataLoaded(false);
      try {
        const responseLang = await fetch("/api/lan");
        const dataLang = await responseLang.json();
        setLanguages(dataLang);

        const responseChoices = await fetch("/api/choises");
        const dataChoices = await responseChoices.json();
        setChoices(dataChoices);

        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setMenuOpenedd(menuOpen);
  }, [menuOpen]);

  return (
    <div>
      <div
        className="hidden w-full font-mono fixed lg:flex md:flex justify-between items-center h-12 pb-1 bg-white"
        style={{ borderBottom: "1px solid grey", zIndex: "101" }}
      >
        <section className="w-2/12">
          <img src="logo.png" alt="Logo" height={30} width={100} />
        </section>
        <section className="w-7/12 flex">
          <ul className="w-full flex justify-start gap-7">
            {[
              "What we do",
              "Insights",
              "Freemium",
              "Pricing",
              "Careers",
              "FAQS",
            ].map((item, index) => (
              <li
                key={index}
                id={`h${index + 1}`}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredId(`h${index + 1}`)}
                onMouseLeave={() => setHoveredId("")}
                onClick={() => {
                  const targetElement = document.getElementById(
                    `screen${index + 1}`
                  );
                  if (index == 3) {
                    const targetElement =
                      document.getElementById("pricinglgmg");
                    targetElement.scrollIntoView({ behavior: "smooth" });
                  }
                  if (index == 3) {
                    const targetElement = document.getElementById("pricingsm");
                    targetElement.scrollIntoView({ behavior: "smooth" });
                  }
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <p>
                  {item}
                  {hoveredId === `h${index + 1}` ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </p>
                {hoveredId === `h${index + 1}` && (
                  <span
                    style={{ marginLeft: `-${8 * index}vw`, zIndex: "108" }}
                    className="fixed bg-[#f9f7f7] grid grid-cols-5  grid-flow-row w-fit mt-0 p-2 gap-4 items-center min-h-32 h-auto"
                  >
                    {choices[index]?.suboptions?.map((ele, langIndex) => (
                      <div key={langIndex}>
                        <b className="text-black hover:text-blue-500">{ele}</b>
                      </div>
                    ))}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
        <section className="w-3/12 flex justify-between">
          <div>
            <span
              className="flex flex-col cursor-pointer"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <span className="flex mt-1 gap-4">
                <Search />
                <b>Languages</b>
              </span>
              {hover && (
                <span
                  style={{ zIndex: "103" }}
                  className="fixed bg-[#f9f7f7] w-fit mt-6 p-5"
                >
                  {languages.map((ele, index) => (
                    <div
                      key={index}
                      className="hover:bg-[#4974ff] hover:text-white"
                    >
                      <b>{ele}</b>
                    </div>
                  ))}
                </span>
              )}
            </span>
          </div>
          <Button className="hover:bg-[#ff2f2f] hover:text-white">Login</Button>
        </section>
      </div>

      <div
        style={{ borderBottom: "1px solid grey", zIndex: "101" }}
        className="flex lg:hidden md:hidden h-12 justify-between items-center"
      >
        <img src="logo.png" alt="logo" width={70} height={35} />
        <section>
          <div onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
          {menuOpen && (
            <div
              style={{ zIndex: "200", height: "90vh" }}
              className="fixed w-full bg-white h-90vh   left-0 "
            >
              <ul className="flex flex-col gap-7">
                {[
                  "What we do",
                  "Insights",
                  "Freemium",
                  "Pricing",
                  "Careers",
                ].map((item, index) => (
                  <li
                    key={index}
                    id={`h${index + 1}`}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredId(`h${index + 1}`)}
                    onMouseLeave={() => setHoveredId("")}
                    onClick={() => {
                      const targetElement = document.getElementById(
                        `screen${index + 1}`
                      );
                      if (targetElement) {
                        setscrollstarted(true);
                        targetElement.scrollIntoView({ behavior: "smooth" });
                        setMenuOpen(false);
                      }
                    }}
                  >
                    <p className="flex items-center justify-between">
                      {item}
                      {hoveredId === `h${index + 1}` ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </p>
                    {hoveredId === `h${index + 1}` && (
                      <div
                        className="bg-[#f9f7f7] p-2 mt-2"
                        style={{ zIndex: "108" }}
                      >
                        {choices[index]?.suboptions?.map((ele, langIndex) => (
                          <div
                            key={langIndex}
                            className="hover:bg-[#4974ff] hover:text-white p-2"
                          >
                            <b>{ele}</b>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Header;

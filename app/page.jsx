"use client";
import Header from "./components/header/header";
import Scree1 from "./components/screel1/page";
import Screen2 from "./components/screen2/page";
import Screen3 from "./components/screen3/page";
import Screen4 from "./components/pricing/page";
import Screen5 from "./components/careers/page";
import Page6 from "./components/faqs/page";
import Screen4d from "./components/pricing/page2";
import Footer from "./components/footer/footer";
import { useState } from "react";

export default function Home() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <main
      style={menuOpened ? { overflow: "hidden" } : {}}
      className="max-h-screen p-0 m-0"
    >
      <Header setMenuOpenedd={setMenuOpened} />
      <div style={{ minHeight: "94vh" }}>
        <div className="w-full h-full flex flex-col overflow-x-hidden justify-around">
          <Scree1 />
          <Screen2 />
          <Screen3 />
          {/*mobiles*/}
          <div className="block lg:hidden md:hidden">
            <Screen4d />
          </div>
          {/*larger screens*/}
          <div className="hidden lg:block mg:block">
            <Screen4 />
          </div>

          <Screen5 />

          <Page6 />
        </div>
      </div>
      <Footer />
    </main>
  );
}

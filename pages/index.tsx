import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Experiences from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";

export default function Index() {

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className="container">
        <main>
            <Header windowSize={windowWidth} />
            <About />
            <Experiences />
            <Skills windowSize={windowWidth} />
            <Education windowSize={windowWidth} />
        </main>
    </div>
  )
}

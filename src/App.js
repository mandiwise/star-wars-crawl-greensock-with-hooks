import gsap from "gsap";
import React, { useEffect, useRef } from "react";

import "./App.css";
import logo from "./logo.svg";

function App() {
  const intro = useRef();

  useEffect(() => {
    gsap.to(intro.current, { opacity: 1, delay: 1, duration: 4.5 });
    gsap.to(intro.current, { opacity: 0, delay: 5.5, duration: 1.5 });
  }, []);

  return (
    <div className="container">
      <section className="intro" ref={intro}>
        <p>
          A long time ago, in a galaxy far,
          <br /> far away....
        </p>
      </section>
    </div>
  );
}

export default App;

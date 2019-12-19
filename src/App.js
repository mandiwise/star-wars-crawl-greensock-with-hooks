import gsap from "gsap";
import React, { useEffect, useRef } from "react";

import "./App.css";
import logo from "./logo.svg";

function App() {
  const intro = useRef();
  const title = useRef();

  useEffect(() => {
    let tl = new gsap.timeline();

    tl.to(intro.current, {
      opacity: 1,
      delay: 1,
      duration: 4.5
    })
      .to(intro.current, { opacity: 0, duration: 1.5 })
      .set(title.current, { opacity: 1, scale: 2.75 })
      .to(title.current, { scale: 0.05, ease: "power2", duration: 8 })
      .to(title.current, { opacity: 0, duration: 1.5 }, "-=1.5");
  }, []);

  return (
    <div className="container">
      <section className="intro" ref={intro}>
        <p>
          A long time ago, in a galaxy far,
          <br /> far away....
        </p>
      </section>
      <section className="title" ref={title}>
        <img src={logo} alt="Code Wars title" />
      </section>
    </div>
  );
}

export default App;

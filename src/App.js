import gsap from "gsap";
import React, { useEffect, useRef } from "react";

import "./App.css";
import logo from "./logo.svg";

function App() {
  const intro = useRef();
  const title = useRef();
  const content = useRef();

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
      .to(title.current, { opacity: 0, duration: 1.5 }, "-=1.5")
      .to(content.current, { top: "-170%", duration: 200 });
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
      <section className="crawl">
        <div className="content" ref={content}>
          <h1 className="episode-number">Episode 7</h1>
          <h2 className="episode-title">THE APP AWAKENS</h2>
          <p>
            The Development Team Lead has vanished. In her absence, the sinister
            FUNCTIONAL BUG has risen from the ashes of the CI Tool and will not
            rest until the last developer has been destroyed.
          </p>
          <p>
            With the support of the QA TEAM, the Software Developer leads a
            brave RESISTANCE. He is desperate to find his Lead and gain her help
            in restoring peace and justice to the repository.
          </p>
          <p>
            The Developer has sent his most daring editor theme on a secret
            mission to the production branch, where an old ally has discovered a
            clue to the Lead’s whereabouts....
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;

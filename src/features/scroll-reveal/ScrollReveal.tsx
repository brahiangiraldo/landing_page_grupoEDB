import React, { useEffect } from "react";
import './scroll-Reveal.css';

const ScrollReveal = () => {
  useEffect(() => {
		const boxes = document.querySelectorAll(".scroll-box");
	
		const revealBoxes = () => {
		  boxes.forEach((box) => {
			const boxTop = box.getBoundingClientRect().top;
			const triggerBottom = window.innerHeight * 0.8;
			if (boxTop < triggerBottom) {
			  box.classList.add("show");
			} else {
			  box.classList.remove("show");
			}
		  });
		};
	
		window.addEventListener("scroll", revealBoxes);
		revealBoxes();
	
		return () => {
		  window.removeEventListener("scroll", revealBoxes);
		};
	  }, []);

  return (
    <section className="scroll">
      <h1>Animate on Scroll - no plugin</h1>
      <br />
      
	  <div className="scroll-box">
        <h2>HTML</h2>
      </div>

      <div className="scroll-box">
        <h2>CSS</h2>
      </div>
      <div className="scroll-box">
        <h2>JAVASCRIPT</h2>
      </div>
      <div className="scroll-box">
        <h2>JQUERY</h2>
      </div>
      <div className="scroll-box">
        <h2>RESPONSIVE</h2>
      </div>
      <div className="scroll-box">
        <h2>SEO OPTIMIZED</h2>
      </div>
      <div className="scroll-box">
        <h2>GRID</h2>
      </div>
      <div className="scroll-box">
        <h2>WORDPRESS</h2>
      </div>
      <div className="scroll-box">
        <h2>SUPPORT</h2>
      </div>
      <div className="scroll-box">
        <h2>DEVELOPMENT</h2>
      </div>
      <div className="scroll-box">
        <h2>MOBILE SUPPORT</h2>
      </div>
      <div className="scroll-box">
        <h2>CONTENT</h2>
      </div>
    </section>
  );
};

export default ScrollReveal;




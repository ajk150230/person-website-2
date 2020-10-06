import React, { useState, useEffect, useRef } from "react"
import MyLogo from '../../Images/alexlogov1.png'
import {TweenMax, Power3} from 'gsap'
import "./Menu.scss";

function Menu() {
    let container = useRef(null);
    let title = useRef(null);
    let title1 = useRef(null);
    let title2 = useRef(null);
    let title3 = useRef(null);
    let logo = useRef(null);

    useEffect(() => {
        TweenMax.to(container, 1, {});
        TweenMax.staggerFrom(
          [title, title1, title2, title3, logo],
          0.2,
          { opacity: 0, x: 40, ease: Power3.easeIn, delay: 1.2 },
          0.3
        );
      }, []);

  return (
    <div class='menu-container' ref={(el)=>(container = el)}>
      <div class="menu-title" ref={(el)=>(title = el)}>Alex Kim</div>
      <div class="menu-title" ref={(el)=>(title1 = el)}>/</div>
      <div class="menu-title" ref={(el)=>(title2 = el)}>Full Stack</div>
      <div class="menu-title" ref={(el)=>(title3 = el)}> Developer</div>
      <div class="logo-container">
				<div class="logo" ref={(el)=>(logo = el)} style={{ backgroundImage: `url(${MyLogo})` }}></div>
			</div>
    </div>
  );
}

export default Menu;

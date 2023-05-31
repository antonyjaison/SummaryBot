"use client";

import InputBox from "@components/InputBox/InputBox";
import home from "./Home.module.scss";
import Summary from "@components/Summary/Summary";
import SideBar from "@components/Sidebar/SideBar";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [summary, setSummary] = useState(false)

  const sidebarAnimation = useSpring({
    transform: animate ? "translateX(-5%)" : "translateX(-110%)",
  });
  const bgDim = useSpring({
    opacity: animate ? 1 : 0,
  });

  const sidebar = <SideBar />;

  return (
    <section className={`${home.home_wrapper} container-fluid`}>
      <div className={`row`}>
        <div className={`col-lg-2 ${home.sidebar_section}`}>{sidebar}</div>
        <div className={`col-lg-10 ${home.input_section}`}>
          <div className={home.menubar}>
            <div onClick={() => setAnimate((prev) => !prev)}>
              <MenuIcon className={home.menu_icon} />
            </div>
            <div></div>
          </div>

          <div className={home.input_body}>
            <h1>
              Summarize Articles with <br />
              <span>OpenAI GPT-4</span>
            </h1>
            <p>
              Transforming Websites into Bite-Sized Insights. Dive into the
              Essence of Any Webpage with Effortless Efficiency. Simplify
              Research, Stay Informed, and Save Time.
            </p>
            <InputBox setSummary={setSummary}/>
          </div>

          {summary ? <Summary /> : <div/>}
        </div>
      </div>

      <animated.div style={sidebarAnimation} className={home.mobile_sidebar}>
        {sidebar}
      </animated.div>
      {animate && (
        <animated.div style={bgDim} className={home.dim}>
          <animated.div
            style={bgDim}
            className={home.close_icon_section}
            onClick={() => setAnimate((prev) => !prev)}
          >
            <CloseIcon className={home.menu_icon} />
          </animated.div>
        </animated.div>
      )}
    </section>
  );
};

export default Home;

"use client";

import InputForm from "@components/InputForm";
import home from "@styles/home.module.css";

const Home = () => {
  return (
    <main className={home.home}>
      <div className={home.sidebar}></div>
      <div className={home.content}>
        <h1>
          Summarize Articles with <br /> <span>OpenAI GPT-4</span>{" "}
        </h1>
        <p>
          Transforming Websites into Bite-Sized Insights. Dive into the Essence
          of Any Webpage with Effortless Efficiency. Simplify Research, Stay
          Informed, and Save Time.
        </p>
        <InputForm />
      </div>
    </main>
  );
};

export default Home;

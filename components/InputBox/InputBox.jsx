"use client";

import inputbox from "./InputBox.module.scss";
import { useState } from "react";
import { useSession } from "next-auth/react";

// icons
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import SendIcon from "@mui/icons-material/Send";

const InputBox = ({ setSummary, setLoadingSummary,loadingSummary }) => {
  const { data: session } = useSession();
  const [inputUrl, setInputUrl] = useState("");
  const [error, setError] = useState("");
  const focusInput = () => {};

  const submitForm = async (e) => {
    e.preventDefault();
    setLoadingSummary(true);
    setSummary("")

    if (!session?.user) {
      alert("You need to Signup or Login to use this BOT");
      setLoadingSummary(false);
      return;
    }

    if (!inputUrl) {
      setError("Please enter a article URL");
      setLoadingSummary(false);
      return;
    }
    // if (!inputUrl.startsWith("http://") && !inputUrl.startsWith("https://")) {
    //   setError("Enter in the for `http://example.com/`");
    //   setLoadingSummary(false);
    //   return;
    // }

    const res = await fetch(`http://localhost:3000/api/summary/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: inputUrl,
      }),
    });
    const json = await res.json();

    if (json.status) {
      setError("");
      setSummary(json.summary.summary);
    }
    setLoadingSummary(false);
  };
  return (
    <div
      className={inputbox.form_wrapper}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <form className={inputbox.form}>
        <div>
          <InsertLinkIcon className={inputbox.icon} />
          <input
            onChange={(e) => setInputUrl(e.target.value)}
            value={inputUrl}
            onFocus={() => focusInput()}
            type="text"
            placeholder="Paste the article url"
          />
        </div>
        <button disabled={loadingSummary} type="submit" onClick={submitForm}>
          <SendIcon className={inputbox.icon} />
        </button>
      </form>
      <p
        style={{
          color: "#63000f",
          backgroundColor: "rgba(0,0,0,0.2)",
          margin: "0px",
          borderRadius: "5px",
          textAlign: "center",
        }}
        className={inputbox.error}
      >
        {error}
      </p>
    </div>
  );
};

export default InputBox;

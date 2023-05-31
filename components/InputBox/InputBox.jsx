"use client";

import inputbox from "./InputBox.module.scss";
import { useState } from "react";

// icons
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import SendIcon from "@mui/icons-material/Send";

const InputBox = ({ setSummary }) => {
  const [inputUrl, setInputUrl] = useState("");
  const focusInput = () => {};
  const submitForm = (e) => {
    e.preventDefault();
    setSummary((prev) => !prev);
    setInputUrl("")
  };
  return (
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
      <button type="submit" onClick={submitForm}>
        <SendIcon className={inputbox.icon} />
      </button>
    </form>
  );
};

export default InputBox;

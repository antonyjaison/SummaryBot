"use client";

import inputbox from "./InputBox.module.scss";

// icons
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import SendIcon from "@mui/icons-material/Send";

const InputBox = () => {
  const focusInput = () => {
    
  };
  const submitForm = (e) => {
    e.preventDefault()
    console.log("ksandkja")
  }
  return (
    <form className={inputbox.form}>
      <div>
        <InsertLinkIcon className={inputbox.icon} />
        <input
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

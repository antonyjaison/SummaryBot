"use client";

import summary_styles from "./Summary.module.scss";

// icon
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// loader
import ClipLoader from "react-spinners/ClipLoader";
import RotateLoader from "react-spinners/RotateLoader";
import BeatLoader from "react-spinners/BeatLoader";

const Summary = ({ summary, loadingSummary }) => {
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(summary);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };
  return (
    <section className={summary_styles.summary_section}>
      {summary ? (
        <>
          <h2>Article Summary</h2>
          <div className={summary_styles.summary_content}>
            <p>{summary}</p>
            <div
              onClick={handleCopyToClipboard}
              className={summary_styles.copy_icon_section}
            >
              <ContentCopyIcon className={summary_styles.copy_icon} />
            </div>
          </div>
        </>
      ) : (
        <>
          {loadingSummary && (
            <div className={summary_styles.loading}>
              <p>
                Bot is making the article summary, <br /> be patient :)
              </p>
              <BeatLoader
                className={summary_styles.loading_spinner}
                color="#fff"
                size={10}
              />
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Summary;

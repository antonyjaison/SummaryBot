"use client";

import button from "./PreviousSummaryButton.module.scss";
import { useState } from "react";

// icons
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";

const PreviousSummaryButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleDelete = () => {};
  const handleEdit = () => {};

  return (
    <button
      className={`${button.button_wrapper} ${!isActive && button.active}`}
    >
      <div>
        <TelegramIcon className={button.icon} />
        <input disabled value="New summary" type="text" />
      </div>
      <div>
        {!isActive && (
          <>
            <div onClick={() => handleEdit}>
              <EditOutlinedIcon className={button.icon} />
            </div>
            <div onClick={() => handleDelete}>
              <DeleteOutlineOutlinedIcon className={button.icon} />
            </div>
          </>
        )}
      </div>
    </button>
  );
};

export default PreviousSummaryButton;

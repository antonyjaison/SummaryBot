"use client";

import summary from "./Summary.module.scss";

// icon
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Summary = () => {
  const content =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis architecto nemo ullam obcaecati ad fugiat perspiciatis praesentium molestias nam dignissimos neque porro id, dolor suscipit autem optio facilis cupiditate voluptatem ab sit consectetur totam facere non placeat. Vitae saepe fugiat explicabo optio esse eos, maxime nobis dicta, a dolor error similique delectus minus possimus aliquid iusto sit. Voluptates incidunt nulla ex rem deleniti aperiam, aut dolorum harum tempore fugiat alias possimus facilis culpa eius odit ducimus, eaque, minus minima obcaecati amet odio adipisci dolores libero ratione? Ad voluptatem neque corrupti aut iste error temporibus qui quo, ducimus perferendis molestias rem doloremque quas cupiditate eos nulla tempore consequuntur pariatur minus dignissimos. Incidunt obcaecati, hic tempora, voluptates modi rerum laboriosam saepe quos magnam dolorem tempore at, nulla repellendus. Id voluptatum quo velit. Hic omnis odio aliquid atque eaque, corrupti in iste, minima magni eligendi accusantium quo! Ut, quaerat ab? Beatae, quae sed?";
  return (
    <section className={summary.summary_section}>
      <h2>Article Summary</h2>
      <div className={summary.summary_content}>
        <p>{content}</p>
        <div className={summary.copy_icon_section}>
          <ContentCopyIcon className={summary.copy_icon}/>
        </div>
      </div>
    </section>
  );
};

export default Summary;

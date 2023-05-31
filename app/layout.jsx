'use client'
import "@styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import { SessionProvider } from "next-auth/react";
import Provider from "@components/Provider";

export const metadata = {
  title: "SummaryBot",
  description: "A bot that summarizes articles.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

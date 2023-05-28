import global from "@styles/global.scss";

export const metadata = {
  title: "SummaryBot",
  description: "Transforming Websites into Bite-Sized Insights",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="app">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;

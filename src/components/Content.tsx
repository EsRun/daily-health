import React from "react";

interface ContentProps {
  children?: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return (
    <main
      style={{
        padding: "0 20px",
        display: "flex",
        flex: 1,
        backgroundColor: "#fff",
        overflowY: "auto",
      }}
    >
      {children}
    </main>
  );
};

export default Content;

import React from "react";

interface ContentProps {
  children?: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <main
      style={{
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

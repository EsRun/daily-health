import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Header />
      <Content>{children}</Content>
    </div>
  );
};

export default Main;

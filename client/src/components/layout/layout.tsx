import React from "react";
import Navbar from "./Navbar";

interface Props {}

const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;

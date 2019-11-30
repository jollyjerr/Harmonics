import React from "react";
import { ToolbarProps } from "../assets/types";

const Toolbar = ({toggleKeyMenu, musicalKey}: ToolbarProps) => {
  return (
    <nav className="main-tool">
      <button onClick={() => toggleKeyMenu()}>Change Key</button>
      <div className="currentKey" >
        <h1>{musicalKey.name}</h1>
        <h2>{musicalKey.mode}</h2>
      </div>
    </nav>
  );
};

export default Toolbar;

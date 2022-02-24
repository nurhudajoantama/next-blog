import React from "react";
import { Global } from "@emotion/react";

export default function Fonts() {
  return (
    <Global
      styles={`
      /* Lato */
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap');
      </style>
      `}
    />
  );
}

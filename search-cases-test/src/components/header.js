import header from "../assets/images/header.png";
import React from "react";

export default function Header() {
  return (
    <section className="w-full mb-1">
      <div className="w-full">
        <img className="w-full" src={header} alt="header" />
      </div>
    </section>
  );
}

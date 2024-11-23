import Header from "./header";
import Cases from "./cases";
import React from "react";

export default function Main() {
  return (
    <div className="font-main">
      <div className="">
        <Header />
        <h3 className="my-5 text-3xl font-bold leading-5 text-indigo-900 text-center">
          חיפוש תיקים
        </h3>
        <Cases />
      </div>
    </div>
  );
}

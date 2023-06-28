import React from "react";
import { Link, navigate } from "@reach/router";

export default function Header() {
  return (
    <>
      <div className="flex sticky top-0 left-0 justify-between h-20 bg-nude-200">
        <div>
          <h1 className="text-pink font-default italic m-4 text-5xl">
            Rise Up
          </h1>
        </div>
        <div className="text-white flex justify-center mt-7 mr-6  font-default italic text-xl"></div>
      </div>
    </>
  );
}

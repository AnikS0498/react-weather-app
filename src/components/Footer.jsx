import React from "react";
import { GitHub, Linkedin } from "react-feather";

export default function Footer() {
  return (
    <div className="flex justify-center text-sm text-gray-400 font-mono p-4">
      <div className="flex justify-between fixed space-x-10 bottom-10">
        <a
          href="https://www.linkedin.com/in/aniks0498/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="cursor-pointer" />
        </a>
        <a href="https://github.com/AnikS0498" target="_blank" rel="noreferrer">
          <GitHub className="cursor-pointer" />
        </a>
      </div>
      <div className=" fixed bottom-2">
        <footer>&copy; Made by Anikesh Sinha</footer>
      </div>
    </div>
  );
}

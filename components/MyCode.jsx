import React, { useState } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/night-owl.css";

const MyCode = ({ code, language }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 1500);
  };

  return (
    <div className="code-snippet bg-slate-800 my-6">
      <div className="flex dark:border-t dark:border-l dark:border-r dark:rounded-t dark:border-gray-700 text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans">
        <span>{language}</span>
        {copySuccess ? (
          <button className="flex ml-auto gap-2" onClick={handleCopy}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="mt-[3px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
            </svg>{" "}
            Copied!
          </button>
        ) : (
          <button className="flex ml-auto gap-2" onClick={handleCopy}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="mt-[3px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path>
            </svg>{" "}
            Copy code
          </button>
        )}
      </div>
      <Highlight className={`language-${language}`}>{code}</Highlight>
    </div>
  );
};

export default MyCode;

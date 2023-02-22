import React, { useState } from "react";
import Highlight from "react-highlight";
import { FaCopy, FaCheck } from "react-icons/fa";

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
    <div className="code-snippet border-gray-800 bg-slate-800 rounded-md my-6">
      <div className="flex text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans">
        <span>jsx</span>
        {copySuccess ? (
          <button className="flex ml-auto gap-2" onClick={handleCopy}>
            <FaCheck className="mt-[3px]" /> Copied!
          </button>
        ) : (
          <button className="flex ml-auto gap-2" onClick={handleCopy}>
            <FaCopy className="mt-[3px]" /> Copy code
          </button>
        )}
      </div>
      <Highlight className={language}>{code}</Highlight>
    </div>
  );
};

export default MyCode;

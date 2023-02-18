import Image from "next/image";
import React from "react";
import Link from "next/link";

import Highlight from "react-highlight";
import "highlight.js/styles/night-owl.css";

const CodeBlock = ({ code, language }) => {
  return <Highlight className={language}>{code}</Highlight>;
};

import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Note() {
  return (
    <div className="">
      <h4>Code Title here</h4>
      <CodeBlock
        code={`import React from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";

const CodeBlock = ({ code, language }) => (
  <Highlight className={language}>{code}</Highlight>
);

export default CodeBlock;
`}
        language={"language-javascript"}
      />
      <div className="my-4"></div>
    </div>
  );
}

export default Note;

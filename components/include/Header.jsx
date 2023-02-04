import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { AiOutlineGlobal, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    console.log(nav);
    setNav(!nav);
    console.log(nav);
  };

  return (
    <nav className="container mx-auto">
      <h4>Logo</h4>
    </nav>
  );
}

export default Header;

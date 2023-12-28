"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/logo.png";

const Navbar = () => {
  return (
    <header className="dark text-foreground bg-background">
      <nav className="max-w-[75%] mx-auto py-4 flex justify-center">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={48} height={48} />
        </Link>
        {/* <Image
          src={logo}
          alt="logo"
          width={48}
          height={48}
          className="[transform:rotateY(180deg)]"
        /> */}
      </nav>
    </header>
  );
};

export default Navbar;

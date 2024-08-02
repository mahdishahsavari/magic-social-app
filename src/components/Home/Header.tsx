"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const { isSignedIn } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`pt-4 transition-all duration-300 ease-in-out ${
        isSticky
          ? "bg-black dark:bg-gray-900 shadow-md sticky top-0 z-10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block" href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="rounded-full hover:scale-110 hover:transition-all hover:border hover:border-teal-500"
              />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4">
            {isSignedIn ? (
              <div className="scale-125 hover:scale-150">
                <UserButton />
              </div>
            ) : (
              <div className="sm:flex sm:gap-4">
                <Link
                  className="flex items-center justify-center rounded-full px-8 py-3 text-base font-medium text-white transition hover:scale-110 hover:shadow-xl hover:text-teal-500 focus:outline-none focus:ring-transparent"
                  href="/sign-in"
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="flex items-center justify-center px-8 rounded-full bg-teal-500 text-base font-medium text-neutral-800 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-transparent active:opacity-60"
                    href="/sign-up"
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

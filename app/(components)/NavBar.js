"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div className="w-full">
        <div className="mx-40 my-6 grid grid-cols-1 sm:grid-cols-3 sm:gap-x-3 md:grid-cols-3 md:gap-x-10 items-center gap-y-4  rounded-2xl bg-gray-50/5 border-1 border-zinc-900">
          {/* Logo */}
          <div className="flex justify-center md:justify-start px-4 py-2">
            <Link href="/">
              <Image
                src="/image-removebg-preview.png"
                alt="logo"
                height={50}
                width={50}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center gap-x-6 text-white text-sm font-medium">
            <Link href="/invest" className="hover:underline">
              Invest
            </Link>
            <Link href="/raise" className="hover:underline">
              Raise
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </div>

          {/* Button */}
          <div className="flex justify-center md:justify-end px-4">
            <Link href="/about">
              <button className="px-6 py-3 rounded-2xl border-1 border-zinc-900 bg-gray-50/10 hover:bg-gray-50/20 text-white">
                Get Started {">"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

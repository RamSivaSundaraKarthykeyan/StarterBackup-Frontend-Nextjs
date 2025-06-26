"use client";
import React from "react";
import Image from "next/image";
import Form from "next/form";

const EmailCard = (top) => {
  const show = () => {
    console.log("submited");
  };
  return (
    <div className="relative z-10">
      <div className="w-170 h-50 relative ">
        <Image
          className="relative z-0 rounded-2xl"
          src="/fbgr.png"
          alt=""
          width={1520}
          height={600}
        ></Image>
        <div className="relative z-10 bottom-60">
          <div>
            <p className="font-bold text-3xl flex justify-center items-center pb-5">
              Why Not Join Them?
            </p>
            <div className="text-sm text-webgray">
              <p className="flex justify-center items-center">
                We have over a million members helping to drive growth &
              </p>
              <p className="flex justify-center items-center">
                innovation for business across the continent
              </p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-2">
            <Form onSubmit={show} className="flex items-center space-x-2">
              <input
                type="email"
                name="email"
                required
                className="border border-zinc-900 bg-black text-sm placeholder-white pl-4 py-2 w-80 rounded-lg"
                placeholder="Your email address..."
              />
              <button
                type="submit"
                className="flex items-center bg-weborange text-white px-4 py-2 rounded-lg"
              >
                Get Started
                <Image
                  src="/dra.png"
                  alt="→"
                  width={15}
                  height={5}
                  className="ml-2"
                />
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;

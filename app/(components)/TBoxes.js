import React from "react";
import Image from "next/image";
import TubeLight from "./TubeLight";
import LightGlow from "./LightGlow";

const TBoxes = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="mt-4 w-100 rounded-2xl bg-gray-50/6 border-zinc-900 border-1">
          <div className="ml-4 mb-14 relative flex flex-col">
            <div className="ml-1.5">
              <TubeLight />
            </div>
            <div className="absolute mr-4 bottom-30">
              <LightGlow />
            </div>

            <Image
              src="/eye.png"
              alt=""
              width={30}
              height={30}
              className="mt-5 ml-1.5"
            />
          </div>
          <div className="ml-4 mb-5">
            <p className="font-bold text-2xl">Transparent Fees On Everything</p>
            <p className="mt-2 text-webgray">
              A simple, straightforward investment process
              <br /> with clear & easy to understand pricing.
            </p>
          </div>
        </div>
        {/*2nd*/}
        <div>
          <div className="mt-4 w-100 rounded-2xl bg-gray-50/6 border-zinc-900 border-1">
            <div className="ml-4 mb-14 relative flex flex-col">
              <div className="ml-1.5">
                <TubeLight />
              </div>
              <div className="absolute mr-45 bottom-30">
                <LightGlow />
              </div>

              <Image
                src="/bank.png"
                alt=""
                width={30}
                height={30}
                className="mt-5 ml-1"
              />
            </div>
            <div className="ml-4 mb-5">
              <p className="font-bold text-2xl">Take Advantage Of Tax Relief</p>
              <p className="mt-2 text-webgray">
                Claim up to 30% of your investment value
                <br /> back on any qualifing investments.
              </p>
            </div>
          </div>
        </div>
        {/*3rd*/}
        <div>
          <div className="mt-4 w-100 rounded-2xl bg-gray-50/6 border-zinc-900 border-1">
            <div className="ml-4 mb-14 relative flex flex-col">
              <div className="ml-1.5">
                <TubeLight />
              </div>
              <div className="absolute mr-45 bottom-30">
                <LightGlow />
              </div>

              <Image
                src="/moneybag.png"
                alt=""
                width={35}
                height={35}
                className="mt-5 ml-1"
              />
            </div>
            <div className="ml-4 mb-5">
              <p className="font-bold text-2xl">
                Fully Regulated, Safe & Secure
              </p>
              <p className="mt-2 text-webgray">
                This platform is authorized and regulated in
                <br /> the UK and Europe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TBoxes;

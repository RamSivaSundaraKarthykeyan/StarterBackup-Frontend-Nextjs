import React from "react";
import Image from "next/image";

const StatsPanel = () => {
  return (
    <div className="mt-50">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2 bg-gray-50/5 px-4 md:px-5 py-2 rounded-lg border border-zinc-900 mb-6 w-[320px] mx-auto">
        <Image
          className=""
          src="/ufo.png"
          width={25}
          height={25}
          alt=""
        ></Image>
        <p className="text-center text-sm md:text-base">
          Impressive Clients, Lasting Impact
        </p>
      </div>
      <div>
        <p className="flex justify-center items-center font-bold text-3xl">
          Since 2011, We&apos;ve
        </p>
        <p className="flex justify-center items-center font-bold text-3xl">
          Kept <span className="text-weborange">Impressive Company</span>
        </p>
      </div>
      <div className="mt-2">
        <p className="flex justify-center items-center text-sm text-webgray">
          In that time we&apos;ve helped raise over £1.4 billion for over 1,300
          mission-driven
        </p>
        <p className="flex justify-center items-center text-sm text-webgray">
          businesses and built up a community of over 1.7 million members.
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-y-2.5  lg:w-210 md:w-105">
          <div className="w-50 h-35 bg-gray-50/5 border-1 border-zinc-900 rounded-2xl">
            <div className="pl-4 pt-4">
              <div>
                <Image src="/dot.png" alt="" width={20} height={20}></Image>
              </div>
              <div>
                <p className="pt-4 text-sm text-webgray">
                  New Investors Last Month
                </p>
                <p className="pt-3 text-3xl font-bold">3,745</p>
              </div>
            </div>
          </div>
          <div className="w-50 h-35 bg-gray-50/5 border-1 border-zinc-900 rounded-2xl">
            <div className="pl-4 pt-4">
              <div>
                <Image src="/dot.png" alt="" width={20} height={20}></Image>
              </div>
              <div>
                <p className="pt-4 text-[13px] text-webgray">
                  New Investments last Month
                </p>
                <p className="pt-3 text-3xl font-bold">11,424</p>
              </div>
            </div>
          </div>
          <div className="w-50 h-35 bg-gray-50/5 border-1 border-zinc-900 rounded-2xl">
            <div className="pl-4 pt-4">
              <div>
                <Image src="/dot.png" alt="" width={20} height={20}></Image>
              </div>
              <div>
                <p className="pt-4 text-sm text-webgray">
                  Total Invested Last Month
                </p>
                <p className="pt-3 text-3xl font-bold">£5.3m</p>
              </div>
            </div>
          </div>
          <div className="w-50 h-35 bg-gray-50/5 border-1 border-zinc-900 rounded-2xl">
            <div className="pl-4 pt-4">
              <div>
                <Image src="/dot.png" alt="" width={20} height={20}></Image>
              </div>
              <div>
                <p className="pt-4 text-sm text-webgray">
                  Site Visitors Last Month
                </p>
                <p className="pt-3 text-3xl font-bold">235k</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;

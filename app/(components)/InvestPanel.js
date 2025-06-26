import React from "react";
import Image from "next/image";
import OrangeTag from "./OrangeTag";
import Link from "next/link";

const InvestPanel = () => {
  return (
    <div className="justify-center items-center flex">
      <div className="mt-40 mx-40 md:mt-40">
        <div className=" flex flex-wrap items-center justify-center gap-2 md:gap-2 bg-gray-50/5 px-4 md:px-5 py-2 rounded-lg border border-zinc-900 mb-8 lg:w-[220px] md:w-[220px] sm:w-[220px] mx-auto">
          <Image
            className=""
            src="/money.png"
            width={20}
            height={20}
            alt=""
          ></Image>
          <p className="text-center text-sm md:text-sm">Make Your Money Move</p>
        </div>
        <div className="flex gap-150">
          <p className="text-4xl font-bold pb-9">
            Start <span className="text-weborange">Investing</span>
          </p>
          <div className="flex gap-3">
            <div className="border-1 border-zinc-900 rounded-2xl h-15 w-15">
              <Image
                src="/wla.png"
                alt=""
                width={25}
                height={25}
                className="relative top-5 left-4"
              ></Image>
            </div>
            <div className="border-2 border-weborange/30 bg-weborange/5 rounded-2xl h-15 w-15">
              <Image
                src="/ra.png"
                alt=""
                width={18}
                height={18}
                className="relative top-5 left-5"
              ></Image>
            </div>
          </div>
        </div>

        <div className="w-250 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-0">
          <div>
            <div className="border-zinc-900 border-1 w-80 rounded-2xl">
              <Image
                className="rounded-tl-2xl rounded-tr-2xl"
                src="/haatch.png"
                alt=""
                width={320}
                height={300}
              ></Image>
              <div className="flex gap-16 pl-4 pt-4">
                <div className="flex gap-2 ">
                  <OrangeTag content={"SEIS Fund"} />
                  <OrangeTag content={"SEIS"} />
                </div>
                <div className="text-[11px] flex gap-2 bg-zinc-900 pl-2 py-[3px] pr-2 rounded-sm">
                  <Image
                    src="/uk.png"
                    alt=""
                    width={14}
                    height={10}
                    className="inline-block object-contain "
                  ></Image>
                  <p className="pt-[3px]">United Kingdom</p>
                </div>
              </div>

              <div className="pt-4 pl-4">
                <p className="font-bold py-1">Haatch SEIS Fund</p>
                <p className="text-webgray text-sm pb-2">
                  SEIS Fund offers access to 9-15 business-
                  <br />
                  to-business software startups from Pre-Seed
                </p>
              </div>
            </div>
            <div className="flex mt-1 gap-4 border-1 rounded-2xl border-zinc-900 w-80">
              <Image
                src="/haatchlogo.png"
                alt=""
                width={70}
                height={20}
              ></Image>
              <div>
                <p className="pt-2 pb-1">$1,483,750 Raised</p>
                <div className="align-middle">
                  <div className="bg-weborange relative rounded-full z-20 w-30 h-1.5"></div>
                  <div class="relative bottom-1 w-55 h-0.5 z-10 bg-zinc-900 rounded-full dark:bg-zinc-900"></div>
                </div>

                <div className="text-webgray flex gap-12 pt-2 pb-1 text-[14px]">
                  <p>342 investors</p>
                  <p>144% of target</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border-zinc-900 border-1 w-80 rounded-2xl">
              <Image
                className="rounded-tl-2xl rounded-tr-2xl"
                src="/hac.png"
                alt=""
                width={320}
                height={300}
              ></Image>
              <div className="flex gap-16 pl-4 pt-4">
                <div className="flex gap-2 ">
                  <OrangeTag content={"IR-PME"} />
                  <OrangeTag content={"EIS"} />
                </div>
                <div className="text-[11px] flex gap-2 bg-zinc-900 pl-2 py-[3px] pr-2 rounded-sm">
                  <Image
                    src="/uk.png"
                    alt=""
                    width={14}
                    height={10}
                    className="inline-block object-contain "
                  ></Image>
                  <p className="pt-[3px]">United Kingdom</p>
                </div>
              </div>

              <div className="pt-4 pl-4">
                <p className="font-bold py-1">Hybrid Air Vehicles</p>
                <p className="text-webgray text-sm pb-2">
                  On a mission to revolutionize the aerospace
                  <br />
                  industry, Airlander is the world.
                </p>
              </div>
            </div>
            <div className="flex mt-1 gap-4 border-1 rounded-2xl border-zinc-900 w-80">
              <Image
                src="/hrclogo.png"
                alt=""
                width={70}
                height={20}
                className="rounded-2xl"
              ></Image>
              <div>
                <p className="pt-2 pb-1">$2,753,234 Raised</p>
                <div className="align-middle">
                  <div className="bg-weborange relative rounded-full z-20 w-30 h-1.5"></div>
                  <div class="relative bottom-1 w-55 h-0.5 z-10 bg-zinc-900 rounded-full dark:bg-zinc-900"></div>
                </div>

                <div className="text-webgray flex gap-12 pt-2 pb-1 text-[14px]">
                  <p>149 Investors</p>
                  <p>182% of target</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border-zinc-900 border-1 w-80 rounded-2xl">
              <Image
                className="rounded-tl-2xl rounded-tr-2xl"
                src="/avb.png"
                alt=""
                width={320}
                height={300}
              ></Image>
              <div className="flex gap-16 pl-4 pt-4">
                <div className="flex gap-2 ">
                  <OrangeTag content={"Equity"} />
                  <OrangeTag content={"EIS"} />
                </div>
                <div className="text-[11px] flex gap-2 bg-zinc-900 pl-2 py-[3px] pr-2 rounded-sm">
                  <Image
                    src="/uk.png"
                    alt=""
                    width={14}
                    height={10}
                    className="inline-block object-contain "
                  ></Image>
                  <p className="pt-[3px]">United Kingdom</p>
                </div>
              </div>

              <div className="pt-4 pl-4">
                <p className="font-bold py-1">AI Venture Builder</p>
                <p className="text-webgray text-sm pb-2">
                  AI Venture Builder is on a mission of innovation
                  <br />
                  and democracy in AI.
                </p>
              </div>
            </div>
            <div className="flex mt-1 gap-4 border-1 rounded-2xl border-zinc-900 w-80">
              <Image
                src="/avblogo.png"
                alt=""
                width={70}
                height={20}
                className="rounded-2xl"
              ></Image>
              <div>
                <p className="pt-2 pb-1">$2,426,123 Raised</p>
                <div className="align-middle">
                  <div className="bg-weborange relative rounded-full z-20 w-30 h-1.5"></div>
                  <div class="relative bottom-1 w-55 h-0.5 z-10 bg-zinc-900 rounded-full dark:bg-zinc-900"></div>
                </div>

                <div className="text-webgray flex gap-12 pt-2 pb-1 text-[14px]">
                  <p>743 Investors</p>
                  <p>120% of target</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-center mt-15 underline underline-offset-4">
          <div>
            <Link href="/invest">
              <p>See More Oppurtunities</p>
            </Link>
          </div>
          <div className="flex ">
            <Image src="/wra.png" alt="" width={15} height={5}></Image>
            <Image
              className="relative right-5"
              src="/wra.png"
              alt=""
              width={15}
              height={5}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestPanel;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import OrangeTag from "../(components)/OrangeTag";

const NewsPanel = () => {
  return (
    <div>
      <div className="justify-center items-center flex">
        <div className="mt-40 mx-40 md:mt-40">
          <div className=" flex flex-wrap items-center justify-center gap-2 md:gap-2 bg-gray-50/5 px-4 md:px-5 py-2 rounded-lg border border-zinc-900 mb-8 w-[235px] mx-auto">
            <Image
              className=""
              src="/news.png"
              width={20}
              height={20}
              alt=""
            ></Image>
            <p className="text-center text-sm md:text-sm">
              What&apos;s New & Noteworthy
            </p>
          </div>
          <div className="flex gap-150">
            <p className="text-4xl font-bold pb-9">
              Latest <span className="text-weborange">Updates</span>
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
                  src="/one.png"
                  alt=""
                  width={320}
                  height={300}
                ></Image>
                <div className="flex gap-8 pl-4 pt-4">
                  <div className="flex gap-2 ">
                    <OrangeTag content={"RAISING"} />
                    <OrangeTag content={"INVESTING"} />
                  </div>
                  <div className="text-[11px] flex gap-2 bg-[#16120f] pl-2 py-[3px] pr-2 rounded-sm">
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
                  <p className="font-bold py-1">
                    Introducing Focus: The Future <br />
                    Of Efficient, Fundraising.
                  </p>
                  <p className="text-webgray text-sm pb-2">
                    A new product designed to make raising capital
                    <br />
                    faster, more efficient, and fully compliant across
                    <br />
                    UK and EU.
                  </p>
                </div>
                <div className="text-sm pl-4 pt-4 pb-4">07 months ago</div>
              </div>
            </div>
            <div>
              <div className="border-zinc-900 border-1 w-80 rounded-2xl">
                <Image
                  className="rounded-tl-2xl rounded-tr-2xl"
                  src="/two.png"
                  alt=""
                  width={320}
                  height={300}
                ></Image>
                <div className="flex gap-8 pl-4 pt-4">
                  <div className="flex gap-2 ">
                    <OrangeTag content={"RAISING"} />
                    <OrangeTag content={"INVESTING"} />
                  </div>
                  <div className="text-[11px] flex gap-2 bg-[#16120f] pl-2 py-[3px] pr-2 rounded-sm">
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
                  <p className="font-bold py-1">
                    The Importance Of Regulated
                    <br />
                    Fundraising
                  </p>
                  <p className="text-webgray text-sm pb-2">
                    There is a lack of awareness among founders
                    <br />
                    this issue and the potential consequences of
                    <br />
                    unregulated fundraising.
                  </p>
                </div>
                <div className="text-sm pl-4 pt-4 pb-4">08 months ago</div>
              </div>
            </div>
            <div>
              <div className="border-zinc-900 border-1 w-80 rounded-2xl">
                <Image
                  className="rounded-tl-2xl rounded-tr-2xl"
                  src="/three.png"
                  alt=""
                  width={320}
                  height={300}
                ></Image>
                <div className="flex gap-8 pl-4 pt-4">
                  <div className="flex gap-2 ">
                    <OrangeTag content={"RAISING"} />
                    <OrangeTag content={"INVESTING"} />
                  </div>
                  <div className="text-[11px] flex gap-2 bg-[#16120f] pl-2 py-[3px] pr-2 rounded-sm">
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
                  <p className="font-bold py-1">
                    Haatch Launch Exclusive SEIS
                    <br />
                    Partnership
                  </p>
                  <p className="text-webgray text-sm pb-2">
                    A new product designed to make raising capital
                    <br />
                    We&apos;ve joined forces wtith award-winning B2B SaaS
                    pre-seed and seed investor.
                    <br />
                  </p>
                </div>
                <div className="text-sm pl-4 pt-4 pb-4">10 months ago</div>
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
    </div>
  );
};

export default NewsPanel;

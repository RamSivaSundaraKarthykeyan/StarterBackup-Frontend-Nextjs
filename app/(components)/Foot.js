import React from "react";
import Image from "next/image";

const Foot = () => {
  return (
    <div className="bg-[#0f0b08] pt-30 relative z-0">
      <div className="flex gap-20 justify-center items-center">
        <div>
          {" "}
          <div className="w-12 h-12 bg-weborange rounded-full">
            <div
              className="
        relative top-1 left-1
        bg-weborange 
        rounded-full 
        w-10 
        h-10 
        inset-shadow-[0_0_8px_rgba(255,255,255,0.3)]
      "
            >
              <Image
                src="/flogo.png"
                alt=""
                width={20}
                height={20}
                className="relative top-3 left-2.5"
              />
            </div>
          </div>
          <div>
            <p className="mt-4">
              Crowd cube Capital Ltf is authorized and regulated
              <br />
              by the Financial Conduct Authority (No. 650205).
            </p>
            <p className="text-sm mt-4 text-webgray">
              Investing in start-ups & earrly-stage businesses involves risks,
              <br />
              including illiquidity, loss of investment and dilution, it should
              be
              <br />
              done only as part of a diversified portfolio.
            </p>
          </div>
        </div>
        <div className="text-[13px] text-webgray ">
          <li className="list-none text-white ">Address</li>
          <li className="list-none mt-2">
            201 S Biscayne Blvd STE
            <br />
            920, Miami, FL 33131
          </li>
          <li className="list-none mt-2">Support@crowdcube.com</li>
          <li className="list-none mt-2">(786) 321-5942</li>
        </div>
        <div className="text-[13px] text-webgray list-none">
          <li className="text-white">Investing</li>
          <li className="mt-2">Investment</li>
          <li className="mt-2">Fees</li>
          <li className="mt-2">Investor Returns</li>
          <li className="mt-2">Tax Relief</li>
          <li className="mt-2">Investor Charter</li>
          <li className="mt-2">Help Center</li>
        </div>
        <div className="text-[13px] text-webgray list-none">
          <li className="text-white">Raising</li>
          <li className="mt-2">Raise</li>
          <li className="mt-2">Secondary Sale</li>
          <li className="mt-2">Partnerships</li>
          <li className="mt-2">Refer a Business</li>
          <li className="mt-2">Supports</li>
          <li className="mt-2">Contact Us</li>
        </div>
        <div>
          <div className="list-none text-[13px] text-webgray">
            <li className="text-white">Connect</li>
            <li className="flex gap-1 max-w-10 max-h-10">
              <Image
                src="/x.png"
                alt=""
                width={10}
                height={10}
                className="flex-shrink-0"
                style={{ objectFit: "contain" }}
              ></Image>{" "}
              X.com
            </li>
            <li className="flex gap-1 max-w-10 max-h-10">
              <Image
                src="/instagram.png"
                alt=""
                width={10}
                height={10}
                className="flex-shrink-0"
                style={{ objectFit: "contain" }}
              ></Image>{" "}
              Instagram
            </li>
            <li className="flex gap-1 max-w-10 max-h-10">
              <Image
                src="/facebook.png"
                alt=""
                width={10}
                height={10}
                className="flex-shrink-0"
                style={{ objectFit: "contain" }}
              ></Image>{" "}
              Facebook
            </li>
            <li className="flex gap-1 max-w-10 max-h-10">
              <Image
                src="/linkedin.png"
                alt=""
                width={10}
                height={10}
                className="flex-shrink-0"
                style={{ objectFit: "contain" }}
              ></Image>{" "}
              LinkedIn
            </li>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-8">
        <hr className="border border-[#110d0a]"></hr>
        <div className="flex justify-between items-stretch mx-20 my-5">
          {" "}
          <div className="text-webgray text-sm flex gap-4">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Cookie Consent</p>
          </div>
          <div className="relative bottom-6">
            <Image
              src="/image-removebg-preview.png"
              alt=""
              width={80}
              height={80}
            ></Image>
          </div>
          <div className="text-webgray text-sm">
            {" "}
            &#169; 2025 crowdcube. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;

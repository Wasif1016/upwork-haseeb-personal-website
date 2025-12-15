"use client";

import Link from "next/link";
import SocialMediaIcon from "../layout.tsx/social-media";
import String from "./string";


export function Footer() {
  return (
    <>
      <String />
      <div className="lg:pb-[6vw] pb-[10vw] lg:mt-[2vw] mt-[10vw]">
        <div className="section flex justify-between md:items-center flex-col md:flex-row lg:gap-6 gap-[10vw]">
          <div className="flex flex-col gap-[3vw] md:gap-[1.5vw]">
            <div>
              <p className="text-[5vw] lg:text-[2.2vw] font-normal ]">Start a Project</p>
            </div>
            <div>
              <SocialMediaIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

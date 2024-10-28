import Image from "next/image";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const IntroLayout = ({ children }: Props) => {
  return (
    <div className="bg-register bg-no-repeat bg-cover h-full relative">
      <div className="flex flex-col items-center py-12 px-6 h-full">
        <div className="w-1/2 select-none pointer-events-none">
          <Image
            src="/images/logo.png"
            alt="logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full object-cover"
            priority
          />
        </div>
        <div className="w-full mt-10 select-none pointer-events-none">
          <Image
            src="/images/caption.png"
            alt="logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full object-cover"
            priority
          />
        </div>
        {children}
      </div>
      <div className="w-[70px] bottom-2 right-2 absolute select-none pointer-events-none">
        <Image
          src="/images/objects-intro.png"
          alt="logo"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default IntroLayout;

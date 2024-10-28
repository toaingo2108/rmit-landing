import Image from "next/image";
import React from "react";
import QRTooltip from "./_sections/QRTooltip";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}
const ProcessLayout = ({ children }: Props) => {
  return (
    <div className="bg-register bg-no-repeat bg-cover h-full relative overflow-hidden">
      <div className="flex flex-col items-center py-12 px-6 h-full">
        <div className="grid grid-cols-2 w-full gap-3">
          <div className="select-none pointer-events-none">
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
          <div className="flex justify-end space-x-1">
            <QRTooltip />
            <Link href="/scan-qr" className="w-1/4 flex-shrink-0 cursor-pointer">
              <Image
                src="/images/QRCode.png"
                alt="logo"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full object-cover"
                priority
              />
            </Link>
          </div>
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
      <div className="w-1/3 -bottom-8 -left-2 absolute select-none pointer-events-none">
        <Image
          src="/images/objects-process.png"
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

export default ProcessLayout;

"use client";

import ClientOnly from "@/components/ClientOnly";
import Image from "next/image";
import { Scanner } from "@yudiel/react-qr-scanner";
import Link from "next/link";
import { QrCodeIcon, ScanLineIcon } from "lucide-react";
import LinkWithId from "@/components/LinkWithId";

const ScanQRPage = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col items-center flex-1">
        <ClientOnly>
          <div className="relative w-full h-full overflow-hidden transition-opacity duration-500">
            <Scanner
              // viewFinderBorder={0}
              // viewFinder={() => <></>}
              constraints={{
                advanced: [{ facingMode: "environment" }],
              }}
              components={
                {
                  // finder: true,
                  // audio: false,
                }
              }
              onScan={(data) => {
                // if (data != result && !showResult) {
                //   setResult(data);
                // }
              }}
              classNames={{
                container: "scanner",
                video: "scanner-video",
              }}
            />

            <div className="absolute top-0 inset-x-0 px-4 pt-4 flex flex-col items-center">
              <div className="w-1/2">
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
              <div className="w-full mt-4">
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
            </div>
          </div>
        </ClientOnly>
      </div>
      <div className="bg-rmit py-2 px-8 w-full flex justify-between">
        <div className="flex flex-col items-center space-y-1">
          <div className="bg-transparent p-0.5 rounded-lg">
            <ScanLineIcon className="w-10 h-10 text-white" />
          </div>
          <p className="text-white text-[10px]">Sacn QR CODE</p>
        </div>
        <LinkWithId to="/id">
          <div className="flex flex-col items-center space-y-1">
            <div className="bg-white p-0.5 rounded-lg">
              <QrCodeIcon className="w-10 h-10" />
            </div>
            <p className="text-white text-[10px]">My QR CODE</p>
          </div>
        </LinkWithId>
      </div>
    </div>
  );
};

export default ScanQRPage;

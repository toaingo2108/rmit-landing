"use client";

import ClientOnly from "@/components/ClientOnly";
import Image from "next/image";
import { Scanner } from "@yudiel/react-qr-scanner";

const ScanQRPage = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col items-center pt-4 px-6 h-full">
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
        <div className="w-full mt-8">
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

        <ClientOnly>
          <div className="w-full aspect-square overflow-hidden transition-opacity duration-500">
            <Scanner
              // deviceId={deviceId}
              // viewFinderBorder={0}
              // viewFinder={() => <></>}
              constraints={{
                facingMode: "environment",
              }}
              // videoStyle={{
              //   objectFit: "cover",
              // }}
              onScan={(data) => {
                // if (data != result && !showResult) {
                //   setResult(data);
                // }
              }}
              onError={() => {}}
              key={"123"}
              classNames={{}}
              styles={{}}
            />
          </div>
        </ClientOnly>
      </div>
    </div>
  );
};

export default ScanQRPage;

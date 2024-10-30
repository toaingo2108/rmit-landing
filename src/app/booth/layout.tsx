import Image from "next/image";
import React, { Suspense } from "react";
import Link from "next/link";
import QRTooltip from "@/components/QRTooltip";
import { KEY } from "@/constants/key";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}
const BoothLayout = ({ children }: Props) => {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";

  const data = fullUrl?.split("/booth/")[1]?.split("?key=") as
    | [keyof typeof KEY, string]
    | undefined;

  const booth = data?.[0];
  const key = data?.[1];

  if (!key || !booth || !KEY[booth] || key !== KEY[booth]) {
    redirect("/process");
  }

  return (
    <div className="bg-register bg-no-repeat bg-cover h-full relative overflow-hidden flex flex-col">
      <div className="flex flex-col items-center pt-8 pb-6 px-6 relative z-[1]">
        <div className="grid grid-cols-2 w-full gap-3">
          <Link href="/process">
            <Image
              src="/images/logo.png"
              alt="logo"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full object-cover"
              priority
            />
          </Link>
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
      </div>
      <Suspense>{children}</Suspense>
    </div>
  );
};

export default BoothLayout;

"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import QRTooltip from "@/components/QRTooltip";
import LinkWithId from "@/components/LinkWithId";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { KEY } from "@/constants/key";

interface Props {
  children: React.ReactNode;
}
const BoothLayout = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const key = searchParams.get("key");
  const booth = +pathname.split("/booth/")[1] as keyof typeof KEY;

  if (!key || !KEY[booth] || key !== KEY[booth]) {
    router.push("/process");
    return <></>;
  }

  return (
    <div className="bg-register bg-no-repeat bg-cover h-full relative overflow-hidden flex flex-col">
      <div className="flex flex-col items-center pt-8 pb-6 px-6 relative z-[1]">
        <div className="grid grid-cols-2 w-full gap-3">
          <LinkWithId to="/process">
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
          </LinkWithId>
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
      {children}
    </div>
  );
};

export default BoothLayout;

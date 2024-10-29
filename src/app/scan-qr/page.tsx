"use client";

import ClientOnly from "@/components/ClientOnly";
import Image from "next/image";
import { Scanner } from "@yudiel/react-qr-scanner";
import { QrCodeIcon, ScanLineIcon } from "lucide-react";
import LinkWithId from "@/components/LinkWithId";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

const ScanQRPage = () => {
  const router = useRouter();
  const { toast } = useToast();

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col items-center flex-1">
        <ClientOnly>
          <div className="relative w-full h-full overflow-hidden transition-opacity duration-500">
            <Scanner
              constraints={{
                advanced: [{ facingMode: "environment" }],
              }}
              components={{
                zoom: true,
                audio: true,
                finder: true,
                onOff: true,
                torch: true,
              }}
              formats={["qr_code"]}
              onScan={(detectedCodes) => {
                const code = detectedCodes?.[0];
                if (code.format === "qr_code") {
                  const value = code.rawValue;
                  // if value with format /booth/number(1-7)
                  // redirect to /booth/number(1-7)
                  const regex = /^\/booth\/[1-7]$/;
                  if (regex.test(value)) {
                    router.push(value);
                  } else {
                    toast({
                      variant: "destructive",
                      title: "Uh oh! Invalid QR Code",
                      action: <ToastAction altText="Try again">Try again</ToastAction>,
                    });
                  }
                }
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
        <div className="flex flex-col items-center space-y-1" onClick={() => router.refresh()}>
          <div className="bg-transparent p-0.5 rounded-lg">
            <ScanLineIcon className="w-10 h-10 text-white" />
          </div>
          <p className="text-white text-[10px]">Scan QR CODE</p>
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

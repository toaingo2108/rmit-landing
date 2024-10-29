"use client";

import React, { useState } from "react";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const QRTooltip = () => {
  const [show, setShow] = useState(true);

  return (
    <div
      className={cn(
        "text-[9px] bg-[#E8CF01] relative p-1 rounded-[2px] flex",
        show ? "opacity-100" : "opacity-0"
      )}
    >
      <div>At each corner, please scan QR code on information board.</div>
      <div role="button" className="w-2 text-white" onClick={() => setShow(false)}>
        <XIcon className="w-2 h-2" />
      </div>

      <div
        style={{
          clipPath: "polygon(100% 43%, 0 43%, 0 100%)",
        }}
        className="bg-[#E8CF01] absolute z-[1] top-0 left-full w-1 h-1.5"
      ></div>
    </div>
  );
};

export default QRTooltip;

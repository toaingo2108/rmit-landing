import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
  number: number;
  label: string;
  marked?: boolean | null;
  shadowInner?: boolean;
}
const Booth = ({ className = "", number, label, marked = false, shadowInner = false }: Props) => {
  return (
    <div
      className={cn("h-[84px] w-[84px] relative flex items-center px-1", className)}
      style={{
        boxShadow: shadowInner
          ? "inset 0px 4px 4px rgba(0, 0, 0, 0.3)"
          : "0 16px 20px -16px rgba(0, 0, 0, 0.5), 0 -16px 20px -16px rgba(0, 0, 0, 0.5)",
      }}
    >
      <p className={cn("font-bold text-3xl absolute -top-1 left-0")}>{number}</p>
      <p className="text-center text-[9px]">{label}</p>
      {Boolean(marked) && (
        <div className="w-[60%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          <Image
            src="/images/marked.png"
            alt="logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full object-cover"
            priority
          />
        </div>
      )}
    </div>
  );
};

export default Booth;

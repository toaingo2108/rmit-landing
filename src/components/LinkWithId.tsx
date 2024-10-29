"use client";

import Link from "next/link";
import React from "react";
import { useLocalStorage } from "usehooks-ts";
import ClientOnly from "./ClientOnly";

interface Props {
  to: string;
  children: React.ReactNode;
}
const LinkWithId = ({ to, children, ...other }: Props) => {
  const [id] = useLocalStorage("RMIT_REGISTERED_ID", "");

  return (
    <ClientOnly>
      <Link href={`${to}?id=${id}`} {...other}>
        {children}
      </Link>
    </ClientOnly>
  );
};

export default LinkWithId;

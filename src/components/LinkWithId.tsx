"use client";

import Link from "next/link";
import React from "react";
import { useLocalStorage } from "usehooks-ts";

interface Props {
  to: string;
  children: React.ReactNode;
}
const LinkWithId = ({ to, children, ...other }: Props) => {
  const [id] = useLocalStorage("RMIT_REGISTERED_ID", "");

  return (
    <Link href={`${to}?id=${id}`} {...other}>
      {children}
    </Link>
  );
};

export default LinkWithId;

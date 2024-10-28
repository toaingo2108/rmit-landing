import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import LinkWithId from "@/components/LinkWithId";

const IntroPage = () => {
  return (
    <div className="flex-1 w-full mt-8 text-rmit text-xs flex flex-col space-y-3">
      <p className="font-bold">Welcome to RMIT Sustainability Week 2024!</p>
      <p>
        Are you ready to embark on an exciting journey to create your own sustainability narrative?
        Join us for an interactive experience where every idea counts—and eco-friendly rewards
        await!
      </p>

      <p>
        <b>Step 1:</b> Visit each sustainability booth to learn, engage, and have fun with us.
      </p>
      <p>
        <b>Step 2:</b> Scan the QR code at each booth to unlock questions and share your feedback.
      </p>
      <p>
        <b>Step 3:</b> The more booths you complete, the better your chances to win eco-friendly
        prizes!
      </p>

      <ul className="text-[11px] ml-2">
        <li>
          <b>3 booths completed:</b> 1 spin on Lucky Wheel.
        </li>
        <li>
          <b>5 booths completed:</b> 2 spins on Lucky Wheel.
        </li>
        <li>
          <b>7 booths completed:</b> Receive an exclusive eco-friendly item!
        </li>
      </ul>

      <i className="text-center">We have lots of gifts for you!</i>

      <div className="w-full px-6">
        <Image
          src="/images/gifts-intro.png"
          alt="logo"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full object-cover"
          priority
        />
      </div>
      <div className="flex justify-center">
        <Button asChild className="w-[58%] rounded-full bg-primary">
          <LinkWithId to="/process">Let&apos;s get started!</LinkWithId>
        </Button>
      </div>
    </div>
  );
};

export default IntroPage;

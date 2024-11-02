"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import React from "react";
import Booth from "./_sections/Booth";
import { getDetail } from "@/lib/api";
import { useQuery } from "react-query";
import { useLocalStorage } from "usehooks-ts";

const ProcessPage = () => {
  const [id] = useLocalStorage("RMIT_REGISTERED_ID", "");
  const query = useQuery("detail", async () => await getDetail(id));
  const person = query.data;

  const completed =
    +Boolean(person?.result1) +
    +Boolean(person?.result2) +
    +Boolean(person?.result3) +
    +Boolean(person?.result4) +
    +Boolean(person?.result5) +
    +Boolean(person?.result6) +
    +Boolean(person?.result7);
  const progress = Math.round((completed / 7) * 100);

  return (
    <div className="w-full">
      <div className="flex flex-col w-full pr-8 mt-8">
        <div className="relative h-20 flex-shrink-0 grid grid-cols-7 mb-0.5">
          <div className="flex justify-end select-none pointer-events-none col-span-3">
            <Image
              src={completed >= 3 ? "/images/process1-actived.png" : "/images/process1.png"}
              alt="logo"
              width="0"
              height="0"
              sizes="100vw"
              className="aspect-square w-auto h-20 object-contain translate-x-[44%]"
              priority
            />
          </div>
          <div className="flex justify-end select-none pointer-events-none col-span-2">
            <Image
              src={completed >= 5 ? "/images/process2-actived.png" : "/images/process2.png"}
              alt="logo"
              width="0"
              height="0"
              sizes="100vw"
              className="aspect-square w-auto h-20 object-contain translate-x-[44%]"
              priority
            />
          </div>
          <div className="flex justify-end select-none pointer-events-none col-span-2">
            <Image
              src={completed >= 7 ? "/images/process3-actived.png" : "/images/process3.png"}
              alt="logo"
              width="0"
              height="0"
              sizes="100vw"
              className="aspect-square w-auto h-20 object-contain translate-x-[44%]"
              priority
            />
          </div>
        </div>
        <Progress value={progress} className="w-full flex" />
      </div>
      <div className="mt-10 flex justify-center">
        <Booth
          className="bg-yellow-400 text-rmit"
          number={1}
          label="7Rs ACTIVATOR SHOWCASE"
          marked={person?.result1}
        />
        <Booth
          className="bg-rmit text-white"
          number={2}
          shadowInner
          label="AMBASSADOR SHOWCASE"
          marked={person?.result2}
        />
        <Booth
          className="bg-blue-400 text-rmit"
          number={3}
          label="AGREENCHOICE SHOWCASE"
          marked={person?.result3}
        />
      </div>
      <div className="mt-6 flex justify-center">
        <Booth
          className="bg-blue-600 text-white"
          number={4}
          label="PAPER CUP TRUTH"
          marked={person?.result4}
        />
        <Booth
          className="bg-gray-200 text-rmit"
          number={5}
          shadowInner
          label="COFFEE GROUND DIY"
          marked={person?.result5}
        />
        <Booth
          className="bg-rose-600 text-white"
          number={6}
          label="WASTE JOURNEY"
          marked={person?.result6}
        />
        <Booth
          className="bg-green-500 text-rmit"
          number={7}
          shadowInner
          label="CHECK OUT/ GIFT CORNER"
          marked={person?.result7}
        />
      </div>
    </div>
  );
};

export default ProcessPage;

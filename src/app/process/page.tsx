import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import React from "react";
import Booth from "./_sections/Booth";
import { getDetail } from "@/lib/api";
import LinkWithId from "@/components/LinkWithId";

const ProcessPage = async ({ searchParams }: { searchParams: { id: string } }) => {
  const person = await getDetail(searchParams.id);

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
      <div className="flex flex-col w-full pr-4 mt-6">
        <div className="relative h-20 flex-shrink-0 grid grid-cols-3 mb-0.5">
          <div className="flex justify-end select-none pointer-events-none">
            <Image
              src="/images/process1.png"
              alt="logo"
              width="0"
              height="0"
              sizes="100vw"
              className="aspect-square w-auto h-20 object-contain translate-x-[30%]"
              priority
            />
          </div>
          <div className="flex justify-end select-none pointer-events-none">
            <Image
              src="/images/process2.png"
              alt="logo"
              width="0"
              height="0"
              sizes="100vw"
              className="aspect-square w-auto h-20 object-contain translate-x-[44%]"
              priority
            />
          </div>
          <div className="flex justify-end select-none pointer-events-none">
            <Image
              src="/images/process3.png"
              alt="logo"
              width="0"
              height="0"
              sizes="100vw"
              className="aspect-square w-auto h-20 object-contain translate-x-[44%]"
              priority
            />
          </div>
        </div>
        <Progress value={progress} className="w-full" />
      </div>
      <div className="mt-6 flex justify-center">
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
          label="WASTE JOURNEY"
          marked={person?.result5}
        />
        <Booth
          className="bg-rose-600 text-white"
          number={6}
          label="COFFEE GROUND DIY"
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

      <div className="flex flex-col items-center mt-10 space-y-2">
        <Button asChild className="w-[40%] bg-green-500 hover:bg-green-500/90 text-rmit rounded-full">
          <LinkWithId to="/id">SAVE</LinkWithId>
        </Button>
        <Button className="w-[40%] hover:bg-primary/90 rounded-full">FINISH</Button>
      </div>
    </div>
  );
};

export default ProcessPage;

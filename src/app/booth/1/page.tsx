import Image from "next/image";
import React from "react";
import Booth1Form from "./form";

const Booth1Page = () => {
  return (
    <React.Fragment>
      <div className="bottom-4 left-4 right-12 absolute select-none pointer-events-none">
        <Image
          src="/images/objects-booth1.png"
          alt="logo"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full object-cover"
          priority
        />
      </div>
      <div className="px-6 relative z-[1]">
        <h4 className="font-bold text-rmit text-xl text-center">7Rs Activator Showcase</h4>
        <p className="mt-4 text-rmit text-xs text-center">
          Out of the 7Rs, which project has inspired you the most?
        </p>
        <Booth1Form />
      </div>
    </React.Fragment>
  );
};

export default Booth1Page;

import Image from "next/image";
import React from "react";
import Form from "./form";

const BoothPage = () => {
  return (
    <React.Fragment>
      <div className="top-1/4 left-4 right-[20%] absolute select-none pointer-events-none">
        <Image
          src="/images/objects-booth5.png"
          alt="logo"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full object-cover"
          priority
        />
      </div>
      <div className="px-6 relative z-[1] flex flex-col flex-1">
        <h4 className="font-bold text-rmit text-xl text-center">
          Coffee Ground DIY
        </h4>
        
        <Form />
      </div>
    </React.Fragment>
  );
};

export default BoothPage;

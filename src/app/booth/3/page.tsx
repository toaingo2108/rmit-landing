import Image from "next/image";
import React from "react";
import Form from "./form";

const BoothPage = () => {
  return (
    <React.Fragment>
      <div className="left-4 right-4 top-1/4 absolute select-none pointer-events-none">
        <Image
          src="/images/objects-booth3.png"
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
          AgreenChoice Showcase
        </h4>
        
        <Form />
      </div>
    </React.Fragment>
  );
};

export default BoothPage;

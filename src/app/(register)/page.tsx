import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import RegisterForm from "./form";

const RegisterPage = () => {
  return (
    <div className="flex-1 w-full px-2 mt-8">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;

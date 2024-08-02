import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex items-center justify-center mx-auto relative z-10 shadow-2xl w-full pt-20 md:pt-0">
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;

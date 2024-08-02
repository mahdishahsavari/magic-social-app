"use client";

import React from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  const images = ["/image4.jpg", "/image5.jpg", "/image6.jpg"];

  return (
    <ImagesSlider className="h-screen object-cover" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.div className="flex items-center justify-center bg-clip-text z-10 shadow-2xl">
          <SignIn />
        </motion.div>
      </motion.div>
    </ImagesSlider>
  );
};

export default SignInPage;

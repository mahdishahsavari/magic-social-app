"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const Editor = ({ value }: { value: string }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return (
    <ReactQuill
      className="h-[350px] pb-10 bg-white whitespace-pre-wrap shadow-xl z-10 my-10"
      value={value}
      theme="snow"
    ></ReactQuill>
  );
};

export default Editor;

"use client";

import React, { useEffect, useState } from "react";
import { contentTemplates } from "@/lib/content-template";
import Link from "next/link";
import { cn } from "@/lib/utils";

const TemplateSection = ({
  searchInput,
}: {
  searchInput: string | undefined;
}) => {
  const [templateList, setTemplateList] = useState(contentTemplates);

  useEffect(() => {
    if (searchInput && searchInput.length > 1) {
      const filteredTemplate = contentTemplates.filter(
        (item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.desc.toLowerCase().includes(searchInput.toLowerCase())
      );

      setTemplateList(filteredTemplate);
    } else {
      setTemplateList(contentTemplates);
    }
  }, [searchInput]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 mt-5">
      {templateList.map((template, index) => (
        <div key={index} className="max-w-xs w-full group/card">
          <Link
            href={`/dashboard/${template.slug}`}
            className={cn(
              "overflow-hidden relative card h-96 rounded-xl shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 hover:shadow-2xl hover:scale-105 transition-all hover:border-2 hover:border-teal-600"
            )}
            style={{
              backgroundImage: `url(${template.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
              <template.icon className="h-12 w-12 text-rose-700"></template.icon>
              <div className="flex flex-col">
                <p className="font-normal text-base text-gray-50 relative z-10">
                  Mhdy Shah
                </p>
              </div>
            </div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                {template.name}
              </h1>
              <p className="font-normal text-ellipsis text-sm text-gray-50 relative z-10 my-4">
                {template.desc}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TemplateSection;

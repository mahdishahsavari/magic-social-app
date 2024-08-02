"use client";

import React, { useState } from "react";
import axios from "axios";
import { contentTemplates } from "@/lib/content-template";
import { Loader2 } from "lucide-react";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { Textarea } from "@/components/ui/textarea";
import Editor from "@/components/dashboard/templateSlug/editor";
import { chatSession } from "@/lib/gemini";

type templateSlugProps = {
  templateSlug: string;
};

const TemplatePage = ({ params }: { params: templateSlugProps }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aiOutput, setAiOutput] = useState<string>("");

  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === params.templateSlug
  );

  const generateAIContent = async (formData: FormData) => {
    setIsLoading(true);
    try {
      let dataSet = {
        title: formData.get("title"),
        description: formData.get("description"),
      };

      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAIPrompt = JSON.stringify(dataSet) + ", " + selectedPrompt;

      const result = await chatSession.sendMessage(finalAIPrompt);
      setAiOutput(result.response.text());

      const response = await axios.post("/api/", {
        title: dataSet.title,
        description: result.response.text(),
        templateUsed: selectedTemplate?.name,
      });

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (formData: FormData) => {
    generateAIContent(formData);
  };

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded">
        {/* title text */}
        <div className="bg-[#0E0E10] h-fit rounded-2xl w-fit">
          <TextRevealCard
            text={selectedTemplate?.name}
            revealText={selectedTemplate?.name}
          ></TextRevealCard>
        </div>
      </div>
      <form action={onSubmit}>
        <div className="flex flex-col gap-4 p-5 mt-5 bg-white">
          {selectedTemplate?.form?.map((form, index) => (
            <div key={selectedTemplate.slug}>
              <label className="hover:underline text-lg hover:text-neutral-600">
                {form.label}
              </label>
              {form.field === "input" ? (
                <label className="relative block rounded-md border border-gray-200 shadow-md  focus-within:ring-1 mt-5 md:w-1/2 w-full">
                  <input
                    name="title"
                    className="peer border-none bg-transparent placeholder-transparent p-3 w-full"
                    placeholder="Title"
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Enter Title
                  </span>
                </label>
              ) : (
                <div className="mt-3">
                  <Textarea name="description" className="shadow-md" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* button */}
        <button
          className="group relative inline-block overflow-hidden border rounded-lg border-neutral-800 px-8 py-3 mt-5 focus:outline-none focus:ring"
          type="submit"
        >
          <span className="absolute inset-y-0 left-0 w-[2px] bg-neutral-800 transition-all group-hover:w-full group-active:bg-neutral-700"></span>

          {isLoading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <span className="relative text-sm font-medium text-black transition-colors group-hover:text-white">
              Generate Content
            </span>
          )}
        </button>
      </form>

      <div>
        <Editor value={isLoading ? "Generating...😎" : aiOutput} />
      </div>
    </div>
  );
};

export default TemplatePage;

"use client";

import React, { useState } from "react";
import SearchSection from "@/components/dashboard/SearchSection";
import TemplateSection from "@/components/dashboard/TemplateSection";

const DashboardPage = () => {
  const [searchInput, setSearchInput] = useState<string>();

  return (
    <div>
      <SearchSection onSearchInput={setSearchInput} />
      <TemplateSection searchInput={searchInput} />
    </div>
  );
};

export default DashboardPage;

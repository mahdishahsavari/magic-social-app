import React from "react";
import { SearchIcon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const SearchSection = ({
  onSearchInput,
}: {
  onSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <div className="mx-5 py-2">
      <div className="flex items-center md:flex-row gap-5 mt-5 py-6 px-4 bg-white rounded-2xl">
        <div className="flex gap-2 items-center p-2 border rounded-full bg-white w-1/3">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-black w-full"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
        <div className="ml-auto">
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;

import React, { useState, useContext } from "react";
import { IpDataContext } from "../context/IpDataContext";
import { ChevronRight } from "lucide-react";

const SearchBar: React.FC = () => {
  const [input, setInput] = useState("");
  const { fetchIpData } = useContext(IpDataContext)!;

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input) {
      fetchIpData(input);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center overflow-clip rounded-lg w-[90%] max-w-[500px]"
    >
      <input
        type="search"
        role="search"
        aria-label="Search IP address"
        className="px-5 py-3 w-full border-none outline-none hover:outline-none hover:border-none"
        placeholder="Search for any IP address or domain"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-black text-white p-3 hover:opacity-75 duration-300 ease-in-out"
      >
        <ChevronRight size={24} role="icon" aria-label="submit icon" />
      </button>
    </form>
  );
};

export default SearchBar;

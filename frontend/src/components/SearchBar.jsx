import { useState } from "react";

const SearchBar = ({ onSearch, isLoading }) => {
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company.trim() || isLoading) return;
    onSearch(company);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 justify-center mt-10"
    >
      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter company..."
        disabled={isLoading}
        className="border border-gray-300 rounded-lg px-5 py-3 w-full sm:w-[400px] focus:outline-none focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-400"
      />
      <button
        disabled={isLoading}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
      >
        Analyze
      </button>
    </form>
  );
};

export default SearchBar;
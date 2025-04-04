
import { useState } from "react";
import { genres, authors } from "@/data/books";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";

interface FilterBarProps {
  selectedGenre: string;
  selectedAuthor: string;
  onGenreChange: (genre: string) => void;
  onAuthorChange: (author: string) => void;
}

const FilterBar = ({
  selectedGenre,
  selectedAuthor,
  onGenreChange,
  onAuthorChange,
}: FilterBarProps) => {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isAuthorOpen, setIsAuthorOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-8 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-hindi text-lg font-semibold text-maroon-dark flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          फ़िल्टर करें
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Genre Filter */}
        <div className="relative">
          <button
            onClick={() => setIsGenreOpen(!isGenreOpen)}
            className="w-full flex items-center justify-between p-2 border border-gray-300 rounded-md bg-white"
          >
            <span className="font-hindi">
              {selectedGenre
                ? genres.find((g) => g.id === selectedGenre)?.name || "श्रेणी चुनें"
                : "श्रेणी चुनें"}
            </span>
            {isGenreOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {isGenreOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
              <div className="p-2 border-b">
                <button
                  onClick={() => {
                    onGenreChange("");
                    setIsGenreOpen(false);
                  }}
                  className="w-full text-left p-2 hover:bg-gray-100 rounded font-hindi"
                >
                  सभी श्रेणियाँ
                </button>
              </div>
              <div className="max-h-48 overflow-y-auto p-2">
                {genres.map((genre) => (
                  <button
                    key={genre.id}
                    onClick={() => {
                      onGenreChange(genre.id);
                      setIsGenreOpen(false);
                    }}
                    className={`w-full text-left p-2 hover:bg-gray-100 rounded font-hindi ${
                      selectedGenre === genre.id ? "bg-saffron/10 text-saffron-dark" : ""
                    }`}
                  >
                    {genre.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Author Filter */}
        <div className="relative">
          <button
            onClick={() => setIsAuthorOpen(!isAuthorOpen)}
            className="w-full flex items-center justify-between p-2 border border-gray-300 rounded-md bg-white"
          >
            <span className="font-hindi">
              {selectedAuthor
                ? authors.find((a) => a.id === selectedAuthor)?.name || "लेखक चुनें"
                : "लेखक चुनें"}
            </span>
            {isAuthorOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {isAuthorOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
              <div className="p-2 border-b">
                <button
                  onClick={() => {
                    onAuthorChange("");
                    setIsAuthorOpen(false);
                  }}
                  className="w-full text-left p-2 hover:bg-gray-100 rounded font-hindi"
                >
                  सभी लेखक
                </button>
              </div>
              <div className="max-h-48 overflow-y-auto p-2">
                {authors.map((author) => (
                  <button
                    key={author.id}
                    onClick={() => {
                      onAuthorChange(author.id);
                      setIsAuthorOpen(false);
                    }}
                    className={`w-full text-left p-2 hover:bg-gray-100 rounded font-hindi ${
                      selectedAuthor === author.id ? "bg-saffron/10 text-saffron-dark" : ""
                    }`}
                  >
                    {author.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;


import { useState } from "react";
import { Book, getAuthorById } from "@/data/books";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import PDFViewer from "./PDFViewer";

interface FeaturedBookProps {
  book: Book;
}

const FeaturedBook = ({ book }: FeaturedBookProps) => {
  const [showPdf, setShowPdf] = useState(false);
  const author = getAuthorById(book.authorId);

  return (
    <>
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-maroon-dark to-maroon shadow-xl border border-gold/20">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 bg-repeat opacity-10 mix-blend-overlay"
             style={{ backgroundImage: "url('/ethnic-pattern.svg')", backgroundSize: "100px" }}>
        </div>
        
        <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block">
          <div className="w-full h-full overflow-hidden relative">
            <div
              className="absolute inset-0 bg-gradient-to-r from-maroon to-transparent"
              style={{ mixBlendMode: "multiply" }}
            ></div>
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-full object-cover object-center transform scale-110 opacity-30"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
        </div>

        <div className="relative z-10 p-6 md:p-8 lg:p-10 md:w-3/5 text-white">
          <div className="mb-6">
            <span className="inline-block bg-gold px-3 py-1 text-xs font-semibold text-maroon-dark rounded-full mb-2">
              विशेष पुस्तक
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-hindi font-bold mb-2 gradient-text">
              {book.title}
            </h2>
            <p className="text-white/80 text-lg mb-2">
              <span className="font-semibold">{author?.name}</span> द्वारा, {book.year}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {book.genres.map((genre) => (
                <span
                  key={genre}
                  className="text-xs bg-white/10 px-2 py-1 rounded-full border border-white/20"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <p className="text-white/90 mb-6 line-clamp-3 md:line-clamp-none">
            {book.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setShowPdf(true)}
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-gold text-maroon-dark font-semibold rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              पढ़ना शुरू करें
            </button>
            <Link
              to={`/book/${book.id}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-md transition-colors duration-300"
            >
              अधिक जानकारी
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-16 h-16 bg-contain bg-no-repeat opacity-50"
             style={{ backgroundImage: "url('/decorative-corner.svg')" }}>
        </div>
        <div className="absolute bottom-4 right-4 w-16 h-16 bg-contain bg-no-repeat opacity-50 transform rotate-180"
             style={{ backgroundImage: "url('/decorative-corner.svg')" }}>
        </div>
      </div>

      {showPdf && (
        <PDFViewer
          pdfUrl={book.pdfUrl}
          bookTitle={book.title}
          onClose={() => setShowPdf(false)}
        />
      )}
    </>
  );
};

export default FeaturedBook;

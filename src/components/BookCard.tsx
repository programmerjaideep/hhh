import { useState } from "react";
import { Link } from "react-router-dom";
import { Book, getAuthorById } from "@/data/books";
import { ArrowRight } from "lucide-react";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const author = getAuthorById(book.authorId);

  return (
    <Link to={`/book/${book.id}`}>
      <div 
        className="book-card group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Ornamental corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold opacity-80"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold opacity-80"></div>
        
        {/* Indian decorative elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-6">
          <img 
            src="https://i.ibb.co/KjSBMxD/indian-motif-top.png" 
            alt="Decorative motif" 
            className="w-full h-full object-contain opacity-80"
          />
        </div>
        
        <div className="book-card-cover">
          <div className="book-cover-inner">
            <img 
              src={book.coverImage} 
              alt={book.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
              crossOrigin="anonymous"
              loading="eager"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-hindi text-lg font-semibold">{book.title}</h3>
              <p className="text-white/80 text-sm">{author?.name}</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gradient-to-b from-white to-saffron/5">
          <h3 className="font-hindi text-lg font-semibold text-maroon-dark mb-1 group-hover:text-maroon transition-colors">{book.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{author?.name}</p>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {book.genres.slice(0, 2).map((genre) => (
              <span key={genre} className="text-xs bg-saffron/10 text-saffron-dark px-2 py-0.5 rounded-full">
                {genre}
              </span>
            ))}
          </div>
          
          {book.previewText && (
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">
              {book.previewText}
            </p>
          )}
          
          <div className="mt-2 flex justify-between items-center">
            <span className="text-xs text-gray-500">{book.year} • {book.pages} पृष्ठ</span>
            <span className="text-saffron flex items-center text-sm font-medium group-hover:text-maroon transition-colors">
              और पढ़ें
              <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;

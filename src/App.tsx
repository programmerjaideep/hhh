import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Books from "./pages/books";
import BookDetail from "./pages/bookDetail";
import Authors from "./pages/authors";
import Genres from "./pages/genres";
import About from "./pages/about";
import NotFound from "./pages/notFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Decorative elements for Indian cultural theme
const FloatingDecorations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 w-full h-16 opacity-15">
        <img 
          src="https://i.ibb.co/DLgvkQP/indian-border-top.png" 
          alt="Decorative top border" 
          className="w-full h-full object-cover"
          style={{ opacity: 0.15 }}
          loading="eager"
        />
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 w-full h-16 opacity-15">
        <img 
          src="https://i.ibb.co/XSSvgpX/indian-border-bottom.png" 
          alt="Decorative bottom border" 
          className="w-full h-full object-cover" 
          style={{ opacity: 0.15 }}
          loading="eager"
        />
      </div>
      
      {/* Left ornamental element */}
      <div className="absolute left-0 top-1/4 w-12 h-48 opacity-15">
        <img 
          src="https://i.ibb.co/tQbJzKS/indian-side-ornament.png" 
          alt="Side ornament" 
          className="w-full h-full object-contain"
          style={{ opacity: 0.15 }}
          loading="eager"
        />
      </div>
      
      {/* Right ornamental element */}
      <div className="absolute right-0 top-2/3 w-12 h-48 opacity-15">
        <img 
          src="https://i.ibb.co/tQbJzKS/indian-side-ornament.png" 
          alt="Side ornament" 
          className="w-full h-full object-contain transform rotate-180"
          style={{ opacity: 0.15 }}
          loading="eager"
        />
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <FloatingDecorations />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

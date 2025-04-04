
import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface PDFViewerProps {
  pdfUrl: string;
  bookTitle: string;
  onClose: () => void;
}

const PDFViewer = ({ pdfUrl, bookTitle, onClose }: PDFViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden animate-fade-in">
        <div className="bg-maroon-dark text-white py-3 px-4 flex items-center justify-between">
          <h3 className="font-hindi font-semibold">{bookTitle}</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-[calc(90vh-48px)]">
            <div className="w-16 h-16 border-4 border-saffron/20 border-t-saffron rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 font-hindi">पुस्तक लोड हो रही है...</p>
          </div>
        ) : (
          <iframe
            src={pdfUrl}
            title={bookTitle}
            className="w-full h-[calc(90vh-48px)]"
            frameBorder="0"
          >
            आपका ब्राउज़र इस PDF प्रारूप का समर्थन नहीं करता। कृपया
            <a href={pdfUrl} target="_blank" rel="noreferrer" className="text-saffron">
              {" "}
              यहाँ क्लिक{" "}
            </a>
            करके PDF डाउनलोड करें।
          </iframe>
        )}
      </div>
    </div>
  );
};

export default PDFViewer;

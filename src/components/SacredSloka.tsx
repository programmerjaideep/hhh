
import React from "react";
import { CornerDownRight } from "lucide-react";

interface SacredSlokaProps {
  sloka: string;
  meaning: string;
}

const SacredSloka = ({ sloka, meaning }: SacredSlokaProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gold/10 to-saffron/10 border border-gold/30 rounded-lg p-6 md:p-8 shadow-md">
      <div className="absolute top-0 left-0 w-20 h-20 bg-contain bg-no-repeat opacity-40"
           style={{ backgroundImage: "url('/decorative-corner.svg')" }}>
      </div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-contain bg-no-repeat opacity-40 transform rotate-180"
           style={{ backgroundImage: "url('/decorative-corner.svg')" }}>
      </div>
      
      <div className="relative z-10">
        <div className="mb-6 text-center">
          <div className="inline-block w-16 h-16 rounded-full bg-gradient-to-r from-saffron to-gold p-[2px] mb-3 diya-flicker">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-saffron to-gold flex items-center justify-center">
              <span className="text-maroon-dark text-2xl font-hindi">ॐ</span>
            </div>
          </div>
          <h3 className="font-hindi text-xl md:text-2xl text-maroon-dark mb-2">पवित्र श्लोक</h3>
        </div>

        <blockquote className="font-hindi text-lg md:text-xl text-center mb-4 italic text-gray-800">
          "{sloka}"
        </blockquote>
        
        <div className="flex items-start gap-2 mt-4">
          <CornerDownRight className="w-5 h-5 text-gold mt-1 shrink-0" />
          <p className="text-gray-700">
            {meaning}
          </p>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-[url('/floral-motif.svg')] bg-repeat opacity-5 pointer-events-none"></div>
    </div>
  );
};

export default SacredSloka;


import React from "react";

const BackgroundDecoration = () => {
  return (
    <>
      {/* Top right corner decoration */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 bg-contain bg-no-repeat opacity-20 pointer-events-none z-0"
        style={{ backgroundImage: "url('/decorative-corner.svg')" }}
      />
      
      {/* Bottom left corner decoration */}
      <div 
        className="absolute bottom-0 left-0 w-64 h-64 bg-contain bg-no-repeat opacity-20 pointer-events-none z-0"
        style={{ backgroundImage: "url('/decorative-corner.svg')", transform: "rotate(180deg)" }}
      />
      
      {/* Floating patterns */}
      {[...Array(5)].map((_, index) => (
        <div 
          key={index}
          className="absolute bg-contain bg-no-repeat opacity-15 pointer-events-none animate-float"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundImage: "url('/floral-motif.svg')",
            animationDelay: `${index * 0.7}s`,
            animationDuration: `${Math.random() * 3 + 5}s`
          }}
        />
      ))}
      
      {/* Background subtle texture */}
      <div className="absolute inset-0 bg-repeat opacity-15 pointer-events-none z-0"
           style={{ backgroundImage: "url('/texture-bg.svg')", backgroundSize: "200px" }}
      />
    </>
  );
};

export default BackgroundDecoration;

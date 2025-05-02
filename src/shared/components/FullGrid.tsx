import React from "react";
interface FullGridProps {
  children: React.ReactNode;
}
function FullGrid({ children }: FullGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
      {children}
    </div>
  );
}

export default FullGrid;

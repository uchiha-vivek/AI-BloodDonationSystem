import React from "react";
import '../App.css'
// Define the props type for Loading
interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <div className="flex items-center justify-center mt-2">
          <div className="w-8 h-8 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default Loading;

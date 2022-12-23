import React from "react";

const Loading = () => {
  return (
    <div className="loading text-2xl absolute inset-0 bg-white backdrop-blur-md z-20 h-screen flex items-center justify-center">
      <div className="flex items-center">
        <div className="flex items-center justify-center space-x-2">
          <div
            className="spinner-border animate-spin inline-block w-6 h-6 border-4 border-violet-500 border-t-transparent rounded-full"
            role="status"
          >
            <span className="visually-hidden"></span>
          </div>
        </div>
        &ensp;
        <h1 className="text-violet-300">Loading ...</h1>
      </div>
    </div>
  );
};

export default Loading;

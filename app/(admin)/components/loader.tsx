"use client";

import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-full border-t-4 border-blue-500 border-solid h-16 w-16 animate-spin"></div>
    </div>
  );
};

export default Loader;

"use client";

export function useScreen() {
  if (typeof window === "undefined" || !window.innerWidth) {
    return;
  }
  
  const screenSizeBoolean = window.innerWidth < 768 ? false : true;

  return screenSizeBoolean;
}

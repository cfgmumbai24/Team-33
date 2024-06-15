

import React from "react";
export const PauseIcon = ({
  size = 12,
  width,
  height,
  strokeWidth = 1.5,
  fill = "none",
  ...props
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>

);
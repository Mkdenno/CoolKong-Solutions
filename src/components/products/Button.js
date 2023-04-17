import React from "react";

export const Button = ({
  primary,
  primaryColor,
  onPrimaryColor,
  outline,
  content,
}) => {
  return (
    <button
      style={{
        backgroundColor: primary ? primaryColor : "transparent",
        color: primary ? onPrimaryColor : primaryColor,
        border: outline ? `1px solid ${primaryColor}` : "none",
        borderRadius: "4px",
        outline: "none",
        padding: "0.5rem 1.5rem",
        margin: "0 1rem 0 0",
        fontSize: "14px"
      }}
    >
      {content}
    </button>
  );
};

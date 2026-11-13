import React from "react";

// Shared row keeps the existing reveal animation and row styling consistent.
export default function Row({ index, href, children, className = "" }) {
  const rowClassName = `exp row-reveal row-${index + 1} !p-1 ${className}`.trim();

  if (href) {
    return (
      <a
        className={rowClassName}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return <div className={rowClassName}>{children}</div>;
}

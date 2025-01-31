import * as React from "react";

export const ReactLogo = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-11.5 -10.23174 23 20.46348"
    {...props}
  >
    <title>React Logo</title>
    <circle cx="0" cy="0" r="2.05" fill="#9580d6" />
    <g stroke="#9580d6" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

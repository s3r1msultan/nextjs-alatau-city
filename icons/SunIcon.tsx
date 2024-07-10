import React from "react";

const SunIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" stroke="white" stroke-width="2" />
      <path d="M12 5V3" stroke="white" stroke-width="2" stroke-linecap="round" />
      <path d="M12 21V19" stroke="white" stroke-width="2" stroke-linecap="round" />
      <path d="M16.95 7.05025L18.3643 5.63603" stroke="white" stroke-width="2" stroke-linecap="round" />
      <path d="M5.63559 18.364L7.0498 16.9498" stroke="white" stroke-width="2" stroke-linecap="round" />
      <path d="M19 12L21 12" stroke="white" stroke-width="2" stroke-linecap="round" />
      <path d="M3 12L5 12" stroke="white" stroke-width="2" stroke-linecap="round" />
      <path d="M16.95 16.9497L18.3643 18.364" stroke="white" stroke-width="2" stroke-linecap="round" />
      <path d="M5.63559 5.63603L7.0498 7.05025" stroke="white" stroke-width="2" stroke-linecap="round" />
    </svg>
  );
};

export default SunIcon;

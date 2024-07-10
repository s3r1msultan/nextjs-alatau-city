import React from "react";

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 12L18.3536 11.6464L18.7071 12L18.3536 12.3536L18 12ZM6 12.5C5.72386 12.5 5.5 12.2761 5.5 12C5.5 11.7239 5.72386 11.5 6 11.5V12.5ZM14.3536 7.64645L18.3536 11.6464L17.6464 12.3536L13.6464 8.35355L14.3536 7.64645ZM18.3536 12.3536L14.3536 16.3536L13.6464 15.6464L17.6464 11.6464L18.3536 12.3536ZM18 12.5H6V11.5H18V12.5Z"
        fill="white"
      />
    </svg>
  );
};

export default ArrowRightIcon;

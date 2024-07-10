import { IContainerProps } from "@/constants/interfaces";
import React from "react";

const Container = ({ children, className, ...props }: IContainerProps) => {
  return (
    <div className={`${className} container mx-auto px-0`} {...props}>
      {children}
    </div>
  );
};

export default Container;

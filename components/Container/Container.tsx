import React from "react";

export interface IContainerProps {
	children: React.ReactNode;
	className?: string;
}

const Container = ({ children, className, ...props }: IContainerProps) => {
	return (
		<div className={`${className} container mx-auto px-0`} {...props}>
			{children}
			<div className="vertical_lines">
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
			</div>
		</div>
	);
};

export default Container;

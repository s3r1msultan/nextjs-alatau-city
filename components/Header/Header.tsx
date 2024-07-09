"use client";
import React, { useEffect } from "react";
import Container from "../Container/Container";

const Header = () => {
	const ref = React.useRef(null);
	useEffect(() => {
		window.addEventListener("scroll", handleScrollDown);
		return () => {
			window.removeEventListener("scroll", handleScrollDown);
		};
	}, []);
	const handleScrollUp = () => {};

	const handleScrollDown = () => {};
	return (
		<header className="header" ref={ref}>
			<Container>Header</Container>
		</header>
	);
};

export default Header;

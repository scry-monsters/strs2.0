import React, { ReactNode } from "react";

import NavBar from "../NavBar/NavBar";

interface Props {
	children: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<NavBar />
			{children}
		</>
	);
};

export default Layout;

import React from "react";

import NavBar from "../NavBar/NavBar";

const Layout = ({ children }: any) => {
	return (
		<div>
			<NavBar />
			{children}
		</div>
	);
};

export default Layout;

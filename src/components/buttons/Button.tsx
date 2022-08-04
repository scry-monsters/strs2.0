import React from "react";

interface Props {
	clickity: () => void;
	color: string;
	width: number;
	height: number;
}
const Button: React.FC<Props> = ({ clickity, color, width, height }) => {
	return (
		<button
			onClick={clickity}
			style={{ backgroundColor: color, width: width, height: height }}
		>
			Button
		</button>
	);
};

export default Button;

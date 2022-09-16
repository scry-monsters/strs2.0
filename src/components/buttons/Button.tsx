import React from "react";

interface Props {
	clickity: () => void;
	color: string;
	width: number;
	height: number;
	text: string;
}
const Button: React.FC<Props> = ({ clickity, color, width, height, text }) => {
	return (
		<button
			onClick={clickity}
			style={{
				backgroundColor: color,
				width: width,
				height: height,
				borderRadius: "10px",
			}}
		>
			<p>{text}</p>
		</button>
	);
};

export default Button;

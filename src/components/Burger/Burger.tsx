import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

const ITEM_HEIGHT = 48;

export default function BurgerMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				aria-label="more"
				id="long-button"
				aria-controls={open ? "long-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
				onClick={handleClick}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id="long-menu"
				MenuListProps={{
					"aria-labelledby": "long-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: "20ch",
					},
				}}
			>
				<Link
					to="https://github.com/scry-monsters/strs"
					style={{ textDecoration: "none", color: "black" }}
				>
					<MenuItem key="Source" selected={false} onClick={handleClose}>
						Git/Source
					</MenuItem>
				</Link>
				<Link
					to="https://www.linkedin.com/in/scry/"
					style={{ textDecoration: "none", color: "black" }}
				>
					<MenuItem key="Source" selected={false} onClick={handleClose}>
						LinkedIn
					</MenuItem>
				</Link>
			</Menu>
		</div>
	);
}

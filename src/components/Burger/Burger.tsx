import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import classes from "./Burger.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import classNames from "classnames";
import GitHub from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Fingerprint from "@mui/icons-material/Fingerprint";
import { Link } from "react-router-dom";

const drawerBleeding = 56;

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
}

const Root = styled("div")(({ theme }) => ({
	height: "100%",
	backgroundColor: "white",
}));

const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
	width: 30,
	height: 6,
	backgroundColor: "#ffc107",
	borderRadius: 3,
	position: "absolute",
	top: 8,
	left: "calc(50% - 15px)",
}));

export default function SwipeableEdgeDrawer(props: Props) {
	const { window } = props;
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	// This is used only for the example
	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Root>
			<CssBaseline />
			<Global
				styles={{
					".MuiDrawer-root > .MuiPaper-root": {
						height: `calc(50% - ${drawerBleeding}px)`,
						overflow: "visible",
					},
				}}
			/>
			<Box sx={{ textAlign: "center", pt: 1 }}>
				<Fingerprint onClick={toggleDrawer(true)}>Open</Fingerprint>
			</Box>
			<SwipeableDrawer
				container={container}
				anchor="bottom"
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				swipeAreaWidth={drawerBleeding}
				disableSwipeToOpen={false}
				ModalProps={{
					keepMounted: true,
				}}
			>
				<StyledBox
					sx={{
						position: "absolute",
						top: -drawerBleeding,
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
						visibility: "visible",
						right: 0,
						left: 0,
					}}
				>
					<Puller />
					<Typography sx={{ p: 2, color: "text.secondary" }}>
						<p>‎</p>
					</Typography>
				</StyledBox>
				<StyledBox
					sx={{
						px: 2,
						pb: 2,
						height: "100%",
						overflow: "auto",
					}}
				>
					<div className={classNames(classes.main__footer__container)}>
						<div className="container py-4">
							<div className="row">
								<div className="col-6  pt-3">
									<p>
										ONE MORE THING! <br /> If you have any stories of your own,
										please don&apos;t hesitate to write me on any of my social
										media platforms.
									</p>
								</div>
								<div className="col-6 d-flex flex-row justify-content-center align-items-center">
									<div className={classNames(classes.footer__icon, "")}>
										<Link to="https://www.instagram.com/scry_monsters/">
											<InstagramIcon />
										</Link>
									</div>
									<div className={classNames(classes.footer__icon, "")}>
										<Link to="mailto: krbnv.z@gmail.com">
											<GoogleIcon />
										</Link>
									</div>
									<div className={classNames(classes.footer__icon, "")}>
										<Link to="https://github.com/scry-monsters">
											<GitHub />
										</Link>
									</div>
									<div className={classNames(classes.footer__icon, "")}>
										<Link to="https://www.linkedin.com/in/scry/">
											<LinkedIn />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</StyledBox>
			</SwipeableDrawer>
		</Root>
	);
}

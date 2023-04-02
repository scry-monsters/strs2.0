import React from "react";
import {
	Button,
	Drawer,
	DrawerOverlay,
	DrawerBody,
	DrawerHeader,
	DrawerContent,
	useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const MyDrawer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button style={{ backgroundColor: "transparent" }} onClick={onOpen}>
				<HamburgerIcon />
			</Button>
			<Drawer placement="top" onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader className="text-center" borderBottomWidth="1px">
						Stories Menu
					</DrawerHeader>
					<DrawerBody>
						<Link to="/" onClick={() => onClose()}>
							<p>Home</p>
						</Link>
						<Link to={"/stories"} onClick={() => onClose()}>
							<p>Stories</p>
						</Link>
						<Link to={"/about"} onClick={() => onClose()}>
							<p>About</p>
						</Link>
						<Link to={"/socials"} onClick={() => onClose()}>
							<p>Socials</p>
						</Link>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default MyDrawer;

import React from "react";
import {
	RadioGroup,
	Button,
	Radio,
	Stack,
	Drawer,
	DrawerOverlay,
	DrawerBody,
	DrawerHeader,
	DrawerContent,
	useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

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
						<p>Home</p>
						<p>About</p>
						<p>Instagram</p>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default MyDrawer;

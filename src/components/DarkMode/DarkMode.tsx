import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const DarkMode = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Button size="sm" onClick={toggleColorMode}>
				{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
			</Button>
		</>
	);
};

export default DarkMode;

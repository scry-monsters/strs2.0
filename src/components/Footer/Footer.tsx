import React from "react";
import classes from "./Footer.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import classNames from "classnames";
import GitHub from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";

const Footer = () => {
	return (
		<div className={classNames(classes.main__footer__container)}>
			<div className="container py-4">
				<div className="row">
					<div className="col-6  pt-3">
						<p>
							ONE MORE THING! <br /> If you have any stories of your own, please
							don&apos;t hesitate to write me on any of my social media
							platforms.
						</p>
					</div>
					<div className="col-6 d-flex flex-row justify-content-center align-items-center">
						<div className={classNames(classes.footer__icon, "")}>
							<a href="https://www.instagram.com/scry_monsters/">
								<InstagramIcon />
							</a>
						</div>
						<div className={classNames(classes.footer__icon, "")}>
							<a href="mailto: krbnv.z@gmail.com">
								<GoogleIcon />
							</a>
						</div>
						<div className={classNames(classes.footer__icon, "")}>
							<a href="https://github.com/scry-monsters">
								<GitHub />
							</a>
						</div>
						<div className={classNames(classes.footer__icon, "")}>
							<a href="https://www.linkedin.com/in/scry/">
								<LinkedIn />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

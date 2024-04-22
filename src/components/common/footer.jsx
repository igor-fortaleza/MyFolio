import React, { useContext } from "react";
import { Link } from "react-router-dom";

import menus_names from "../../data/pages";
import { LanguageContext } from "../language/LanguageContext";

import "./styles/footer.css";

const Footer = () => {
	const { language } = useContext(LanguageContext);
	const menuText = language === "pt" ? menus_names.pt : menus_names.en;

	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">{menuText.home}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">{menuText.about}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">{menuText.projects}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/certificates">
								{menuText.certificates}
							</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/curses">{menuText.courses}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">{menuText.contact}</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2024 Igor Fortaleza. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;

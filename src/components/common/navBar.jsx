import React, { useContext } from "react";
import { Link } from "react-router-dom";

import menus_names from "../../data/pages";

import ThemeToggle from "../theme/toggle/ThemeToggle";
import LanguageChange from "../language/LanguageChange";

import { LanguageContext } from "../language/LanguageContext";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	const { language } = useContext(LanguageContext);
	const menutexts = language === "pt" ? menus_names.pt : menus_names.en;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">{menutexts.home}</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">{menutexts.about}</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">{menutexts.projects}</Link>
							</li>
							<li
								className={
									active === "certificates"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/certificates">
									{menutexts.certificates}
								</Link>
							</li>
							<li
								className={
									active === "curses"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/curses">{menutexts.courses}</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">{menutexts.contact}</Link>
							</li>
						</ul>
						<div className="options-wrapper">
							<ThemeToggle />
							<LanguageChange />
						</div>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;

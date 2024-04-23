import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import "./style/ThemeIcon.css";

const ThemeIcon = ({ iconType }) => {
	return (
		<div>
			{iconType === "light" ? (
				<div>
					<FaSun className="icon" />
				</div>
			) : (
				<div>
					<FaMoon className="icon" />
				</div>
			)}
		</div>
	);
};

export default ThemeIcon;

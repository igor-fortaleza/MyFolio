import React, { useState, useEffect } from "react";
import Toggle from "react-toggle";
import ThemeIcon from "../icon/ThemeIcon";

import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import "./styles/ThemeToggle.css";

const ThemeToggle = () => {
	const [theme, setTheme] = useState(
		window.localStorage.getItem("theme") || "dark"
	);

	const onThemeChanged = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	useEffect(() => {
		document.body.className = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<Toggle
			checked={theme === "dark"}
			icons={{
				checked: <ThemeIcon iconType={"light"} />,
				unchecked: <ThemeIcon iconType={"dark"} />,
			}}
			onChange={onThemeChanged}
			aria-label={`Change Theme to ${
				theme === "light" ? "dark" : "light"
			}`}
		/>
	);
};

export default ThemeToggle;

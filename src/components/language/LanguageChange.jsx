import React, { createContext, useState, useEffect, useContext } from "react";
import { GB, BR } from "country-flag-icons/react/3x2";

import "./styles/LanguageChange.css";

import { LanguageContext } from "./LanguageContext";

const LanguageChange = () => {
	const { language, toggleLanguage } = useContext(LanguageContext);

	return (
		<button
			onClick={toggleLanguage}
			style={{
				border: "none",
				background: "none",
				padding: 0,
				margin: 0,
			}}
		>
			{language === "pt" ? (
				<div
					className="flag-box"
					style={{ backgroundColor: "rgba(0,155, 59, 0.3)" }}
				>
					<div>
						<BR className="flag" title="Brasil" />
					</div>
					<div style={{ marginBottom: 2.5 }}>
						<text className="flag-text">PT</text>
					</div>
				</div>
			) : (
				<div
					className="flag-box"
					style={{ backgroundColor: "rgba(46, 82, 178, 0.3)" }}
				>
					<div>
						<GB className="flag" title="United Kingdom" />
					</div>
					<div style={{ marginBottom: 2.5 }}>
						<text className="flag-text">EN</text>
					</div>
				</div>
			)}
		</button>
	);
};

export default LanguageChange;

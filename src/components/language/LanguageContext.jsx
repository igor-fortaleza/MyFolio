import React, { createContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(
		localStorage.getItem("language") || "pt"
	);

	useEffect(() => {
		localStorage.setItem("language", language);
	}, [language]);

	const toggleLanguage = () => {
		setLanguage(language === "en" ? "pt" : "en");
	};

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export { LanguageProvider, LanguageContext };

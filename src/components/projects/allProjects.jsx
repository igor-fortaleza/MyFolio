import React, { useContext } from "react";

import Project from "./project";

import { LanguageContext } from "../language/LanguageContext";

import Info from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	const { language } = useContext(LanguageContext);
	const INFO = language === "pt" ? Info.INFO_pt : Info.INFO_en;
	return (
		<div className="all-projects-container">
			{INFO.projectsItems.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;

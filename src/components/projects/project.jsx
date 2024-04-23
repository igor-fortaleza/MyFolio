import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import styles from "../../data/styles.css";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, privateProject } = props;

	const [isTrembling, setIsTrembling] = useState(false);
	const [trembleCount, setTrembleCount] = useState(0);
	const timeTremor = 3;

	const tremorClick = () => {
		setIsTrembling(true);
		setTimeout(() => setIsTrembling(false), 70);
		setTrembleCount(trembleCount + 1);
	};

	const handleAnimationEnd = () => {
		if (trembleCount < timeTremor && trembleCount > 0) {
			tremorClick();
		} else {
			setTrembleCount(0);
		}
	};

	return (
		<React.Fragment>
			<div
				className="project"
				onTransitionEnd={handleAnimationEnd}
				style={{
					transition: "transform 0.1s ease-in-out",
					transform: isTrembling ? "rotateZ(-5deg)" : "rotateZ(0deg)",
				}}
			>
				<Link
					onClick={privateProject ? tremorClick : null}
					to={privateProject ? null : link}
				>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;

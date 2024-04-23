import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/certificate.css";

const certificate = (props) => {
	const { language, title, description, date, link, logo } = props;

	return (
		<React.Fragment>
			<div className="homepage-certificate">
				<div className="homepage-certificate-header">
					<div className="homepage-certificate-logo">
						<img src={logo} alt="logo" />
					</div>
					<div>
						<div className="homepage-certificate-date">
							|&nbsp;&nbsp;&nbsp;{date}
						</div>
						<div className="homepage-certificate-title">
							{title}
						</div>
					</div>
				</div>
				<div className="homepage-certificate-content">
					<div className="homepage-certificate-description">
						{description}
					</div>

					<div className="homepage-certificate-link">
						<Link to={link} target="_blank">
							{language === "pt"
								? "Ver Certificado"
								: "Show Certificate"}{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default certificate;

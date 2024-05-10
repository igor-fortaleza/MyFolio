import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

import { LanguageContext } from "../language/LanguageContext";

import "./style/certificate.css";

const certificate = (props) => {
	const { language, logo, date, title, description, link, link_course } =
		props;

	return (
		<React.Fragment>
			<div className="certificate">
				<div className="certificate-left-side">
					<div className="certificate-date">{date}</div>
				</div>

				<Link to={link_course} target="_blank">
					<div className="certificate-right-side">
						<div className="certificate-title">{title}</div>
						<div className="certificate-description">
							{description}
						</div>
						<Link to={link} target="_blank">
							<div className="certificate-link-wrapper">
								<div className="certificate-link">
									<FontAwesomeIcon
										style={{
											fontSize: "15px",
											marginRight: 5,
										}}
										icon={faCertificate}
									/>
									{language === "pt"
										? "Ver certificado"
										: "Show Certificate"}{" "}
								</div>
							</div>
						</Link>
					</div>
				</Link>
				<div className="certificate-logo">
					<img src={logo} alt="logo" />
				</div>
			</div>
		</React.Fragment>
	);
};

export default certificate;

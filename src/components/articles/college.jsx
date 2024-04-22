import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/college.css";

const college = (props) => {
	const { date, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="college">
				{/* <div className="college-left-side">
					<div className="college-date">{date}</div>
				</div> */}

				<Link to={link} target="_blank">
					<div className="college-right-side">
						<div className="college-title">{title}</div>
						<div className="college-description">{description}</div>
						<div className="college-link">
							Ver certificado{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default college;

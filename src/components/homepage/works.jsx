import React, { useContext } from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import { LanguageContext } from "../language/LanguageContext";

import "./styles/works.css";

const Works = () => {
	const { language } = useContext(LanguageContext);
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title={language === "pt" ? "Atuação" : "Work"}
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={`${process.env.PUBLIC_URL}/yamaha_logo.png`}
								alt="yamaha"
								className="work-image"
							/>

							<div className="work-describe">
								<h1 className="work-title">
									Banco Yamaha Motors
								</h1>
								<div className="work-subtitle">
									Software Engineer
								</div>
								<p className="work-duration">2022 - 2024</p>
							</div>
						</div>
						<div className="work">
							<img
								src={`${process.env.PUBLIC_URL}/interfile_logo.jpg`}
								alt="interfile"
								className="work-image"
							/>

							<div className="work-describe">
								<h1 className="work-title">
									Interfile Services BPO
								</h1>
								<div className="work-subtitle">
									Software Engineer
								</div>
								<p className="work-duration">2019 - 2022</p>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

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
								src="./yamaha_logo.png"
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
								<p className="work-duration">2022 - Present</p>
							</div>
						</div>
						<div className="work">
							<img
								src="./interfile_logo.png"
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
const Worksbkp = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./yamaha_logo.png"
								alt="yamaha"
								className="work-image"
							/>

							<div className="work-describe">
								<h1 className="work-title">Banco Yamaha</h1>
								<p className="work-subtitle">
									Software Engineer
								</p>
								<p className="work-duration">2022 - Present</p>
							</div>
						</div>

						<div className="work">
							<img
								src="./interfile_logo.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Interfile</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

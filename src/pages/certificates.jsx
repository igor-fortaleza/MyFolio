import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Certificate from "../components/articles/certificate";
import College from "../components/articles/college";

import Info from "../data/user";
import SEO from "../data/seo";
import colleges from "../data/colleges";
import certificates from "../data/certificates";

import { LanguageContext } from "../components/language/LanguageContext";

import "./styles/certificates.css";

const Subtitles = {
	pt: {
		degrees: "Formações",
		certifications: "Certificações",
	},
	en: {
		degrees: "Degrees",
		certifications: "Certifications",
	},
};

const Certificates = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "certificates");
	const { language } = useContext(LanguageContext);

	const subtitles = language === "pt" ? Subtitles.pt : Subtitles.en;

	const myCertificates =
		language === "pt"
			? certificates.myCertificates_pt
			: certificates.myCertificates_en;

	const myColleges =
		language === "pt" ? colleges.myColleges_pt : colleges.myColleges_en;

	const INFO = language === "pt" ? Info.INFO_pt : Info.INFO_en;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="certificates" />
				<div className="content-wrapper">
					<div className="certificates-logo-container">
						<div className="certificates-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="certificates-main-container">
						<div className="title certificates-title">
							{INFO.certificates.title}
						</div>

						<div className="subtitle certificates-subtitle">
							{INFO.certificates.description}
						</div>

						<div className="college-container">
							<div className="show-subtitle">
								{subtitles.degrees}
							</div>
							<div className="certificates-wrapper">
								{myColleges.map((college, index) => (
									<div
										className="colleges-colleges"
										key={(index + 1).toString()}
									>
										<College
											key={(index + 1).toString()}
											date={college.date}
											title={college.title}
											description={college.description}
											link={college.link}
										/>
									</div>
								))}
							</div>
						</div>

						<div className="college-container">
							<div className="show-subtitle">
								{subtitles.certifications}
							</div>
							<div className="certificates-wrapper">
								{myCertificates.map((certificate, index) => (
									<div
										className="certificates-certificates"
										key={(index + 1).toString()}
									>
										<Certificate
											key={(index + 1).toString()}
											date={certificate.date}
											title={certificate.title}
											description={
												certificate.description
											}
											logo={certificate.logo}
											link={certificate.link}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Certificates;

import React, { useEffect, useContext } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Certificate from "../components/articles/certificate";

import Info from "../data/user";
import SEO from "../data/seo";
import curses from "../data/curses";

import { LanguageContext } from "../components/language/LanguageContext";

import "./styles/curses.css";

const Subtitles = {
	pt: {
		first: "SISTEMAS",
		second: "DADOS",
		third: "INOVAÇÃO",
	},
	en: {
		first: "APPLICATIONS",
		second: "DATA",
		third: "INNOVATION",
	},
};

const Curses = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "curses");

	const { language } = useContext(LanguageContext);

	const myCurses =
		language === "pt" ? curses.myCurses_pt : curses.myCurses_en;

	const INFO = language === "pt" ? Info.INFO_pt : Info.INFO_en;

	const subtitles = language === "pt" ? Subtitles.pt : Subtitles.en;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Cursos | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="curses" />
				<div className="content-wrapper">
					<div className="my-logo-container">
						<div className="my-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="courses-main-container">
						<div className="title articles-title">
							{INFO.curses.title}
						</div>

						<div className="subtitle articles-subtitle">
							{INFO.curses.description}
						</div>

						<div className="courses-container">
							<div className="container-subtitle">
								<div className="line-subtitle space-chronological" />
								<div className="subtitle-text">
									{subtitles.first}
								</div>
							</div>
							<div className="courses-wrapper">
								{myCurses
									.filter((i) => i.category === "Programming")
									.map((curse, index) => (
										<div
											className="certificate-items"
											key={(index + 1).toString()}
										>
											<Certificate
												key={(index + 1).toString()}
												language={language}
												date={curse.date}
												title={curse.title}
												description={curse.description}
												logo={curse.logo}
												link={curse.link}
												link_course={curse.link_course}
											/>
										</div>
									))}
							</div>
							<div className="container-subtitle">
								<div className="line-subtitle space-chronological" />
								<div className="subtitle-text">
									{subtitles.second}
								</div>
							</div>
							<div className="courses-wrapper">
								{myCurses
									.filter((i) => i.category === "Data")
									.map((curse, index) => (
										<div
											className="certificate-items"
											key={(index + 1).toString()}
										>
											<Certificate
												key={(index + 1).toString()}
												date={curse.date}
												title={curse.title}
												description={curse.description}
												logo={curse.logo}
												link={curse.link}
												link_course={curse.link_course}
											/>
										</div>
									))}
							</div>
							<div className="container-subtitle">
								<div className="line-subtitle space-chronological" />
								<div className="subtitle-text">
									{subtitles.third}
								</div>
							</div>
							<div className="courses-wrapper">
								{myCurses
									.filter((i) => i.category === "Inovation")
									.map((curse, index) => (
										<div
											className="certificate-items"
											key={(index + 1).toString()}
										>
											<Certificate
												key={(index + 1).toString()}
												date={curse.date}
												title={curse.title}
												description={curse.description}
												logo={curse.logo}
												link={curse.link}
												link_course={curse.link_course}
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

export default Curses;

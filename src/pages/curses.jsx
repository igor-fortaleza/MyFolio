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

const Curses = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "curses");

	const { language } = useContext(LanguageContext);

	const myCurses =
		language === "pt" ? curses.myCurses_pt : curses.myCurses_en;

	const INFO = language === "pt" ? Info.INFO_pt : Info.INFO_en;

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
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
							{INFO.curses.title}
						</div>

						<div className="subtitle articles-subtitle">
							{INFO.curses.description}
						</div>

						<div className="articles-container">
							<div className="show-subtitle">Dados</div>
							<div className="articles-wrapper">
								{myCurses
									.filter((i) => i.category === "Data")
									.map((curse, index) => (
										<div
											className="articles-article"
											key={(index + 1).toString()}
										>
											<Certificate
												key={(index + 1).toString()}
												date={curse.date}
												title={curse.title}
												description={curse.description}
												logo={curse.logo}
												link={curse.link}
											/>
										</div>
									))}
							</div>
							<div className="show-subtitle">Programação</div>
							<div className="articles-wrapper">
								{myCurses
									.filter((i) => i.category === "Programming")
									.map((curse, index) => (
										<div
											className="articles-article"
											key={(index + 1).toString()}
										>
											<Certificate
												key={(index + 1).toString()}
												date={curse.date}
												title={curse.title}
												description={curse.description}
												logo={curse.logo}
												link={curse.link}
											/>
										</div>
									))}
							</div>
							<div className="show-subtitle">Inovação</div>
							<div className="articles-wrapper">
								{myCurses
									.filter((i) => i.category === "Inovation")
									.map((curse, index) => (
										<div
											className="articles-article"
											key={(index + 1).toString()}
										>
											<Certificate
												key={(index + 1).toString()}
												date={curse.date}
												title={curse.title}
												description={curse.description}
												logo={curse.logo}
												link={curse.link}
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

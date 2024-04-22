import React, { useContext } from "react";
import INFO from "./user";

import { LanguageContext } from "../components/language/LanguageContext";

const informations_pt = {
	title: "Entre em Contato e Compartilhe Suas Ideias",
	description1:
		"Agradeço pelo seu interesse em acessar este meu portfólio. Estou aberto para comentários, perguntas e sugestões. Se você tiver uma pergunta ou comentário específico, sinta-se à vontade para me enviar um e - mail diretamente para ",
	description2:
		"Faço um esforço para responder a todas as mensagens dentro de 24 horas, embora possa demorar mais durante períodos de maior movimento. Por fim, se preferir se conectar nas redes sociais, você pode me encontrar em",
	description3:
		"Eu interajo com todas todas as interações, então não hesite em entrar em contato. Obrigado novamente pelo seu interesse e estou ansioso para ouvir de você!",
};

const informations_en = {
	title: "Let's Talk: Get in Touch and Share Your Ideas",
	description1:
		"Thank you for your interest in accessing my portfolio. I am open to comments, questions, and suggestions. If you have a specific question or comment, feel free to email me directly at ",
	description2:
		"I make an effort to respond to all messages within 24 hours, although it may take longer during periods of higher traffic. Finally, if you prefer to connect on social media, you can find me at",
	description3:
		"I engage with all interactions, so please don't hesitate to reach out. Thank you again for your interest, and I look forward to hearing from you!",
};

function ShowBody() {
	const { language } = useContext(LanguageContext);
	const InfoPage = language === "pt" ? informations_pt : informations_en;

	return (
		<React.Fragment>
			<div className="title contact-title">{InfoPage.title}</div>

			<div className="subtitle contact-subtitle">
				<p>
					{InfoPage.description1}
					<a href={`mailto:${INFO.INFO_pt.main.email}`}>
						{INFO.INFO_pt.main.email}
					</a>
					{"."}
				</p>
				<p>
					{InfoPage.description2}{" "}
					<a
						href={INFO.INFO_pt.socials.linkedin}
						target="_blank"
						rel="noreferrer"
					>
						{INFO.INFO_pt.socials.linkedin_describe}
					</a>
					{"."}
				</p>
				<p>{InfoPage.description3}</p>
			</div>
		</React.Fragment>
	);
}

export default ShowBody;

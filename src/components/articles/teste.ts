import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/college.css";

class Eu {
	/**
	 *
	 */
	constructor(name: String) {
		super();
	}

	objetivo: Bollean = true;

	alcancada: Bollean = true;
}

const college = (props) => {
	var meta = new Eu("Igor A. Fortaleza");
	var dia = new Date("2023-01-01");

	if (meta.alcancada() === true) meta.objetivo = meta.objetivo * 2;

	dia.proximoDia();
};

export default college;

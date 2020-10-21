import React from "react";
import PropTypes from "prop-types";

export const Header = props => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<h1 className="display-4">{props.subtittle}</h1>
			<p>{props.text}</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Lee la notica aquí
				</a>
			</p>
		</div>
	);
};

Header.propTypes = {
	title: PropTypes.string,
	subtittle: PropTypes.string,
	text: PropTypes.string
};

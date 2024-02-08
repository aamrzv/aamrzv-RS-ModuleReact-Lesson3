import { InformationLayout } from './InformationLayout';
import React from 'react';
import { PropTypes } from 'prop-types';

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	const info = () => {
		if (isGameEnded) {
			return `Победа: ${currentPlayer} 🏆`;
		} else if (isDraw) {
			return 'Ничья 😖';
		} else {
			return currentPlayer;
		}
	};

	const playerTurn = () => {
		if (isGameEnded || isDraw) {
			return '';
		} else {
			return 'Ход игрока:';
		}
	};
	return <InformationLayout playerTurn={playerTurn} info={info} />;
};

Information.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};

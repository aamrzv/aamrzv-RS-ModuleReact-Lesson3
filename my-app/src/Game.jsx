import { GameLayout } from './components/GameLayout';
import { useState } from 'react';

const initializeField = () => {
	return [
		{ id: '0', name: '', style_win: false },
		{ id: '1', name: '', style_win: false },
		{ id: '2', name: '', style_win: false },
		{ id: '3', name: '', style_win: false },
		{ id: '4', name: '', style_win: false },
		{ id: '5', name: '', style_win: false },
		{ id: '6', name: '', style_win: false },
		{ id: '7', name: '', style_win: false },
		{ id: '8', name: '', style_win: false },
	];
};

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Горизонтальные линии
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Вертикальные линии
	[0, 4, 8],
	[2, 4, 6], // Диагональные линии
];

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [field, setField] = useState(initializeField());
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	const checkWin = () => {
		for (const pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (field[a].name && field[a].name === field[b].name && field[a].name === field[c].name) {
				field[a].style_win = true;
				field[b].style_win = true;
				field[c].style_win = true;
				return true;
			}
		}
		return false;
	};

	const checkDraw = () => {
		return field.every((cell) => cell.name !== '');
	};

	const handleBtnClick = (id) => {
		const newField = [...field];
		let moveIsMade = false;
		if (!field[id].name && !isGameEnded) {
			newField[id].name = currentPlayer;
			setField(newField);
			moveIsMade = true;
		}

		if (checkWin()) {
			setIsGameEnded(true);
		} else if (checkDraw()) {
			setIsDraw(true);
		} else if (moveIsMade) {
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}
	};

	const handleRestartClick = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(initializeField());
	};

	return (
		<div>
			<GameLayout
				currentPlayer={currentPlayer}
				field={field}
				btnClick={handleBtnClick}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				onRestartClick={handleRestartClick}
			/>
		</div>
	);
};

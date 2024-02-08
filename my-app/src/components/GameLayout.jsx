import styles from './GameLayout.module.css';
import { Information } from './Information/Information';
import { Field } from './Field/Field';
import { PropTypes } from 'prop-types';

export const GameLayout = ({ currentPlayer, field, btnClick, isGameEnded, isDraw, onRestartClick }) => {
	return (
		<div className={styles.conteiner}>
			<button className={isGameEnded || isDraw ? `${styles.btn} ${styles.btnAn}` : styles.btn} onClick={() => onRestartClick()}>
				Начать заново
			</button>
			<Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} onRestartClick={onRestartClick} />
			<Field field={field} btnClick={btnClick} />
		</div>
	);
};

Field.propTypes = {
	currentPlayer: PropTypes.string,
	field: PropTypes.array,
	btnClick: PropTypes.func,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	onRestartClick: PropTypes.func,
};

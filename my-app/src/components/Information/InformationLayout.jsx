import styles from './InformationLayout.module.css';
import { PropTypes } from 'prop-types';

export const InformationLayout = ({ playerTurn, info }) => {
	return (
		<div className={styles.block}>
			<h4>{playerTurn()}</h4> {info()}
		</div>
	);
};

InformationLayout.propTypes = {
	playerTurn: PropTypes.func,
	info: PropTypes.func,
};

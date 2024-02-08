import { FieldLayout } from './FieldLayout';
import { PropTypes } from 'prop-types';

export const Field = ({ field, btnClick }) => {
	return <FieldLayout field={field} btnClick={btnClick} />;
};

Field.propTypes = {
	field: PropTypes.array,
	btnClick: PropTypes.func,
};

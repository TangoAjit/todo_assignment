import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = props => {
    const { title, checked, onClick } = props;
    const checkBoxClickHandler = ({ target: { checked }}) => {
        onClick(checked);
    }
    return (
        <React.Fragment>
            <input type="checkbox" checked={checked} onClick={checkBoxClickHandler} />
            <label>{title}</label>
        </React.Fragment>
    )
};

CheckBox.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    checked: PropTypes.bool,
    onClick: PropTypes.func
}

CheckBox.defaultProps = {
    title: '',
    checked: false,
    onClick: () => {}
}

export default CheckBox;

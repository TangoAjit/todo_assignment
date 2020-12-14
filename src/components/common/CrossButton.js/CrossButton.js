import React from 'react';
import PropTypes from 'prop-types';
import './CrossButton.css';

const CrossButton = props => {
    const { onClick } = props;
    const onClickHandler = event => {
        if(event.preventDefault) {
            event.preventDefault();
        }
        onClick();
    }
    return <button className="cross_button" onClick={onClickHandler}>X</button>

};

CrossButton.propTypes = {
    onClick: PropTypes.func
}

CrossButton.defaultProps = {
    onClick: () => {}
}

export default CrossButton;

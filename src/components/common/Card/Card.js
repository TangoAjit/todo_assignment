import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = props => {
    const  { Comp } = props;
    return (
        <div className="card">
            <Comp />
        </div>
    )
};

Card.propTypes = {
    Comp: PropTypes.element
}

Card.defaultProps = {
    Comp: () => undefined
}

export default Card;

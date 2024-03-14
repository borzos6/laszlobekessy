import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.module.scss';

const Divider = (props) => {
    return (
        <div className={`${styles.divider} ${props.text ? styles.withText : ''}`}>
            <span className="has-text-centered">{props.text}</span>
        </div>
    );
};

Divider.propTypes = {
    text: PropTypes.string,
};

export { Divider };

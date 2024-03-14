import * as React from 'react';
import PropTypes from 'prop-types';
import { Content } from 'react-bulma-components';
import * as styles from './styles.module.scss';

const TechStackIcon = (props) => {
    return (
        <Content small="true" className="has-text-centered">
            <div className={`${styles.iconWrap}`}>
                <i className={`devicon-${props.devicon} colored ${styles.icon}`}></i>
            </div>

            <small className={styles.description}>{props.name}</small>
        </Content>
    );
};

TechStackIcon.propTypes = {
    devicon: PropTypes.string,
    name: PropTypes.string,
};

export { TechStackIcon };

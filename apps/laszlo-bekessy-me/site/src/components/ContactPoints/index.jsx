import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config as FontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope, faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons';
import * as styles from './styles.module.scss';

const ContactPoints = () => {
    // Prevent flashload (huge icons on pageload)
    FontAwesomeConfig.autoAddCss = false;

    return (
        <h2 className={`is-size-3 is-muted ${styles.container}`}>
            <a
                href="https://linkedin.com/in/laszlo-bekessy"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            &nbsp;
            <a href="https://github.com/borzos6" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            &nbsp;
            <a href="mailto:laszlo@bekessy.me" target="_blank" rel="noreferrer" aria-label="Contact email">
                <FontAwesomeIcon icon={faSquareEnvelope} />
            </a>
            &nbsp;
            <a href="/pdf/laszlo-bekessy-cv-en.pdf" target="_blank" rel="noreferrer" aria-label="CV in PDF">
                <FontAwesomeIcon icon={faSquarePollHorizontal} />
            </a>
        </h2>
    );
};

export { ContactPoints };

import * as React from 'react';
import { Image } from 'react-bulma-components';
import { standingProfilePicture } from '../../images';
import * as styles from './styles.module.scss';

const IntroPicture = () => {
    return (
        <div className={styles.container}>
            <Image src={standingProfilePicture} className={`${styles.profile}`} alt="Profile" size="2by3" />
        </div>
    );
};

export { IntroPicture };

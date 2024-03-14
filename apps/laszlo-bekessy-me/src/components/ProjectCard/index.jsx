import * as React from 'react';
import PropTypes from 'prop-types';
import { Image, Content, Media, Box } from 'react-bulma-components';
import * as styles from './styles.module.scss';

const ProjectCard = (props) => {
    return (
        <Box className={`${styles.box}`}>
            <Media renderAs="article">
                <Media.Item align="left">
                    <Image src={props.logo} size={64} alt={`${props.name} project logo`} />
                </Media.Item>
                <Media.Item align="center">
                    <Content size="small">
                        <strong>{props.name}</strong>&nbsp;
                        {props.url && (
                            <span>
                                |{' '}
                                <a
                                    href={props.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`${props.name} site link`}>
                                    Visit site
                                </a>
                            </span>
                        )}
                        <br />
                        {props.children}
                    </Content>
                </Media.Item>
            </Media>
        </Box>
    );
};

ProjectCard.propTypes = {
    logo: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
};

export { ProjectCard };

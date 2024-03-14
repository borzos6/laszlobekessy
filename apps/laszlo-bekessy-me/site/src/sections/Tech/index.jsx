import * as React from 'react';
import { Container, Columns, Content } from 'react-bulma-components';
import { Splash, StrongestTechStack } from '../../components';
import { watercolorSplash2 } from '../../images';

const Tech = () => {
    return (
        <Container className="bg-gray-5p pt-0 mb-5 px-1">
            <Columns className="side-feature is-mobile mt-0" vCentered={true}>
                <Columns.Column
                    tablet={{
                        size: 7,
                    }}
                    desktop={{
                        size: 6,
                        offset: 1,
                    }}>
                    <h1 className="is-size-3-desktop is-size-4-tablet mb-0 pl-5 pt-4 title is-title-reveal">
                        <span className="has-text-info">CTO, architect, </span>engineer for{' '}
                        {`${new Date().getFullYear() - 2004}`}+ years
                    </h1>
                    <Content>
                        <ul>
                            <li>
                                <span className="has-text-weight-bold">Full-stack generalist</span>, touched and worked
                                with every aspect of software engineering
                            </li>
                            <li>
                                Specialist in <span className="has-text-weight-bold">vertical integration: </span>
                                comfortably working on every aspect, from infrastructure to UX design
                            </li>
                            <li>
                                <span className="has-text-weight-bold">Tech lead with human touch</span> – focuses on
                                people-first management as a leader
                            </li>
                        </ul>
                    </Content>
                </Columns.Column>
                <Columns.Column
                    mobile={{
                        size: 8,
                        offset: 2,
                    }}
                    tablet={{
                        size: 5,
                    }}
                    desktop={{
                        size: 4,
                    }}>
                    <Splash sentence="I'm a tech generalist" imageSrc={watercolorSplash2} size="1by1" isLeft={false} />
                </Columns.Column>
                <Columns.Column
                    mobile={{
                        size: 12,
                    }}
                    desktop={{
                        size: 10,
                        offset: 1,
                    }}>
                    <StrongestTechStack />
                </Columns.Column>
            </Columns>
        </Container>
    );
};

export { Tech };

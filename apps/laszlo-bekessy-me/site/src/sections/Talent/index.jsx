import * as React from 'react';
import { Container, Columns, Content } from 'react-bulma-components';
import { Splash, Testimonials } from '../../components';
import { watercolorSplash3 } from '../../images';

const Talent = () => {
    return (
        <Container className="bg-gray-5p pt-0 mb-5 px-1">
            <Columns className="side-feature " vCentered={true}>
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
                        offset: 1,
                    }}>
                    <Splash sentence="I help the talented" imageSrc={watercolorSplash3} size="1by1" isLeft={true} />
                </Columns.Column>
                <Columns.Column
                    tablet={{
                        size: 7,
                    }}
                    desktop={{
                        size: 6,
                    }}>
                    <h1 className="is-size-3-desktop is-size-4-tablet mb-0 pl-5 pt-4 title is-title-reveal">
                        <span className="has-text-success">500+ hours </span>spent in teaching and coaching
                    </h1>
                    <Content>
                        <ul>
                            <li>
                                Extensive experience in <span className="has-text-weight-bold">leading workshops</span>{' '}
                                for 3 to 150 people
                            </li>
                            <li>
                                Helped team leaders on{' '}
                                <span className="has-text-weight-bold">1-on-1 leadership coachings</span> for more than{' '}
                                {`${new Date().getFullYear() - 2017}`} years
                            </li>
                            <li>
                                <span className="has-text-weight-bold">Published many practical tools</span> and
                                curriculum for fellow business founders
                            </li>
                            <li>
                                <span className="has-text-weight-bold">Startup & Scaleup Board Member </span>of the
                                Association of the Digital Economy in Hungary
                            </li>
                        </ul>
                    </Content>
                </Columns.Column>
                <Columns.Column className="px-1">
                    <Testimonials />
                </Columns.Column>
            </Columns>
        </Container>
    );
};

export { Talent };

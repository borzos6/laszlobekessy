import * as React from 'react';
import { Hero, Container, Columns } from 'react-bulma-components';
import { ContactPoints, IntroPicture } from '../../components';

const Intro = () => {
    return (
        <Hero>
            <Hero.Body>
                <Container>
                    <Columns vCentered={true} className="is-mobile">
                        <Columns.Column
                            mobile={{ size: 7 }}
                            tablet={{ size: 4, offset: 1 }}
                            className="landing-caption has-text-centered">
                            <p className="subtitle is-size-5-tablet is-size-6-mobile is-muted">Hello. I am</p>
                            <h2 className="title is-size-2-tablet is-size-4-touch is-bold">
                                László <br /> Békéssy
                            </h2>
                            <ContactPoints />
                        </Columns.Column>
                        <Columns.Column mobile={{ size: 5 }} tablet={{ size: 6, offset: 1 }}>
                            <IntroPicture />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Hero.Body>
        </Hero>
    );
};

export { Intro };

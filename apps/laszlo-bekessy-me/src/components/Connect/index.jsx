import * as React from 'react';
import { Hero, Container, Columns } from 'react-bulma-components';
import { ContactPoints } from '..';

const Connect = () => {
    return (
        <Hero size="small">
            <Hero.Body>
                <Container>
                    <Columns vCentered={true}>
                        <Columns.Column size={10} offset={1} className="landing-caption has-text-centered">
                            <h2 className="title is-size-3 is-muted">Let's connect!</h2>
                            <h3 className="subtitle is-size-5 is-muted">here's how:</h3>
                            <ContactPoints />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Hero.Body>
        </Hero>
    );
};

export { Connect };

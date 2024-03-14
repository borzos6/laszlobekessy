import * as React from 'react';
import { Content, Hero, Footer, Container, Image } from 'react-bulma-components';
import { watercolorSplash4 } from '../../images';
import * as styles from './styles.module.scss';

const PageFooter = () => {
  return (
    <Hero size="small" className={styles.footer}>
      <Image src={watercolorSplash4} className={styles.background} alt="Footer watercolor image" />
      <Hero.Footer>
        <Footer>
          <Container>
            <Content className="has-text-centered">
              <p>
                Made by László Békéssy. The source code is licensed under
                <a
                  href="http://opensource.org/licenses/mit-license.php"
                  className="has-text-weight-bold has-text-primary"
                  aria-label="MIT License">
                  {' '}
                  MIT
                </a>
                . <br />
                The website content is licensed{' '}
                <a
                  href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                  className="has-text-weight-bold has-text-primary"
                  aria-label="Creative Commons License">
                  CC BY NC SA 4.0
                </a>
                .
                <br />
                Follow the link for the{' '}
                <a
                  href="https://github.com/borzos6/laszlobekessy/"
                  className="has-text-weight-bold has-text-primary"
                  aria-label="Page Source Code">
                  Source Code
                </a>
                .
              </p>
            </Content>
          </Container>
        </Footer>
      </Hero.Footer>
    </Hero>
  );
};

export { PageFooter };

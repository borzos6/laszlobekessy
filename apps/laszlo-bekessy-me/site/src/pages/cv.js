import React from 'react';
import { Link } from 'gatsby';
import { Content, Image } from 'react-bulma-components';
import { Layout, ContactPoints, Divider } from '../components';
import { roundedProfilePicture } from '../images';

const CurriculumVitae = () => {
    return (
        <Layout>
            <Content className="has-text-centered pt-6">
                <Divider />
                <Image src={roundedProfilePicture} className="is-inline-block mb-0 mt-2" size={128} alt="Profile" />
                <h2 className="title is-size-3 is-bold mt-0">László Békéssy</h2>
                <div className="m-0">
                    <ContactPoints />
                </div>
                <Divider />
                <h3 className="is-text-4 mb-1 mt-4">Get my CV</h3>
                <p>
                    <a href="/pdf/laszlo-bekessy-cv-en.pdf" target="_blank" rel="noreferrer" aria-label="CV in PDF">
                        <strong>[in pdf]</strong>
                    </a>{' '}
                    or{' '}
                    <a
                        href="https://docs.google.com/document/d/1bxDr1KiRL1LIBUfoxX2dbu7nWLKkzCcqoUPVbcYbjO0"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="CV in Docs">
                        <strong>[in docs]</strong>
                    </a>{' '}
                    <br />
                    or <Link to="/">[go back]</Link> to the main page
                </p>
                <Divider />
            </Content>
        </Layout>
    );
};

export default CurriculumVitae;

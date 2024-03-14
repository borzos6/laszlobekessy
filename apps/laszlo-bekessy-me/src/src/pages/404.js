import React from 'react';
import { Link } from 'gatsby';
import { Content, Image } from 'react-bulma-components';
import { Layout, ContactPoints, Divider } from '../components';
import { roundedProfilePicture } from '../images';

const NotFound = () => {
    return (
        <Layout>
            <Content className="has-text-centered pt-6">
                <h1 className="has-text-weight-bold">Well, this page doesn't exist</h1>
                <p small={true}>but probably you've been looking for this</p>
                <Divider />
                <Image src={roundedProfilePicture} className="is-inline-block mb-0 mt-2" size={128} alt="Profile" />
                <h2 className="title is-size-3 is-bold mt-0">László Békéssy</h2>
                <div className="m-0">
                    <ContactPoints />
                </div>
                <Divider />
                <div className="mt-6">
                    <Link to="/">→ Let's go back to the main page ←</Link>
                </div>
            </Content>

            <div></div>

            <p></p>
        </Layout>
    );
};

export default NotFound;

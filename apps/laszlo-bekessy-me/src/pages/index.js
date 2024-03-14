import * as React from 'react';
import { Layout, Connect, PageFooter, Seo } from '../components';
import { Intro, Lead, Tech, Talent } from '../sections';
import { Divider } from '../components';

const IndexPage = () => {
    return (
        <Layout>
            <Intro />
            <Divider text="and this is what I do" />
            <Lead />
            <div className="pt-6"></div>
            <Tech />
            <div className="pt-6"></div>
            <Talent />
            <Divider />
            <Connect />
            <Divider />
            <PageFooter />
        </Layout>
    );
};

export const Head = () => <Seo />;

export default IndexPage;

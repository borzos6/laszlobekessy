import React from 'react';

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/nexa-bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="nexaBold"
        />,
        <link
            rel="preload"
            href="/fonts/nexa-light.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="nexaLight"
        />,
    ]);
    setHtmlAttributes({ lang: 'en' });
};

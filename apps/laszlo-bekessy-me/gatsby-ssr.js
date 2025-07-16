import React from 'react';

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHeadComponents([
    <link rel="preconnect" href="https://fonts.googleapis.com" key="googleFontsPreconnect" />,
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
      key="googleFontsGstaticPreconnect"
    />,
    <link
      href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
      rel="stylesheet"
      key="lexendFont"
    />,
  ]);
  setHtmlAttributes({ lang: 'en' });
};

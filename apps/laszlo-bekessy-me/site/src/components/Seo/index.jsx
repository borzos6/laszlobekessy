import React from 'react';
import PropTypes from 'prop-types';
import { useSiteMetadata } from '../../hooks/use-site-metadata';
import { roundedProfilePicture } from '../../images';

const Seo = (props) => {
    const { title: defaultTitle, description: defaultDescription, siteUrl, schema } = useSiteMetadata();

    const seo = {
        title: props.title || defaultTitle,
        description: props.description || defaultDescription,
        image: `${siteUrl}${roundedProfilePicture}`,
        url: `${siteUrl}${props.pathname || ``}`,
        schema: schema,
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:locale" content="en-US" />
            <meta property="og:locale:alternate" content="hu-HU" />
            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:image:alt" content="Profile picture" />
            <script type="application/ld+json">{`
                {
                    "@context": "http://schema.org",
                    "@type": "Person",
                    "name": "${seo.schema.name}",
                    "email": "${seo.schema.email}",
                    "image": "${seo.image}",
                    "nationality": "Hungarian",
                    "url": "${seo.url}",
                    "sameAs" : [ "https://linkedin.com/in/laszlo-bekessy",
                        "https://github.com/borzos6"
                    ]
                }
            `}</script>
            <link rel="icon" href={seo.image} />
            {props.children}
        </>
    );
};

Seo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    pathname: PropTypes.string,
};

export { Seo };

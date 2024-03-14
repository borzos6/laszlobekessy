import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Columns } from 'react-bulma-components';
import { TechStackIcon } from '..';

const StrongestTechStack = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentJson {
                nodes {
                    strongestActualTechStack {
                        devicon
                        name
                    }
                }
            }
        }
    `);
    return (
        <div className="px-5">
            <h2 className="title mb-0 is-size-5">
                My actual <span className="has-text-info">strongest</span> stack
            </h2>
            <Columns className="mt-4 pl-3 is-mobile">
                {data.allContentJson.nodes[0].strongestActualTechStack.map((node) => (
                    <TechStackIcon key={node.name} devicon={node.devicon} name={node.name} />
                ))}
            </Columns>
        </div>
    );
};

export { StrongestTechStack };

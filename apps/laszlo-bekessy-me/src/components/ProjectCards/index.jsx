import * as React from 'react';
import { Container, Columns, Content } from 'react-bulma-components';
import { ProjectCard } from '..';
import {
  projectSteamAcademy,
  projectCodeBerry,
  projectYearCompass,
  projectInvisibleUniversity,
  projectABF,
} from '../../images';

const ProjectCards = () => {
  return (
    <Container>
      <Columns.Column>
        <Columns>
          <Columns.Column size={6} className="py-1">
            <ProjectCard logo={projectSteamAcademy} name="STEAM Academy" url="https://steamacademy.pro">
              Currently <span className="has-text-weight-bold gray">CTO </span> and{' '}
              <span className="has-text-weight-bold gray">Head of Product </span>
              for an EdTech startup and a self-developed Robot. Raised $5M in VC funding,
              <span className="has-text-weight-bold gray"> growing rapidly in the USA. </span>
            </ProjectCard>
          </Columns.Column>
          <Columns.Column size={6} className="py-1">
            <ProjectCard logo={projectCodeBerry} name="CodeBerry School" url="https://codeberryschool.com">
              <span className="has-text-weight-bold gray">Co-founder, CEO, CTO </span>
              for a team of 40 from 14 countries.
              <span className="has-text-weight-bold gray"> Raised €1.5M </span>
              VC funding in three rounds. 100% remote team.
            </ProjectCard>
          </Columns.Column>
          <Columns.Column size={6} className="py-1">
            <ProjectCard logo={projectYearCompass} name="YearCompass" url="https://yearcompass.com">
              <span className="has-text-weight-bold gray">Co-founder and Project Lead </span>
              for a not-for-profit. Used by millions every year, translated to
              <span className="has-text-weight-bold gray"> 52 languages. </span>
              100% remote team.
            </ProjectCard>
          </Columns.Column>
          <Columns.Column size={6} className="py-1">
            <ProjectCard
              logo={projectInvisibleUniversity}
              name="Invisible University"
              url="https://lathatatlanegyetem.hu">
              <span className="has-text-weight-bold gray">Co-founder and Lead </span>
              of a <span className="has-text-weight-bold gray">soft-skill-learning </span>
              focused student organization led by hundreds of volunteers in 4 countries.
            </ProjectCard>
          </Columns.Column>
          <Columns.Column size={6} className="py-1">
            <ProjectCard logo={projectABF} name="ABF Informatics" url="">
              <span className="has-text-weight-bold gray">Co-founder CEO, CTO </span>
              for an SMB developing <span className="has-text-weight-bold gray"> patient-safety software </span>
              using self-generated code for the Hungarian Healthcare System.
            </ProjectCard>
          </Columns.Column>
        </Columns>
        <Content className="has-text-centered" size="small"></Content>
      </Columns.Column>
    </Container>
  );
};

export { ProjectCards };

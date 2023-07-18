import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "../styles/techStackClasses.css"

import ExternalLinkSVG from "./externalLinkSVG"

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  box-shadow: var(--border-shadow);
  border-radius: 8px;
  transition: 0.2s ease-in-out;

  & > div {
    flex-grow: 1;
    flex-basis: 0;
  }

  &:hover {
    box-shadow: var(--big-shadow);
  }

  @media only screen and (min-width: 576px) {
    flex-direction: row;

    :nth-child(even) {
      flex-direction: row-reverse;
    }
  }
  @media only screen and (min-width: 768px) {
    gap: 32px;
    padding: 32px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column !important;
  gap: 16px;
`

const CreditsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
`

const ProjectTitleContainer = styled.div`
  display: flex;
  gap: 8px;
`

const ProjectLink = styled.a`
  display: flex;
  justify-content: center;
  width: 16px;
  svg {
    fill: var(--text);
    width: 100%;
  }
`

const CreditLink = styled.a`
  position: relative;
  z-index: 2;

  padding: 2px;

  font-size: initial;
  font-weight: 700;
  text-decoration: none;

  white-space: nowrap;

  &::before {
    position: absolute;
    left: 0;
    bottom: 0px;
    z-index: -1;

    width: 100%;
    height: 2px;

    background-color: var(--mid-gray);

    transition: 0.2s ease all;
    content: "";
    white-space: normal;
  }

  &:hover {
    &::before {
      bottom: 4px;

      height: 18px;
    }
  }
`

const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  padding: 0;
  margin: 0;

  list-style: none;

  & li {
  }
`

const ColouredListItem = styled.li`
  padding: 8px;

  font-size: 12px;
  font-weight: 700;

  border-radius: 8px;
  box-shadow: var(--border-shadow);

  background-color: var(--text);
  color: var(--background);

  transition: 0.2s ease-in-out;

  cursor: default;

  &:hover {
    box-shadow: var(--mid-shadow);
  }
`

const StyledGatsbyImage = styled(GatsbyImage)`
  border-radius: 8px;
  @media only screen and (min-width: 576px) {
    max-width: 400px;
    max-height: 300px;
  }
`

export default function Project({ project }) {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              quality: 50
              aspectRatio: 1.33
              transformOptions: { cropFocus: ATTENTION }
            )
          }
          name
          publicURL
        }
      }
    }
  `)

  let image
  data.allFile.nodes.forEach(node => {
    if (node.name === project.childrenProjectsJson[0].slug) {
      image = getImage(node)
    }
  })

  return (
    <StyledArticle className="project invisible">
      {project.childrenProjectsJson[0].slug ? (
        <div>
          <StyledGatsbyImage
            image={image}
            alt="project-image"
            className="project-image"
          />
        </div>
      ) : (
        <></>
      )}
      <TextContainer>
        <ProjectTitleContainer>
          <h3>{project.childrenProjectsJson[0].title}</h3>
          <ProjectLink
            href={project.childrenProjectsJson[0].link}
            target="_blank"
            rel="noreferrer"
            aria-label="external link to app"
          >
            <ExternalLinkSVG />
          </ProjectLink>
        </ProjectTitleContainer>
        <p>{project.childrenProjectsJson[0].description}</p>
        {project.childrenProjectsJson[0].credits ? (
          <CreditsList aria-label="credits and resources">
            {project.childrenProjectsJson[0].credits.map((item, index) => (
              <li key={index}>
                {item.text}{" "}
                <span>
                  <CreditLink href={item.link} target="_blank" rel="noreferrer">
                    {item.name}
                  </CreditLink>
                </span>
              </li>
            ))}
          </CreditsList>
        ) : (
          <></>
        )}
        <UnorderedList aria-label="technology stack">
          {project.childrenProjectsJson[0].stack.map((item, index) => (
            <ColouredListItem key={index} className={`${item.class}`}>
              {item.name}
            </ColouredListItem>
          ))}
        </UnorderedList>
      </TextContainer>
    </StyledArticle>
  )
}

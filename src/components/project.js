import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ExternalLinkSVG from "./externalLinkSVG"

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  box-shadow: var(--border-shadow);
  border-radius: 8px;
  transition: 0.2s ease-in-out;

  & div {
    flex-grow: 1;
    flex-basis: 0;
  }

  &:hover {
    box-shadow: var(--big-shadow);
  }

  @media only screen and (min-width: 576px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 768px) {
    gap: 32px;
    padding: 32px;
  }
`

const CreditLink = styled.a`
  position: relative;
  z-index: 2;

  padding: 2px;

  font-size: initial;
  font-weight: 700;
  text-decoration: none;

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
  }

  &:hover {
    &::before {
      bottom: 3px;

      height: 16px;
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
    padding: 8px;

    font-size: 12px;
    font-weight: 700;

    border-radius: 8px;
    box-shadow: var(--border-shadow);

    transition: 0.2s ease-in-out;

    &:hover {
      box-shadow: var(--mid-shadow);
    }
  }
`

const ColouredListItem = styled.li`
  background-color: ${props => `#${props.b}`};
  color: ${props => `#${props.c}`};
`

const LinkListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;

  background-color: var(--text);

  cursor: pointer;

  a {
    display: flex;
    text-decoration: none;
    width: 12px;
    height: 12px;

    svg {
      fill: var(--background);
    }
  }
`

const StyledGatsbyImage = styled(GatsbyImage)`
  border-radius: 4px;
`

export default function Project({ project }) {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
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
    <StyledArticle>
      {project.childrenProjectsJson[0].slug ? (
        <div>
          <StyledGatsbyImage
            image={image}
            alt=""
            placeholder="blurred"
            quality="50"
            layout="fullWidth"
            className="project-image"
          />
        </div>
      ) : (
        <></>
      )}
      <div>
        <h4>{project.childrenProjectsJson[0].title}</h4>
        <p>{project.childrenProjectsJson[0].description}</p>
        {project.childrenProjectsJson[0].credits.map((item, index) => (
          <p key={index}>
            {item.text}{" "}
            <span>
              <CreditLink href={item.link}>{item.name}</CreditLink>
            </span>
          </p>
        ))}
        <UnorderedList>
          <LinkListItem>
            <a
              href={project.childrenProjectsJson[0].link}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLinkSVG />
            </a>
          </LinkListItem>
          {project.childrenProjectsJson[0].stack.map((item, index) => (
            <ColouredListItem key={index} b={item.background} c={item.color}>
              {item.name}
            </ColouredListItem>
          ))}
        </UnorderedList>
      </div>
    </StyledArticle>
  )
}

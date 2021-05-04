import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Project from "./project"

const ProjectsContainer = styled.section`
  padding: 16px;
`

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        nodes {
          childrenProjectsJson {
            credits {
              link
              name
              text
            }
            description
            link
            slug
            stack {
              background
              color
              name
            }
            title
          }
        }
      }
    }
  `)

  let projects = data.allFile.nodes

  return (
    <ProjectsContainer id="projects">
      <h1>Projects</h1>
      <ProjectList>
        {projects.map((project, index) => (
          <Project key={`project-${index}`} project={project} />
        ))}
      </ProjectList>
    </ProjectsContainer>
  )
}

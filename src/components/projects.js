import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Project from "./project"

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
              class
              name
            }
            title
          }
        }
      }
    }
  `)

  let projects = data.allFile.nodes

  useEffect(() => {
    let threshold = []
    for (let i = 1; i < 20; i++) {
      threshold.push(parseFloat(0.05 * i).toFixed(2))
    }
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      document.querySelectorAll(".project").forEach(i => {
        if (i) {
          const observer = new IntersectionObserver(
            entries => {
              observerCallback(entries, observer, i)
            },
            { threshold: threshold }
          )
          observer.observe(i)
        }
      })
      const observerCallback = (entries, observer, header) => {
        entries.forEach((entry, i) => {
          if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("float-in")
            entry.target.classList.remove("invisible")
            observer.unobserve(entry.target)
          }
        })
      }
    }
  }, [])

  return (
    <ProjectsContainer id="projects" className="invisible">
      <h2>Projects</h2>
      <ProjectList>
        {projects.map((project, index) => (
          <Project key={`project-${index}`} project={project} />
        ))}
      </ProjectList>
    </ProjectsContainer>
  )
}

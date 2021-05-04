import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;

    background-color: var(--background);
    color: var(--text);

    font-family: sans-serif;

    a {
      color: var(--text);
      text-decoration: none;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    h1, h2, h3, h4, h5, p, a, span {
      margin: 0;
    }

    h1{
      font-size: 3rem;
    }
    h2{
      font-size: 1.2rem;
    }
    h3{
      font-size: 1.1rem;
    }
    h4{
      font-size: 1rem;
    }
    h5{
      font-size: 0.75rem;
    }
  }

  .container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    box-sizing: border-box;
    width: 210mm;
    height: 297mm;
    padding: 10mm;
    margin: 0 auto;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .row{
    display: flex;

  }

  .col{
    display: flex;
    flex-direction: column;
  }

  .gap-xs{
    gap: 2px;
  }

  .gap-s{
    gap: 4px;
  }

  .gap-m{
    gap: 8px;
  }

  .gap-l{
    gap: 16px;
  }

  .gap-xl{
    gap: 32px;
  }

  .mw33{
    width: 100%;
    max-width: 33.33%
  }

  .mw66{
    width: 100%;
    max-width: 66.66%
  }

  .task{
    list-style: inside;
  }

  // Light theme
  @media (prefers-color-scheme: light) {
    :root {
      --text: #333;
      --mid-gray: #ccc;
      --background: #fff;
    }
  }

  // Dark theme
  @media (prefers-color-scheme: dark) {
    :root{
      --text: #ccc;
      --mid-gray: #666;
      --background: #222;
    }
  }

  // Print
  @media print {
    body{
      background-color: var(--background-color);
      color: var(--text);
    }

    :root{
      --text: #000;
      --background-color: #fff;
    }

    @page {
      margin: 0;
      size: A4 portrait;
    }
  }

  :root{
    --border-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1),
		0px 0px 0px 1px rgba(0, 0, 0, 0.15);
    --small-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15),
			0px 2px 4px -2px rgba(0, 0, 0, 0.4);
      --mid-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.15),
			0px 4px 8px -4px rgba(0, 0, 0, 0.5);
  }

  ::selection{
    background-color: var(--mid-gray);
  }
`

const Navigation = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 210mm;
  margin: 0 auto;
  padding: 10mm;

  button {
    padding: 8px;
    margin: 4px;
    background-color: var(--background);
    color: var(--text);
    border: none;
    border-radius: 8px;
    box-shadow: var(--border-shadow);
    transition: 0.3s ease-in-out;
    cursor: pointer;

    a {
      color: var(--text);
    }

    :hover {
      /* background-color: var(--mid-gray); */
      color: var(--text);
      box-shadow: var(--mid-shadow);

      a {
        color: var(--text);
      }
    }
  }

  @media print {
    display: none;
  }
`

export default function CV() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "cv" } }) {
        nodes {
          childrenCvJson {
            bg {
              email
              experience {
                list {
                  company
                  period
                  position
                  tasks
                }
                title
              }
              firstName
              lastName
              phone
              skills {
                list
                title
              }
              website
              certifications {
                list {
                  date
                  link
                  name
                }
                title
              }
              city
              country
              education {
                list {
                  field
                  period
                  school
                }
                title
              }
              languages {
                list
                title
              }
            }
            en {
              certifications {
                list {
                  date
                  link
                  name
                }
                title
              }
              email
              experience {
                list {
                  company
                  period
                  position
                  tasks
                }
                title
              }
              firstName
              languages {
                list
                title
              }
              lastName
              phone
              skills {
                list
                title
              }
              website
              city
              country
              education {
                list {
                  field
                  period
                  school
                }
                title
              }
            }
          }
        }
      }
    }
  `)

  let bg = data.allFile.nodes[0].childrenCvJson[0].bg
  let en = data.allFile.nodes[0].childrenCvJson[0].en

  const [cv, setCv] = useState(en)

  return (
    <>
      <GlobalStyle />
      <Navigation>
        <button>
          <AnchorLink to="/#">Back</AnchorLink>
        </button>
        <button onClick={() => window.print()}>Print/Save as PDF</button>
        <div>
          <button onClick={() => setCv(en)}>
            <span role="img" aria-label="english">
              🇬🇧
            </span>
          </button>
          <button onClick={() => setCv(bg)}>
            <span role="img" aria-label="bulgarian">
              🇧🇬
            </span>
          </button>
        </div>
      </Navigation>
      <article className="container">
        <section className="col uppercase">
          <h1>{cv.firstName}</h1>
          <h1>{cv.lastName}</h1>
        </section>
        <div className=" row">
          <div className="col gap-xl mw33">
            <section className="col gap-m">
              <div className="col gap-xs">
                <h4>
                  {cv.city}, {cv.country}
                </h4>
                <h4>
                  <a
                    href={`https://${cv.website}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {cv.website}
                  </a>
                </h4>
              </div>
              <div className="col gap-xs">
                <h4>
                  <a href={`mailto:${cv.email}`}>{cv.email}</a>
                </h4>
                <h4>
                  <a href={`tel:${cv.phone}`}>{cv.phone}</a>
                </h4>
              </div>
            </section>
            <section className="col gap-l">
              <h2 className="uppercase">{cv.skills.title}</h2>
              <ul className="col gap-xs">
                {cv.skills.list.map((item, index) => (
                  <li key={`skill-${index}`}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="col gap-l">
              <h2 className="uppercase">{cv.languages.title}</h2>
              <ul className="col gap-xs">
                {cv.languages.list.map((item, index) => (
                  <li key={`language-${index}`}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
          <div className="col gap-xl mw66">
            <section className="col gap-l">
              <h2 className="uppercase">{cv.experience.title}</h2>
              <ul className="col gap-m">
                {cv.experience.list.map((item, index) => (
                  <li key={`experience-${index}`} className="col gap-s">
                    <h3>{item.position}</h3>
                    <h4>{item.company}</h4>
                    <h5>{item.period}</h5>
                    <ul className="col gap-xs">
                      {item.tasks.map((item, index) => (
                        <li key={`tasks-${index}`} className="task">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
            <section className="col gap-l">
              <h2 className="uppercase">{cv.education.title}</h2>
              <ul className="col gap-m">
                {cv.education.list.map((item, index) => (
                  <li key={`education-${index}`} className="col gap-s">
                    <h3>{item.field}</h3>
                    <h4>{item.school}</h4>
                    <h5>{item.period}</h5>
                  </li>
                ))}
              </ul>
            </section>
            <section className="col gap-l">
              <h2 className="uppercase">{cv.certifications.title}</h2>
              <ul className="col gap-m">
                {cv.certifications.list.map((item, index) => (
                  <li key={`certification-${index}`} className="col gap-s">
                    <h3>
                      <a href={item.link}>{item.name}</a>
                    </h3>
                    <h5>{item.date}</h5>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        <section className="row">
          <div className="col mw33">
            <h4>
              {cv.firstName} {cv.lastName}
            </h4>
            <h4>
              <a
                href={`https://${cv.website}`}
                target="_blank"
                rel="noreferrer"
              >
                {cv.website}
              </a>
            </h4>
          </div>
          <div className="col mw33">
            <h4>
              <a href={`tel:${cv.phone}`}>{cv.phone}</a>
            </h4>
            <h4>
              <a href={`mailto:${cv.email}`}>{cv.email}</a>
            </h4>
          </div>
          <div className="col mw33">
            <h4>{cv.city}</h4>
            <h4>{cv.country}</h4>
          </div>
        </section>
      </article>
    </>
  )
}

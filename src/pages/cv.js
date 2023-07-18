import React, { useState } from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import "../styles/global.css"

import bannerImage from "../../static/banner.png"

import Navigation from "../components/navigation"

const GlobalStyle = createGlobalStyle`
  body{
    a {
      color: var(--text);
      text-decoration: none;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    h1, h2, h3, h4, h5, p, a, span, li {
      margin: 0;
    }

    h1,h2,h3,h4,h5{
      font-family: 'Rubik', sans-serif;
    }

    h5 {
      font-weight: 400;
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
    margin: 32px auto;

    box-shadow: var(--big-shadow);

    @media screen and (max-width: 922px){
      height: initial;
      width: initial;
      padding: 16px;
      margin: 0;

      box-shadow: none;
    }

    @media print{
      margin: 0;
      box-shadow: none;
    }
  }

  .name{
    font-size: 2rem;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .bold {
    font-weight: bold;
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
    gap: 12px;
  }

  .gap-l{
    gap: 16px;
  }

  .gap-xl{
    gap: 32px;
  }
  
  .mt-s{
    margin-top: 4px;
  }

  .mw25{
    width: 100%;
    max-width: 25%;
  }

  .mw75{
    width: 100%;
    max-width: 75%;
  }

  .mw75h{
    width: 100%;
    max-width: calc(75% /2);
  }

  .mw33{
    width: 100%;
    max-width: 33.33%;
  }

  .mw66{
    width: 100%;
    max-width: 66.66%;
  }

  .task{
    list-style: inside;

    &::marker{
      content: '•  ';
    }
  }

  @media screen and (max-width: 922px){
    .mw66, .mw33{
      max-width: initial;
    }

    .to-col{
      flex-direction: column;
    }

    .print-only {
      display: none;
    }
  }

  // Print
  @media print {
    body{
      background-color: var(--background-color);
      color: var(--text);
    }

    .to-col{
      flex-direction: row;
    }

    .print-only {
      display: flex;
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
`

const Options = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 210mm;
  margin: 88px auto 16px auto;

  button {
    padding: 8px;
    margin: 4px;
    background-color: var(--background);
    color: var(--text);
    border: none;
    border-radius: 8px;
    box-shadow: var(--border-shadow);
    transition: 0.2s ease-in-out;
    cursor: pointer;

    a {
      color: var(--text);
    }

    :hover {
      box-shadow: var(--mid-shadow);

      a {
        color: var(--text);
      }
    }
  }

  @media screen and (max-width: 922px) {
    width: 100%;
    padding: 0 16px;
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
  const [bul, setBul] = useState(false)

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap"
          rel="stylesheet"
        />
        <title>CV | Dobromir Yordanov | Front-end Developer</title>
        <meta
          name="description"
          content="Hello there! I'm Dobromir Yordanov, a front-end developer based in Plovdiv, BG."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Dobromir Yordanov | Front-end Developer"
        />
        <meta
          property="og:site_name"
          content="Dobromir Yordanov | Front-end Developer"
        />
        <meta
          property="og:description"
          content="Hello there! I'm Dobromir Yordanov, a front-end developer based in Plovdiv, BG."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dobromiryor.github.io/" />
        <meta property="og:image" content={bannerImage} />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content="Dobromir Yordanov | Front-end Developer"
        />
        <meta
          property="twitter:description"
          content="Hello there! I'm Dobromir Yordanov, a front-end developer based in Plovdiv, BG."
        />
        <meta property="twitter:image" content={bannerImage} />
        <meta property="twitter:creator" content="@dobromiryor" />
      </Helmet>
      <GlobalStyle bul={bul} />
      <Navigation />
      <Options>
        <button onClick={() => window.print()}>Print/Save as PDF</button>
        <div aria-label="language buttons">
          <button
            onClick={() => {
              setCv(en)
              setBul(false)
            }}
            title="English"
          >
            <span role="img" aria-label="english">
              🇬🇧
            </span>
          </button>
          <button
            onClick={() => {
              setCv(bg)
              setBul(true)
            }}
            title="Bulgarian"
          >
            <span role="img" aria-label="bulgarian">
              🇧🇬
            </span>
          </button>
        </div>
      </Options>
      <article className="container">
        <section className="col">
          <h1 className="uppercase name">{cv.firstName}</h1>
          <h1 className="uppercase name">{cv.lastName}</h1>
        </section>
        <div className="row to-col gap-xl">
          <div className="col gap-xl mw75">
            <section className="col gap-l">
              <h2 className="uppercase">{cv.experience.title}</h2>
              <ul className="col gap-l bb-1">
                {cv.experience.list.map((item, index) => (
                  <li key={`experience-${index}`} className="col gap-s ">
                    <h3>{item.company}</h3>
                    <h4>{item.position}</h4>
                    <h5>{item.period}</h5>
                    <ul className="col gap-xs mt-s" aria-label="task list">
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
            {/* <section className="col gap-l">
              <h2 className="uppercase">{cv.certifications.title}</h2>
              <ul className="col gap-m">
                {cv.certifications.list.map((item, index) => (
                  <li key={`certification-${index}`} className="col gap-s">
                    <h4>
                      <a href={item.link}>{item.name}</a>
                    </h4>
                    <h5>{item.date}</h5>
                  </li>
                ))}
              </ul>
            </section> */}
          </div>
          <div className="col gap-xl mw25">
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
        </div>
        <section className="row gap-m print-only">
          <div className="col gap-s mw75h">
            <p className="bold">
              {cv.firstName} {cv.lastName}
            </p>
            <a
              className="bold"
              href={cv.website}
              target="_blank"
              rel="noreferrer"
            >
              {cv.website}
            </a>
          </div>
          <div className="col gap-s mw75h">
            <a className="bold" href={`tel:${cv.phone}`}>
              {cv.phone}
            </a>
            <a className="bold" href={`mailto:${cv.email}`}>
              {cv.email}
            </a>
          </div>
          <div className="col mw25 gap-s">
            <p className="bold">{cv.city}</p>
            <p className="bold">{cv.country}</p>
          </div>
        </section>
      </article>
    </>
  )
}

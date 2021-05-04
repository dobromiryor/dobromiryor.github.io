import React from "react"
import styled from "styled-components"

const AboutContainer = styled.section`
  padding: 16px;
`

export default function About() {
  return (
    <AboutContainer id="about">
      <h1>About</h1>
      <p>
        My name is Dobromir Yordanov and I develop and design things for the
        web. I also love minimalist photography (minimalism in general) and
        video games. Born and raised in Plovdiv, Bulgaria and freshly graduated
        from Plovdiv University. I am currently looking for a workplace to apply
        and improve my skillset. I am also open to freelance work, so don't
        hesitate to contact me!
      </p>
    </AboutContainer>
  )
}

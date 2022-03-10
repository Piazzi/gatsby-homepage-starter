import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Container } from "react-bootstrap"
import "../assets/css/hero.scss"

const Hero = () => {
  return (
    <Container className="banner" fluid>
      <h1 className="banner-text">
      LOREM  <br /> IPSUM <br /> DOLOR 
      </h1>
      <StaticImage
        src="../assets/images/Div.svg"
        alt="div"
        width={391}
        height={2}
      ></StaticImage>
      <h6 className="banner-subtext">Donec at nulla elementum</h6>
      <a href="#services-container">
        <StaticImage
          src="../assets/images/arrow-down.svg"
          alt="div"
        ></StaticImage>
      </a>
    </Container>
  )
}

export default Hero

import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Container } from "react-bootstrap"
import { Carousel } from "react-bootstrap"
import "../assets/css/gallery.scss"
import { useLocation } from "@reach/router"

const Gallery = () => {
  const aboutUsImages = {
    firstImage: (
      <StaticImage
        className="rounded"
        src="../assets/images/janitorial-image.jpg"
        alt="First slide"
        width={730}
        height={415}
      />
    ),
    secondImage: (
      <StaticImage
        className="rounded"
        src="../assets/images/cleaning.jpg"
        alt="Second slide"
        width={730}
        height={415}
      />
    ),
    thirdImage: (
      <StaticImage
        className="rounded"
        src="../assets/images/building3.jpg"
        alt="Third slide"
        width={730}
        height={415}
      />
    ),
  }
  const constructionCleaningImages = {
    firstImage: (
      <StaticImage
        className="rounded"
        src="../assets/images/commercial-image.jpg"
        alt="First slide"
        width={730}
        height={415}
      />
    ),
    secondImage: (
      <StaticImage
        className="rounded"
        src="../assets/images/glass2.jpeg"
        alt="Second slide"
        width={730}
        height={415}
      />
    ),
    thirdImage: (
      <StaticImage
        className="rounded"
        src="../assets/images/commercial-image-2.jpg"
        alt="Third slide"
        width={730}
        height={415}
      />
    ),
  }

  let galleryImages
  let location = useLocation()
  location.pathname === "/about"
    ? (galleryImages = aboutUsImages)
    : (galleryImages = constructionCleaningImages)

  return (
    <Container className="gallery-background">
      <Carousel className="gallery">
        <Carousel.Item interval={1000}>
          {galleryImages.firstImage}
        </Carousel.Item>
        <Carousel.Item interval={500}>
          {galleryImages.secondImage}
        </Carousel.Item>
        <Carousel.Item>{galleryImages.thirdImage}</Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default Gallery

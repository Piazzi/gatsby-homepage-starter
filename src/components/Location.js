import React from "react"
import { Container } from "react-bootstrap"
import "../assets/css/contact.scss"

const Location = () => {
  return (
    <Container className="container-margin align-center">
      <h2 className="map-text">SERVING VANCOUVER AND SURROUNDING AREAS</h2>

      <iframe
        className="margin-top "
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5205.2610381017075!2d-123.117535!3d49.283398!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f4f9d4655%3A0x8a83cf0632d4facf!2s701%20W%20Georgia%20St%20%231500%2C%20Vancouver%2C%20BC%20V7Y%201G5%2C%20Canad%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1637255088853!5m2!1spt-BR!2sbr"
        width="100%"
        height="511px"
        style={{ border: 0 }}
        frameBorder="0"
        loading="lazy"
      ></iframe>
    </Container>
  )
}

export default Location

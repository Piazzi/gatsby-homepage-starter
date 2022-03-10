import React from "react"
import { Container } from "react-bootstrap"
import "../assets/css/contact.scss"

const Location = () => {
  return (
    <Container className="container-margin align-center">
      <h2 className="map-text">Aenean pellentesque odio libero, quis laoreet ligula hendrerit eu. Sed vel lorem interdum</h2>

      <iframe
        className="margin-top "
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.35775826377!2d-123.19394339708828!3d49.257826319982065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC%2C%20Canad%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1646945152178!5m2!1spt-BR!2sbr"
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

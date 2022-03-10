import React from "react"
import ContactForm from "../../components/ContactForm"
import Gallery from "../../components/Gallery"
import Layout from "../../components/Layout"
import ServicesProvided from "../../components/ServicesProvided"
import Seo from "../../components/SEO"
import { Container } from "react-bootstrap"

export default function ConstructionCleaning() {
  return (
    <Layout>
      <Seo title="Construction Cleaning" />
      <Container className="container-margin">
        <h1 className="p-title blue-text">SERVICE 1</h1>
        <p>
          Curabitur hendrerit quam sed justo luctus porta. Sed egestas dolor
          justo. Donec mattis ante eu ante mollis porta. Proin in felis
          scelerisque, consequat mauris ut, dignissim sem. Nulla mi justo,
          lobortis nec suscipit eu, dapibus eget ligula. Fusce convallis, elit a
          molestie gravida, arcu libero luctus purus, eget efficitur ipsum leo
          ut odio. Etiam dolor tortor, malesuada vehicula purus eget, ultrices
          rutrum purus. Nullam velit enim, laoreet vel lectus vel, sodales
          placerat dui. Vivamus et tortor bibendum, varius ex eu, scelerisque
          mi. Aliquam tempus nec libero nec pulvinar.
          <br />
          <br />
          Curabitur hendrerit quam sed justo luctus porta. Sed egestas dolor
          justo. Donec mattis ante eu ante mollis porta. Proin in felis
          scelerisque, consequat mauris ut, dignissim sem. Nulla mi justo,
          lobortis nec suscipit eu, dapibus eget ligula. Fusce convallis, elit a
          molestie gravida, arcu libero luctus purus, eget efficitur ipsum leo
          ut odio. Etiam dolor tortor, malesuada vehicula purus eget, ultrices
          rutrum purus. Nullam velit enim, laoreet vel lectus vel, sodales
          placerat dui. Vivamus et tortor bibendum, varius ex eu, scelerisque
          mi. Aliquam tempus nec libero nec pulvinar.
          <br />
          <br />
          Curabitur hendrerit quam sed justo luctus porta. Sed egestas dolor
          justo. Donec mattis ante eu ante mollis porta. Proin in felis
          scelerisque, consequat mauris ut, dignissim sem. Nulla mi justo,
          lobortis nec suscipit eu, dapibus eget ligula. Fusce convallis, elit a
          molestie gravida, arcu libero luctus purus, eget efficitur ipsum leo
          ut odio. Etiam dolor tortor, malesuada vehicula purus eget, ultrices
          rutrum purus. Nullam velit enim, laoreet vel lectus vel, sodales
          placerat dui. Vivamus et tortor bibendum, varius ex eu, scelerisque
          mi. Aliquam tempus nec libero nec pulvinar.
        </p>
      </Container>
      <Gallery></Gallery>
      <ServicesProvided></ServicesProvided>
      <ContactForm title="GET IN TOUCH!"></ContactForm>
    </Layout>
  )
}

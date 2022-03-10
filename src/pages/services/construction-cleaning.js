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
        <h1 className="p-title blue-text">CONSTRUCTION CLEANING </h1>
        <p>
          There is no better way to provide construction cleaning services than
          with a highly trained and certified work team. We have a fairly large
          staff that can handle jobs from new developments, commercial and
          residential renovations. Our work metric varies depending on the
          client, size and business.
          <br />
          <br />
          Our team of specialists are highly professional and stand out for
          being meticulous and detailed in each job, always with the aim of
          providing the best service. We seek to provide confidence and peace of
          mind to our clients, that is why when we receive a reservation in any
          of our services, we respond within a period of no more than 24 hours
          after the service is requested. Cleaning services are fully customized
          for each site, providing work equipment, labour, and cleaning
          products.
          <br />
          <br />
          Our cleaning products are totally Eco-Friendly with the environment,
          in addition to which we guarantee our clients that they are adequate
          depending on their needs, avoiding damage to their facilities or work
          area.
        </p>
      </Container>
      <Gallery></Gallery>
      <ServicesProvided></ServicesProvided>
      <ContactForm title="GET IN TOUCH!"></ContactForm>
    </Layout>
  )
}

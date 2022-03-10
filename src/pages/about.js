import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Gallery from "../components/Gallery"
import ContactForm from "../components/ContactForm"
import Seo from "../components/SEO"

const About = () => {
  return (
    <Layout>
      <Seo title="About Us" />
      <Container className="p-container">
        <h1 className="blue-text p-title">About Us </h1>
        <Row style={{ marginBottom: "100px" }}>
          <Col md={6}>
            <p className="mt-4">
              We are a company dedicated to post-construction cleaning with more
              than 2 years of experience in the market and we proudly identify
              ourselves as an eco-friendly high-quality service able to deliv-
              er in a timely manner. <br />
              <br />
              We have trained personnel who are specialized in cleaning services
              that cover from inside to outside, including floors, windows,
              walls and pressure washing.
              <br />
              <br />
              Our priority is to consistently pro- vide the best service to our
              cli- ents, that is why our response times are immediate. We
              operate from Monday to Sunday 24 hours a day, providing
              flexibility and efficiency to our clients.
        
            </p>
          </Col>
          <Col
            xs={{ order: "first" }}
            lg={{ order: "last" }}
            md={6}
            className="align-center"
            style={{    marginTop: "-5%"}}
          >
            <StaticImage
              className="worker-image"
              src="../assets/images/Aboutus_Illustration.png"
              alt="workers"
             
            ></StaticImage>
          </Col>
        </Row>
      </Container>
      <Gallery></Gallery>
      <Container fluid id="our-team-container">
        <Container>
        <Row>
          <Col style={{ alignSelf: "center" }} md={6}>
            <div className="worker-image">
              <StaticImage
                src="../assets/images/workers.jpg"
                alt="worker"
              
                className="rounded"
              ></StaticImage>
            </div>
          </Col>
          <Col style={{alignSelf: "center"}} xs={{ order: "first" }} lg={{ order: "last" }}>
            <h2 className="blue-text p-title">Our Team </h2>
            <p>
              We provide the best post-con- struction cleaning service in
              Vancouver and its surroundings. Our mission is to satisfy our
              customers' needs optimally and efficiently through our ser- vices.
              <br />
              <br />
              BOSS Construction stands out for being a reliable company that
              follows the highest quality stan- dards and prioritizes customer
              attention above everything else.
            </p>
          </Col>
        </Row>
        </Container>
      </Container>
      <ContactForm title="GET IN TOUCH!"></ContactForm>
    </Layout>
  )
}

export default About

import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import ContactForm from "../components/ContactForm"
import Seo from "../components/SEO"
import ServicesCards from "../components/ServicesCards"


export default function Home() {
  return (
  <Layout>
    <Seo title="Home" />
    <Hero></Hero>
    <Services></Services>
    <ServicesCards></ServicesCards>
    <ContactForm title="GET IN TOUCH!"></ContactForm>
  </Layout>
  )
}

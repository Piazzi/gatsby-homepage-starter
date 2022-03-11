import ContactForm from "../components/ContactForm"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import React from "react"
import Seo from "../components/SEO"
import Services from "../components/Services"
import ServicesCards from "../components/ServicesCards"

export default function Home() {
  return (
  <Layout>
    <Seo title="Home"/>
    <Hero></Hero>
    <Services></Services>
    <ServicesCards></ServicesCards>
    <ContactForm title="GET IN TOUCH!"></ContactForm>
  </Layout>
  )
}

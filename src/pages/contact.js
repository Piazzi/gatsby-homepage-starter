import React from 'react'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'
import Location from '../components/Location'
import Seo from "../components/SEO"
import '../assets/css/contact.scss'

const Contact = () => {
    return (
        <Layout>
            <Seo title="Contact Us" />
            <ContactForm title="Contact Us"></ContactForm>'
            <Location></Location>
        </Layout>
    )
}

export default Contact

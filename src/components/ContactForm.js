import React from "react"
import { Col, Container, Row, Form } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import { StaticImage } from "gatsby-plugin-image"
import Modal from "react-bootstrap/Modal"
import { useState } from "react"
import '../assets/css/contactForm.scss'
import { useLocation } from '@reach/router';

export function janitorialWorker() {
  return <StaticImage src="../assets/images/worker7.svg" alt="A worker" />
}

export function formWorker() {
  return <StaticImage src="../assets/images/worker8.png" alt="A worker" />
}


const ContactForm = ({ title }) => {
  
  let location = useLocation();
  const formImage = location.pathname  === '/services/commercial'? janitorialWorker() : formWorker();
  const postURL = process.env.GATSBY_GET_FORM_UR_02
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const sendForm = e => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData()
    formData.append("name", form.name.value)
    formData.append("phone", form.phone.value)
    formData.append("email", form.email.value)
    formData.append("service", form.service.value)
    fetch(postURL, {
      method: "POST",
      body: formData,
    })
      .then(response => {
        handleShow()
        form.reset()
        setTimeout(() => {
          handleShow()
        }, 7000)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Container fluid className="form-background">
      <Container className="form-container">
        <Row>
          <Col md={5} sm>
            <h2 className="blue-text form-title"> {title}</h2>
            <br />
            <h6 className="orange-text form-subtitle">WE ARE ONE CLICK AWAY</h6>
            <Form method="POST" onSubmit={sendForm}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  name="phone"
                  type="number"
                  placeholder="+1 000-000-0000"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Example: mail@mail.com"
                />
              </Form.Group>

              <Form.Label>Type of Service</Form.Label>
              <Form.Select aria-label="Default select example" name="service">
                <option value="Construction Cleaning">
                  Construction Cleaning
                </option>
                <option value="Janitorial">Janitorial</option>
                <option value="Commercial">Commercial</option>
              </Form.Select>
              <div className="d-grid gap-2 ">
                <Button variant="info form-button" type="submit">
                  Request a Quote
                </Button>
              </div>
              <br />
              <div className="align-center">
                <StaticImage
                  src="../assets/images/logo.svg"
                  alt="logo"
                  width={141}
                  height={68}
                ></StaticImage>
              </div>
            </Form>
          </Col>
          <Col sm={12} lg={7} md={7} className="d-none d-md-block" style={{ alignSelf: "center" }}>
            <div className="worker-image ">
              {formImage}
            </div>
          </Col>
        </Row>
        <div>
          <Modal show={show} onHide={handleClose} className="align-center">
            <Modal.Header style={{ alignSelf: "center" }}>
              <Modal.Title>
                <StaticImage
                  src="../assets/images/success-icon.svg"
                  alt="success-icon"
                ></StaticImage>
                <br />
                <strong>Thank You!</strong>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>The form was submitted successfully</Modal.Body>
            <Modal.Footer>
              <Button
                style={{ position: "relative " }}
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
    </Container>
  )
}

export default ContactForm

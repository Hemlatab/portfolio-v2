import React from "react";
import "./Contact.css";
import { Row, Col, Button, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="wrapper-contact" id="contact">
      <h1 className="get-in-touch">Let's get in touch</h1>
      <Row>
        <Col lg={6} className="mx-auto">
          <Form className="contact-form">
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="textarea">
              <Form.Label>Message</Form.Label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter message"
              ></textarea>
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;

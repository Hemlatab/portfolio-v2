import React from "react";
import "./Contact.css";
import { Col, Row, Button, Form, FormGroup } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="wrapper-contact">
      <h1 className="get-in-touch">Let's get in touch</h1>
      <Form className="contact-form">
        <Row form>
          <Col md={12}>
            <FormGroup>
              <label for="Name"> Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
              />
            </FormGroup>
          </Col>

          <Col md={12}>
            <FormGroup>
              <label for="Email"> Email</label>
              <input
                type="email"
                name="message"
                id="Email"
                placeholder="Email"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label for="Message">Message</label>
              <input type="textarea" name="text" id="Message" rows="3" />
            </FormGroup>
          </Col>
        </Row>

        <Button>Send</Button>
      </Form>
    </section>
  );
};

export default Contact;

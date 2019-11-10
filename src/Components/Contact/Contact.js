import React from "react";
import "./Contact.css";
import { Col, Row, Button, Form, FormGroup } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="wrapper-contact">
      <h1>Let's get in touch</h1>
      <Form>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <label for="Password"> Name</label>
              <input
                type="password"
                name="password"
                id="Password"
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
          <Col md={12}>
            <FormGroup>
              <label for="message"> Message</label>
              <input
                type="textarea"
                name="text"
                id="message"
                placeholder="Message"
              />
            </FormGroup>
          </Col>
        </Row>

        <Button>Send</Button>
      </Form>
    </section>
  );
};

export default Contact;

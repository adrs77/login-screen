import React from 'react'
import {
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
  } from "reactstrap";
  import { Formik } from "formik";

function LoginForm() {
    return (
        <Formik
        initialValues={{ email: "", password: "" }}
        // validationSchema={getValidationSchema('login ')}
        onSubmit={(values) => {}}
      >
        {(formikProps) => (
          <Form>
            <FormGroup row>
              <Label for="login-email" sm={12}>
                Email
              </Label>
              <Col sm={12}>
                <Input
                  type="email"
                  name="email"
                  id="login-email"
                  placeholder="Your email"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="login-password" sm={12}>
                Password
              </Label>
              <Col sm={12}>
                <Input
                  type="password"
                  name="password"
                  id="login-password"
                  placeholder="Your password"
                />
              </Col>
            </FormGroup>
            <Button className="float-right">Submit</Button>
          </Form>
        )}
      </Formik>
    )
}

export default LoginForm

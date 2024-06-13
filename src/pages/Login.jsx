import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { Container } from 'react-bootstrap';

function Login() {

  const { Formik } = formik;

  const schema = yup.object().shape({
    fullName: yup.string().required("Please enter fullname").min(5, "Fullname should contain minimum 5 characters!"),
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"),
    confirmPassword: yup.string().required().oneOf([yup.ref('password'),null], 'Must match with password!'),
  });

  return (
    <Container className='vh-100 align-content-center'>
      <Row className='text-center py-2 justify-content-center'>
        <Col md={6} className='mb-3 shadow p-4'>
          <h2>
            Login
          </h2>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col md={6} className='mb-3 shadow p-4'>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              fullName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row>
                  <Form.Group
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      placeholder='Enter your Fullname'
                      value={values.fullName}
                      onChange={handleChange}
                      isInvalid={!!errors.fullName}
                    />
                    <Form.Control.Feedback type='invalid' tooltip>
                      {errors.fullName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder='Enter your Email'
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />

                    <Form.Control.Feedback type='invalid' tooltip>
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    controlId="validationFormikUsername2"
                    className="position-relative"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    controlId="validationFormik103"
                    className="position-relative"
                  >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Re-enter your Password"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      isInvalid={!!errors.confirmPassword}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button type="submit">Sign Up</Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
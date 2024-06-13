import React from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const AddProduct = () => {

    const [validated, setValidated] = useState(false);
    const [product, setProduct] = useState({
        productName: '',
        category: '',
        price: '',
        photo: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            console.log("Form Submitted", product);

            setValidated(true);
        }


    };

    const onChangeHandler = (e) => {

        const { name, value } = e.target;

        if (name === 'photo') {
            const photo = e.target.files[0];   
            setProduct({ ...product, [name]: photo });      
        }else{
            setProduct({ ...product, [name]: value });
        }

    }

    return (
        <Container className='vh-100 align-content-center'>
            <Row className='text-center py-2 justify-content-center'>
                <Col md={6} className='mb-3 shadow p-4'>
                    <h2>
                        Add Product
                    </h2>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col md={6} className='mb-3 shadow p-4'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group className='position-relative'>
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Product Name"
                                    name='productName'
                                    onChange={onChangeHandler}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    Please enter a product name
                                </Form.Control.Feedback>
                                <Form.Control.Feedback tooltip>
                                    Looks Good
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group>
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter a Product Category"
                                    name='category'
                                    onChange={onChangeHandler}
                                />
                                <Form.Control.Feedback type='invalid'>Please enter a product category</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>

                            <Form.Group>
                                <Form.Label>Price</Form.Label>

                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Price"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    name='price'
                                    onChange={onChangeHandler}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter the price
                                </Form.Control.Feedback>

                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group controlId="formFile">
                                <Form.Label>Photo</Form.Label>
                                <Form.Control type="file" name='photo' onChange={onChangeHandler} required />
                                <Form.Control.Feedback type='invalid'>
                                    Please upload a photo
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Button type="submit" className='mt-3'>Add Product</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddProduct
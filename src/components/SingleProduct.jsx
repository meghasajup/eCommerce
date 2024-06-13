import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Col } from "react-bootstrap"
import './SingleProduct.css'


const SingleProduct = ({ product }) => {
    return (
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3 product-container">
            <Card className='product-card w-100'>
                <Card.Img variant="top" src={product.image} className='product-image' />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        <b>₹ {product.price}</b> <br />
                        {product.description}
                    </Card.Text>
                    <Button as={Link} to={`/${product.id}`} className='product-button'>More Info</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleProduct
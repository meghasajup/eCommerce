import React, { useEffect, useState } from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import './ProductDetails.css'

const ProductDetails = () => {

  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [productFetched, setProductFetched] = useState(false);

  const getProducts = () => {

    fetch('./products.json')
      .then((data) => data.json())
      .then((res) => setProducts(res.products));
    setProductFetched(true);
  }

  useEffect(() => {
    if (!productFetched) {
      getProducts();
    }

    if (products.length > 0) {
      const res = products.find((product) => product.id === Number(id));
      setProduct(res);
    }

  }, [id, products, productFetched]);


  return (
    <Container>
      {product && (
        <Row className='my-4 align-items-center'>
          <Col md={4}>
            <img src={product.image} alt={product.name} className='product-image' />
          </Col>
          <Col md={8}>
            <ListGroup>
              <ListGroup.Item style={{ border: 'none' }}>
                <h3 className='product-name'>
                  <b>{product.name}</b>
                </h3>
              </ListGroup.Item>
              <ListGroup.Item style={{ border: 'none' }}>
                <h4 className='product-price'>
                  ₹ {product.price}
                </h4>
              </ListGroup.Item>
              <ListGroup.Item style={{ border: 'none' }}>
                <h4 className='product-description'>
                  {product.description}
                </h4>
              </ListGroup.Item>
              <ListGroup.Item style={{ border: 'none' }}>
                <h4 className='product-brand'>
                  <b>Brand : </b> {product.brand}
                </h4>
              </ListGroup.Item>
              <ListGroup.Item style={{ border: 'none' }}>
                <Link to={'/cart'} className="add-to-cart">Add to Cart</Link>
                <Link to={'/'} className="add-to-cart">Home</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default ProductDetails
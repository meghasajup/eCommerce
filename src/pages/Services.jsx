import React from 'react';
import { Link } from 'react-router-dom';
import './dev.css';


function Services() {
  return (
    <div className='d-flex flex-column align-items-center text-center vh-100'>
      <h1>
        Services
      </h1>
      <p>
        This page is under development <br />
        Please check out other pages in this project <br />
        <b>Thank You!</b> <br />
        <Link to={'/'} className="dev-button">Home | Checkout product info</Link>
        <Link to={'/login'} className="dev-button">Login form</Link>
        <Link to={'/contact'} className="dev-button">Contact form</Link>
        <Link to={'/admin/product/add'} className="dev-button">Add new products</Link>
      </p>
    </div>
  )
}

export default Services
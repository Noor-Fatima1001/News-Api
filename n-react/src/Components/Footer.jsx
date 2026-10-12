import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
const Footer = () => {
  return (
  <footer className="bg-dark text-white pt-5 pb-4 ">
      <Container>
        <Row>
          <Col md={3}>
            <h5>About</h5>
            <ul className="list-unstyled pt-4">
              <li><div className="text-white pt-2">Our Story</div></li>
              <li><div className="text-white pt-2">Mission</div></li>
              <li><div className="text-white pt-2">About us</div></li>
              <li><div className="text-white pt-2">News</div></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Categories</h5>
            <ul className="list-unstyled pt-4">
              <li><div className="text-white pt-2">Work</div></li>
              <li><div className="text-white pt-2">Services</div></li>
              <li><div className="text-white pt-2">Products</div></li>
              <li><div className="text-white pt-2">Tips & Tricks</div></li>
             
            </ul>
          </Col>
          <Col md={3}>
            <h5>Categories</h5>
            <ul className="list-unstyled pt-4">
              <li><div className="text-white pt-2">Work</div></li>
              <li><div className="text-white pt-2">Services</div></li>
              <li><div className="text-white pt-2">Products</div></li>
              <li><div className="text-white pt-2">Tips & Tricks</div></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled pt-4">
              <li><div className="text-white pt-2">Privacy Policy</div></li>
              <li><div className="text-white pt-2">Privacy Statement</div></li>
              <li><div className="text-white pt-2">Use of cookies</div></li>
              <li><div className="text-white pt-2">International Editions</div></li>
                           
              

                             

             
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center pt-5 pb-3">
            <p>Copyright &copy;2025 All rights reserved | This template is made with &hearts; by <a href="https://colorlib.com" className="text-white">Colorlib</a></p>
          </Col>
        </Row>
      </Container>
  </footer>
  )
}

export default Footer

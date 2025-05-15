import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
  <div className="social-icon">
     <a href="https://linkedin.com/in/sahana-koppad-13a3a7321" target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
    <a href="#"><img src={navIcon2} alt="Icon" /></a>
     <a href="https://www.instagram.com/sahanakoppad08/"><img src={navIcon3} alt="" /></a>
  </div>
  <p>&copy; {new Date().getFullYear()} Sahana Koppad. All Rights Reserved.</p>
</Col>

        </Row>
      </Container>
    </footer>
  )
}

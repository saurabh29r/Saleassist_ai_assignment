import { Container, Row, Col } from "react-bootstrap";
import { FaRegCopyright } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="footer mt-5 ">
            <p className="d-inline p-2 ">
              <FaRegCopyright />
            </p>
            <p className="p-2">
              <a href="https://www.saleassist.ai/" target="_blank">
                SaleAssist.ai
              </a>
            </p>
            <p className="d-inline ">
              {" "}
              Made with 💖 by{" "}
              <a href="https://twitter.com/saurabhrauniya4" target="_blank">
                Saurabh Rauniyar
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

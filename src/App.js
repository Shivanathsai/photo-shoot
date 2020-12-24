import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  Navbar,
  Dropdown,
  Nav,
  Card
} from "react-bootstrap";

export default function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3} style={{ padding: "5px" }}>
            <Card
              style={{ height: "35rem", width: "17rem" }}
              className="text-primary"
            >
              <Card.ImgOverlay>
                <Card.Title>Photo Shooto</Card.Title>
              </Card.ImgOverlay>
              <Card.Img
                style={{ height: "35rem", width: "17rem" }}
                src="https://fsmedia.imgix.net/5a/6a/7f/21/f7ab/4c18/b150/49f10bce6a2b/emperor-penguins-famously-raise-one-offspring-at-a-time-in-pairs.jpeg?dpr=2&auto=format%2Ccompress&w=650"
                alt="Card image"
              />
            </Card>
          </Col>

          <Col lg={9} style={{ padding: "5px" }}>
            <Navbar bg="none" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Services</Nav.Link>
                  <Nav.Link href="#link">Winners</Nav.Link>
                  <Nav.Link href="#link">About us</Nav.Link>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-primary"
                      id="dropdown-basic"
                    >
                      Hi Siddaya
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Row>
              <h3 className="text-primary" style={{ padding: "5px" }}>
                Photo Uploading
              </h3>
              <br />
              <hr />
              <Col lg={12}>
                <Form>
                  <Row>
                    <Col>
                      <Form.Label>Name</Form.Label>
                      <Form.Control placeholder="sidayya swami" />
                    </Col>
                    <Col>
                      <Form.Label>ID.no</Form.Label>
                      <Form.Control placeholder="PS2020BGR001" />
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Form>
                  <Row>
                    <Col>
                      <Form.Label>Email</Form.Label>
                      <Form.Control />
                    </Col>
                    <Col>
                      <Form.Label>Phone</Form.Label>
                      <Form.Control />
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Form>
                  <Row>
                    <Col>
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Col>
                    <Col>
                      <Form.Label>Pin code</Form.Label>
                      <Form.Control />
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Form>
                  <Row>
                    <Col>
                      <Form.Label>Camera</Form.Label>
                      <Form.Control as="select" placeholder="select camera">
                        <option>Select Camera</option>
                        <option>Nikon</option>
                        <option>sony</option>
                        <option>canon</option>
                        <option>fujifilm</option>
                      </Form.Control>
                    </Col>
                    <Col>
                      <Form.Label>Studio name</Form.Label>
                      <Form.Control />
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Form>
                  <Row>
                    <Col>
                      <Form.Label>
                        services (candid, cinematic, pre wedding etc)
                      </Form.Label>
                      <Form.Control />
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Form>
                  <Row>
                    <Col>
                      <Form.Label>Category</Form.Label>
                      <Form.Control as="select">
                        <option>Select Category</option>
                        <option>weeding photography</option>
                        <option>product photograohy</option>
                        <option>sports photography</option>
                        <option>Others</option>
                      </Form.Control>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col lg={12} mt1 classname="mt1">
                <p>
                  <CloudUploadIcon />
                  Upload Photos (max 5 photos)
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={10}></Col>
              <Col lg={2}>
                <Button variant="outline-primary">Publish</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Card bg="primary" text="white" className="text-center p-3">
              <Row>
                <Col lg={3}>
                  <h3>Photo Shoot</h3>
                  <p>For any queries</p>
                  <p>doubts</p>
                  <p>reach us</p>
                </Col>

                <Col lg={3}>
                  <p>FAQ</p>
                  <p>For any queries</p>
                  <p>doubts</p>
                  <p>reach us</p>
                </Col>

                <Col lg={3}>
                  <p>
                    <FacebookIcon />
                    &nbsp; Facebook
                  </p>
                  <p>
                    <TwitterIcon />
                    &nbsp; Twitter
                  </p>
                  <p>
                    <InstagramIcon />
                    &nbsp; Instagram
                  </p>
                </Col>

                <Col lg={3}>
                  <p>Subscribe for more</p>
                  <Button variant="outline-light" size="lg" block>
                    Email address
                  </Button>
                </Col>
              </Row>
              <Card.Footer className="bg-dark">
                <p>&copy; published all rights</p>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

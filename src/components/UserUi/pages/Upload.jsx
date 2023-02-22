import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import UserHome from "./UserHome";
import "./userpage.css";
const Upload = () => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [cat, setCat] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [doc, setDoc] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <>
      <UserHome />
      <Container className="upload">
        <h3>Sell your Product</h3>
        <hr />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Product Name</Form.Label>
              <Form.Control required type="text" placeholder="Product Name" value={name} 
              onChange={(e)=>setName(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Category</Form.Label>
              <Form.Control required type="text" placeholder="Category" value={cat}
              onChange={(e)=>setCat(e.target.value)}

               />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Brand</Form.Label>
              <Form.Control type="text" placeholder="Brand" required value={brand}
              onChange={(e)=>setBrand(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" placeholder="Stock" required value={stock}
              onChange={(e)=>setStock(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="2" as={Col} controlId="formGridState">
              <Form.Label>For</Form.Label>
              <Form.Select defaultValue="Choose..." value={type} 
              onChange={(e)=>setType(e.target.value)}

              >
                <option>Sell</option>
                <option>Rent</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationCustom05">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="In Rupees" required value={price}
              onChange={(e)=>setPrice(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="validationCustom05">
              <Form.Label>Rate Your Product</Form.Label>
              <Form.Control type="number" placeholder="Out of 5" required value={rate}
              onChange={(e)=>setRate(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group controlId="formFile" className="mb-3 file-picker">
              <Form.Label>Product Image</Form.Label>
              <Form.Control type="file" size="sm" required value={image}
              onChange={(e)=>setImage(e.target.files)}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3 file-picker">
              <Form.Label>Product Video</Form.Label>
              <Form.Control type="file" size="sm" value={video}
              onChange={(e)=>setVideo(e.target.files)}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3 file-picker">
              <Form.Label>Product Document</Form.Label>
              <Form.Control type="file" size="sm"  value={doc}
              onChange={(e)=>setDoc(e.target.files)}
              
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Check
              type="radio"
              required
              label="You agrees that above information in true"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button variant="outline-success" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default Upload;

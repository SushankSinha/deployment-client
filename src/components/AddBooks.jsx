import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { API } from "../global";
import { useNavigate } from "react-router-dom";
function AddBooks({ bookData, setBookData }) {

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const navigate = useNavigate();
  
  const handleSubmit = () => {
    const newBook = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };
    console.log(newBook);

    fetch(`${API}/books`, {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((res) => {
        setBookData(res);
        console.log(res);
      })
      .then(() => navigate("/"));
  };

  return (
    <div>
      <h1>Add Books</h1>
      <Button style={{ marginLeft: "75%" }} onClick={() => navigate(-1)}>
        BACK
      </Button>
      <Form>
        <FormGroup row>
          <Label for="name" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              id="name"
              name="name"
              placeholder="Enter Book name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required = {true}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="poster" sm={2}>
            Poster
          </Label>
          <Col sm={10}>
            <Input
              id="poster"
              name="poster"
              placeholder="Enter poster"
              type="text"
              onChange={(e) => setPoster(e.target.value)}
              value={poster}
              required = {true}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="rating" sm={2}>
            Rating
          </Label>
          <Col sm={10}>
            <Input
              id="rating"
              name="rating"
              placeholder="Enter rating"
              type="number"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
              required = {true}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="summary" sm={2}>
            Summary
          </Label>
          <Col sm={10}>
            <Input
              id="summary"
              name="summary"
              placeholder="Enter summary"
              type="text"
              onChange={(e) => setSummary(e.target.value)}
              value={summary}
              required = {true}
            />
          </Col>
        </FormGroup>

        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default AddBooks;

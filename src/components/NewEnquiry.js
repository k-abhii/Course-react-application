import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function NewEnquiry(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [question, setQuestion] = useState("");

  const modelhandleClose = () => {
    props.onModelClose();
  };

  const modelhandleSave = (event) => {
    const newEnquriry = {
      id: Math.floor(Math.random() * 30),
      firstname: firstName,
      lastname: lastName,
      course_id: props.courseid,
      enquiry: question,
    };

    //console.log(event.target.elements.firstname.value)
    props.onSaveEnquiry(newEnquriry);
  };
  //const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={props.show} onHide={modelhandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                placeholder="Enter firstname"
                onChange={(event) => setFirstName(event.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                placeholder="Enter lastname"
                onChange={(event) => setLastName(event.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Question</Form.Label>
              <Form.Control
                name="question"
                as="textarea"
                rows={3}
                onChange={(event) => setQuestion(event.target.value)}
              />
            </Form.Group>
            <Form.Control
              type="hidden"
              name="course_id"
              value={props.course_id}
              placeholder="Enter lastname"
              autoFocus
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modelhandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={modelhandleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NewEnquiry;

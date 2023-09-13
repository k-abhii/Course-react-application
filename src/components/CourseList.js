import React, { useState } from "react";
import { Courses } from "../db/courses";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NewEnquiry from "./NewEnquiry";
import Enquires from "../db/enquires";

const CourseList = () => {
  const [show, setShow] = useState(false);
  const [courseId, setCourseId] = useState();
  const [enquires, setEnquiry] = useState(Enquires);
  const handleClose = (event) => setShow(false);

  // Event handler to manage course
  const openModel = (courseId, event) => {
    setCourseId(courseId);
    // console.log(courseId);
    setShow(true);
  };
  // Event Handler for save new Enquiry
  const addNewEnquiry = (newEnquiry) => {
    setEnquiry((prevEnquires) => prevEnquires.concat(newEnquiry));
    //console.log(enquires);
    setShow(false);
  };
  return (
    <>
      <Row xs={1} md={4} className="g-2">
        {Courses.map((course) => (
          <Col key={course.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="img/courseimg.jpg" />
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={(e) => openModel(course.id, e)}
                >
                  Enquiry
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <NewEnquiry
        show={show}
        courseid={courseId}
        onSaveEnquiry={addNewEnquiry}
        onModelClose={handleClose}
      />
    </>
  );
};

export default CourseList;

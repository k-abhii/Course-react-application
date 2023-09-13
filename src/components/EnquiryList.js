import React,{useState} from 'react';
import  Enquires  from '../db/enquires';
import  {Courses}  from '../db/courses';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import NewEnquiry from './NewEnquiry';
/*** Array find function to find and return object */
function foundCourse (cobj,id) {
    const found = cobj.find(obj => { return obj.id === id});
    return found.name;
}


const EnquiryList = () => {
    const [show, setShow] = useState(false);
    const handleClose = (event) => setShow(false);
    
    const  openModel = (props) => {
        
        setShow(true);
    }


return (
    
    <>
   <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>course</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {Enquires.map((enq) => 
       
        <tr key={enq.id}>
          <td>{enq.id}</td>
          <td>{enq.firstname}</td>
          <td>{enq.lastname}</td>
          <td>{foundCourse(Courses,enq.course_id)}</td>
          <td> <Button variant="outline-primary" course_id="1" onClick={openModel}  >View detail</Button></td>  
        </tr>)}
      </tbody>
    </Table>
    <NewEnquiry show={show} onModelClose={handleClose}/>    
    </>
    
    )
};



export default EnquiryList;
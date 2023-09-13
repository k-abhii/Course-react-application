import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseList from "../components/CourseList";
import EnquiryList from "../components/EnquiryList";
import Layout1 from "../layout/Layout1";
function AppRoutes(props) {
  return (
    <div>
      <Router>
        <Layout1>
          <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/enquiry-list" element={<EnquiryList />} />
          </Routes>
        </Layout1>
      </Router>
    </div>
  );
}

export default AppRoutes;

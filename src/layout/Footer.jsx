import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          
          
          <div className="col-md-4 col-lg-3 col-sm-6  mb-4">
            <h5 className="fw-bold">CONTACT US</h5>
            <p> <b>Our Branches</b></p>
            <ul className="list-unstyled text-light">
              <li>A K Road</li>
              <li>Yogi Chowk</li>
              <li>Sarthana</li>
              <li>Mota Varachha</li>
              <li>Ved Road</li>
              <li>Adajan</li>
              <li>Dindoli</li>
              <li>Vesu</li>
            </ul>
            <p><FontAwesomeIcon icon={faPhone} /> +91 7878 444 333</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> info@rnwmultimedia.edu.in</p>
          </div>

         
          <div className="col-md-4 col-lg-3 col-sm-6 mb-4">
            <h5 className="fw-bold">TRENDING COURSE</h5>
            <ul className="list-unstyled text-light">
              <li>GIM</li>
              <li>PHP</li>
              <li>Project Training Surat</li>
              <li>Android Training Course</li>
              <li>Web Designing Training</li>
              <li>Full Stack Development</li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3 col-sm-6 mb-4">
            <h5 className="fw-bold">IMPORTANT PAGES</h5>
            <ul className="list-unstyled text-light">
              <li>Home</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Events</li>
              <li>Approval</li>
              <li>Students T&C</li>
              <li>Sitemap</li>
              <li>Student Login</li>
            </ul>
          </div>

         
          <div className="col-md-4 col-lg-3 col-sm-6 mb-4">
            <h5 className="fw-bold">BE RECRUITER</h5>
            <ul className="list-unstyled">
              <li> Company Login/Register</li>
              <li> Company T&C</li>
              <li> Placement Student Login</li>
              <li> Placement Student T&C</li>
            </ul>
            <p><FontAwesomeIcon icon={faPhone} /> +91 93313 13196</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> placement@rnwmultimedia.edu.in</p>
          </div>
        </div>

        <hr className="text-white" />
        <div className="text-center">
          <p className="mb-0">2025 RNW Multimedia. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

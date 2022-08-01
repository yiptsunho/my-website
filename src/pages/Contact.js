import React from 'react';
import Cover from '../components/js/Cover';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../components/js/Constants';

function Contact() {
  const form = useRef();
  const [content, setContent] = useState("")

  function changeContent(e) {
    setContent(e.target.value)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <Cover className="contact" pageName="Contact" />
      <div className="container-fluid">
        <div className="row title">
          <h5 style={{color: "white"}}>Get in Touch</h5>
          <h2>Contact Me</h2>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-5"  style={{textAlign: "center"}}>
            <div className="resume-card">
              <div className="row">
                <i className="fa-solid fa-envelope fa-2x" />
              </div>
              <div className="row testing-header">
                <h4>Email</h4>
              </div>
              <div className="row testing-text" style={{wordWrap: "break-word"}}>
                <h6>thyipac@connect.ust.hk</h6>
              </div>
              <a href="mailto:thyipac@connect.ust.hk" target="_blank" className="row title">
                Send a message
              </a>
            </div>
            <div className="resume-card">
              <div className="row">
                <i className="fa-brands fa-linkedin fa-2x" />
              </div>
              <div className="row testing-header">
                <h4>LinkedIn</h4>
              </div>
              <div className="row testing-text">
                <h6>Yip Tsun Ho</h6>
              </div>
              <a href="https://www.linkedin.com/in/jacky-yip-81953318b" target="_blank" className="row title">
                Send a message
              </a>
            </div>
            <div className="resume-card">
              <div className="row">
              <i className="fa-brands fa-whatsapp fa-2x" />
              </div>
              <div className="row testing-header">
                <h4>Whatsapp</h4>
              </div>
              <div className="row testing-text">
                <h6>(852) 6375-1202</h6>
              </div>
              <a href="https://wa.me/85263751202" target="_blank"className="row title">
                Send a message
              </a>
            </div>
          </div>
          <form className="col-md-5" ref={form} onSubmit={sendEmail}>
            <div className="my-3">
              <input type="text" className="form-control" name="senderName" id="userFullName" placeholder="Your full name" required/>
            </div>
            <div className="my-3">
              <input type="email" className="form-control" name="senderEmailAddress"id="userEmail" aria-describedby="emailHelp" placeholder="Your email address" required/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="my-3">
              <textarea className="form-control" name="content" id="userComment" maxLength="1000" aria-describedby="textHelp" rows="6" placeholder="Your comment" value={content} onChange={changeContent} required/>
              <div id="textHelp" className="form-text">{1000 - content.length} character(s) left. Maximum 1000 characters.</div>
            </div>
            <div className="my-3">
              <button type='submit' className="btn btn-primary">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

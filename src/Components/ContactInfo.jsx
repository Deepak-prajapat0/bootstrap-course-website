import React from 'react'

function ContactInfo() {
  return (
    <address
    id="contact"
    className="d-flex flex-column gap-2"
    style={{ maxWidth: "14rem" }}
  >
    <h4>Get in touch</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
      doloribus aut aliquam?
    </p>
    <span>
      Email: <span className="text-primary">abcd@gmail.com</span>
    </span>
    <span>Phone : 9876543210</span>
  </address>
  )
}

export default ContactInfo
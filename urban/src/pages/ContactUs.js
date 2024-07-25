import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or would like to get in touch, please use the contact details below.</p>
      <p>Email: contact@urbangeneraldealers.com</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: 123 Main Street, City, Country</p>
      <form>
        <h2>Contact Form</h2>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;

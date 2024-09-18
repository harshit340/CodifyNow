import React from 'react';
import "../style/Form.css"
export default function Form() {
  return (
    <>
      <div className="container">
        <div className="form-wrapper">
          <h2>Connect With Us</h2>

          <form>
            <input placeholder="Full Name" type="text" className="input-field" />
            <input placeholder="Email" type="email" className="input-field" />
            <input placeholder="Phone Number" type="text" className="input-field" />
            <input placeholder="Location" type="text" className="input-field" />
            <textarea placeholder="Message For Us" name="cover_letter" className="input-field"></textarea>
           

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}


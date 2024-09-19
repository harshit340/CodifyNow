/* eslint-disable react/no-unescaped-entities */

import '../style/footer.css'; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="space-y-6">
            <h2 className="footer-heading">Stay Connected</h2>
           
            
            <div className="footer-border">
              <p className="footer-text-sm">&copy; {new Date().getFullYear()} Your Freelance Business. All rights reserved.</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="footer-heading">Let's Connect</h2>
            <p className="footer-text-lg">
              Have a project in mind? Get in touch and let's create something amazing together.
            </p>
            <form className="footer-form" >
              
                <input
                  type="text"
                  placeholder="Your Name"
                  className="footer-input"
                  style={{color:"white"}}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="footer-input" style={{color:"white" }}
                />
              
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="footer-input"
                style={{color:"white"}}
              />
              <input
                type="text"
                placeholder="Your Location"
                className="footer-input"
                style={{color:"white"}}
              />
              
              <button
                type="submit"
                className="footer-button"
              >
                Send Message
                
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}


import Nav from "./Components/Nav"
import Form from "./Components/Form"
import { HiCubeTransparent } from "react-icons/hi"
import './App.css'
import MyServices from './Components/Service'
import Testimonial from "./Components/Testimonial"
import Footer from "./Components/Footer"


export default function App() {
  return (
    <div>
      <Nav />
      <main >
        <div className="custom-container" style={{ marginTop: "40px" }}>
          <span className="custom-badge">
            Hello!
            <span className="custom-checkmark">✓</span>
          </span>
        </div>

        <h1 className="main-heading">
          We are <span className="highlight">CodifyNow</span>
        </h1>
        <h2 className="sub-heading" style={{ fontSize: "30px", color: "black", fontWeight: "bold" }}>We Works with heart</h2>

       
          <Form  />


      
        <div className="Rating" style={{marginBottom:"20px"}} >
           
           <div>
            <div>100+</div>
           <div>Client Served</div>
           </div>
           
          
           <div>Clients in 15+ Countrie</div>
          
            <div >
              <div>20+</div>
              <div>Industry Covered</div>
            </div>
            
          
         
           
        
        </div>


        <div className="why-choose-us">
          <h2 className="section-title" style={{ color: "black" }}>Why Choose Us</h2>
          <p style={{ fontSize: "18px", fontWeight: 400, marginBottom: "40px", color: "GrayText" }}>
            CodifyNow is a Bangalore-based company founded in 2020. We specialize in web development, app development, and digital marketing. Our goal is to deliver high-quality, scalable solutions for businesses looking to establish or improve their online presence.
          </p>
          <div className="cards-container">
            <div className="card">
              <div className="icon-container">
                <HiCubeTransparent style={{ fontSize: "50px" }} />
              </div>
              <h3 className="card-title">Reliability</h3>
              <p className="card-description">
                We consistently deliver high-quality work on time, ensuring dependable results for every project.
              </p>
            </div>
            <div className="card">
              <div className="icon-container">
                <HiCubeTransparent style={{ fontSize: "50px" }} />
              </div>
              <h3 className="card-title">Expertise</h3>
              <p className="card-description">
                Our team comprises skilled professionals with deep knowledge across various domains, guaranteeing exceptional solutions
              </p>
            </div>
            <div className="card">
              <div className="icon-container">
                <HiCubeTransparent style={{ fontSize: "50px" }} />
              </div>
              <h3 className="card-title">Transparency</h3>
              <p className="card-description">
                We maintain open communication and provide clear updates throughout the project, fostering trust and confidence
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "60px" }}>
          <MyServices />
        </div>

        <div style={{ marginTop: "90px" }} >
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", fontSize: "40px", marginTop: "60px", fontWeight: 700, }}>
            <div>
              Testimonials that
            </div>
            <div>
              Speak to <span style={{ color: "orange" }}>My Results</span>
            </div>
          </div>

           <Testimonial />
        </div>
        <div style={{ marginTop: "60px" }}>
          <Footer />
        </div>
      </main>
    </div>
  )
}

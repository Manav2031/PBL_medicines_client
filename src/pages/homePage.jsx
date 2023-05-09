import React from "react";

export default function Home() {
    return (
        // <div>
        //     <h1> Home </h1>
        // </div>
        <main>
        <div class="intro">
          <h1>THE MED PORTAL</h1>
          <p>A medicine supply chain optimization<br></br> <span class="gh">project</span></p>
          <button>GET STARTED</button>
        
        </div>
        <div class="achievements">
          <div class="work1">
            <h2>KEY FEATURES</h2>
          </div>
          <div class="work">
          {/* <h2>ABOUT THE PROJECT</h2> */}
            <i class="fas fa-atom"></i>
            
            <p class="work-heading">CREATE DIGITAL PRESCRIPTION</p>
            <p class="work-text">Doctors can create digital prescription to save patient records online</p>
          </div>
          <div class="work">
            <i class="fas fa-skiing"></i>
            <p class="work-heading">IMMEDIATE ORDER-PLACING</p>
            <p class="work-text">Through the saved prescriptions, order can be directly placed through our website </p>
          </div>
          <div class="work">
            <i class="fas fa-ethernet"></i>
            <p class="work-heading">VERIFY COUNTER-FEITING</p>
            <p class="work-text">Verify authenticity of drugs using blockchain</p>
          </div>
        </div>
        <div class="about-me">
          <div class="about-me-text">
            <h2>ABOUT US</h2>
            {/* <p></p> */}
          </div>
          <img
          src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="me">
          </img>
        </div>
      </main>
     
    )
}

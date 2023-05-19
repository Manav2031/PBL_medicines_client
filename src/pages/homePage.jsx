import React from "react";
import {useNavigate} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/logindoctor");
  }
    return (
        // <div>
        //     <h1> Home </h1>
        // </div>
        <main>
        <div class="intro">
          <h1>THE MED PORTAL</h1>
          <p>" A medicine supply chain optimization<br></br> <span class="gh">project  "</span></p>
          <button onClick={handleClick}>GET STARTED</button>
        
        </div>
        <CardGroup>
      <div className="title"><h1>KEY<br></br> FEATURES</h1></div>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <div className="icon1"><svg stroke="currentColor" fill="currentColor" paddign="10px" stroke-width="0" viewBox="0 0 384 512" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm68.53 179.48l11.31 11.31c6.25 6.25 6.25 16.38 0 22.63l-29.9 29.9L304 409.38c6.25 6.25 6.25 16.38 0 22.63l-11.31 11.31c-6.25 6.25-16.38 6.25-22.63 0L240 413.25l-30.06 30.06c-6.25 6.25-16.38 6.25-22.63 0L176 432c-6.25-6.25-6.25-16.38 0-22.63l30.06-30.06L146.74 320H128v48c0 8.84-7.16 16-16 16H96c-8.84 0-16-7.16-16-16V208c0-8.84 7.16-16 16-16h80c35.35 0 64 28.65 64 64 0 24.22-13.62 45.05-33.46 55.92L240 345.38l29.9-29.9c6.25-6.25 16.38-6.25 22.63 0zM176 272h-48v-32h48c8.82 0 16 7.18 16 16s-7.18 16-16 16zm208-150.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg></div>
        <Card.Body>
          <Card.Title>CREATE DIGITAL PRESCRIPTION</Card.Title>
          <Card.Text>
          Doctors can create digital prescription to save patient records online
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
      <div className="icon2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg"><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"></path></svg></div>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title>IMMEDIATE ORDER-PLACING</Card.Title>
          <Card.Text>
          Through the saved prescriptions, order can be directly placed through our website
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {/* <small className="text-muted"></small> */}
        </Card.Footer>
      </Card>
      <Card>
      <div className="icon3"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg"><path d="M2 2h2v2H2V2Z"></path><path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z"></path><path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z"></path><path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z"></path><path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z"></path></svg></div>
      {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title>VERIFY COUNTER-FEITING</Card.Title>
          <Card.Text>
          Verify authenticity of drugs using blockchain
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>
    
    {/* meet the team */}
        <div class="container text-center mt-5 mb-2">
        <h3 class="mb-0">MEET THE TEAM</h3></div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-3">
                <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded-circle" src="https://i.imgur.com/uppKNuF.jpg" width="90"></img>
                    <h5 class="mt-3 name">Samuel Plamer</h5><span class="work d-block">Comapay agents house</span><span class="work d-block">real estate</span>
                    <div class="mt-4 about"><span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span></div>
                    <div class="mt-4">
                    <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded-circle" src="https://i.imgur.com/oJmLthK.jpg" width="90"></img>
                    <h5 class="mt-3 name">Nancy Markus</h5><span class="work d-block">Comapay agents house</span><span class="work d-block">real estate</span>
                    <div class="mt-4 about"><span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span></div>
                    <div class="mt-4">
                    <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded-circle" src="https://i.imgur.com/oJmLthK.jpg" width="90"></img>
                    <h5 class="mt-3 name">Nancy Markus</h5><span class="work d-block">Comapay agents house</span><span class="work d-block">real estate</span>
                    <div class="mt-4 about"><span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span></div>
                    <div class="mt-4">
                    <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded-circle" src="https://i.imgur.com/HFpxxJz.jpg" width="90"></img>
                    <h5 class="mt-3 name">Martha Col</h5><span class="work d-block">Comapay agents house</span><span class="work d-block">real estate</span>
                    <div class="mt-4 about"><span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span></div>
                    <div class="mt-4">
                    <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded-circle" src="https://i.imgur.com/MZm1LNz.jpg" width="90"></img>
                    <h5 class="mt-3 name">Marry Jones</h5><span class="work d-block">Comapay agents house</span><span class="work d-block">real estate</span>
                    <div class="mt-4 about"><span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span></div>
                    <div class="mt-4">
                        {/* <h6 class="v-profile">View Profile</h6> */}
                        <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About the Project</span> When the patient is admitted to the hospital,the doctor enters the prescription into the database onto the website. This data is checked in accordance with the current stock of the in-house medical store. In case the prescribed drug is currently unavailable in the in-house medical store, the website directs the user to the nearest medical store.Now if the medicine is available in the in-house store then we use Blockchain technology to check the authenticity of the drug.It tells us if the drug is sourced from a legitimate manufacturer or not. 
Thus making the supply chain very transparent and reliable.
    </p>
    <div class="icons">
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-google-plus"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p>PICT,Pune</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (+00) 0000 000 000</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="#"> office@company.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <h2> Company<span> logo</span></h2>
    <p class="menu">
      <a href="#"> Home</a> |
      <a href="#"> About</a> |
      <a href="#"> Services</a> |
      <a href="#"> Portfolio</a> |
      <a href="#"> News</a> |
      <a href="#"> Contact</a>
    </p>
    <p class="name"> Company Name &copy; 2016</p>
  </div>
</footer>
      </main>
     
    )
}

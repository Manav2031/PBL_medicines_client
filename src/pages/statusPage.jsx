import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Status()
{
    const available=false;
    if(available===true) {
    return (
        <div>
            <Available />
        </div>
    )
    }
    else {
        return (
            <div>
                <NotAvailable />
            </div>
        )
    }
}

function Available() 
{
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
    return (
      <>
      <section className="vh-100" style={{ backgroundColor: "white" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100 text-center">
            <MDBCol>
              <MDBBtn color='dark' size="lg" onClick={toggleShow}>
                <MDBIcon fas icon="info me-2" /> Get update
              </MDBBtn>
              <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader className="border-bottom-0">
                      <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={toggleShow}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody className="text-start text-black p-4">
                      <MDBTypography
                        tag="h5"
                        className="modal-title text-uppercase mb-5"
                        id="exampleModalLabel"
                      >
                         MEDICINE AVAILABLE!
                         <img 
                         src="https://cdn-icons-png.flaticon.com/512/5278/5278681.png">
                         

                         </img>
                      </MDBTypography>


                      <MDBTypography
                        tag="h4"
                        className="mb-5"
                        style={{ color: "#35558a", align:"center" }}
                        
                      >
                        
                        
                        <Button variant="primary">proceed to consent form.</Button>{' '}
                       
                       </MDBTypography>
                       {/* <p className="mb-0" style={{ color: "#35558a" }}>
                        Payment summary
                      </p> */}
                      {/* <hr
                        className="mt-2 mb-4"
                        style={{
                          height: "0",
                          backgroundColor: "transparent",
                          opacity: ".75",
                          borderTop: "2px dashed #9e9e9e",
                        }}
                      /> */}

                      {/* <div className="d-flex justify-content-between">
                        <p className="fw-bold mb-0">medicine quantitiy</p>
                        <p className="text-muted mb-0">15</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="small mb-0">costs</p>
                        <p className="small mb-0">$175.00</p>
                      </div>

                      <div className="d-flex justify-content-between pb-1">
                        <p className="small">Tax</p>
                        <p className="small">$200.00</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="fw-bold">Total</p>
                        <p className="fw-bold" style={{ color: "#35558a" }}>
                          $2125.00
                        </p>
                      </div> */}
                     </MDBModalBody> 

                    {/* <MDBModalFooter className="d-flex justify-content-center border-top-0 py-4">
                      <MDBBtn
                        size="lg"
                        style={{ backgroundColor: "#35558a" }}
                        className="mb-1"
                      >
                        your order will be delivered shortly, get well soon!
                      </MDBBtn>
                    </MDBModalFooter> */}
                    {/* <div className="sub">
                      <input type="submit">proceed</input>
                    </div> */}
                    


                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );

}

function NotAvailable() 
{
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
    return (
      <>
      <section className="vh-100" style={{ backgroundColor: "white" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100 text-center">
            <MDBCol>
              <MDBBtn color='dark' size="lg" onClick={toggleShow}>
                <MDBIcon fas icon="info me-2" /> Get update
              </MDBBtn>
              <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader className="border-bottom-0">
                      <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={toggleShow}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody className="text-start text-black p-5">
                      <MDBTypography
                        tag="h5"
                        className="modal-title text-uppercase mb-5"
                        id="exampleModalLabel"
                      >
                         MEDICINE NOT AVAILABLE!
                         <img 
                         src="https://www.shutterstock.com/image-vector/house-not-available-icon-flat-260nw-1030785001.jpg">
                         

                        </img>
                        SORRY! PLEASE CHECK BACK AGAIN LATER!
                      </MDBTypography>


                      <MDBTypography
                        tag="h4"
                        className="mb-5"
                        style={{ color: "#35558a", align:"center" }}
                        
                      >
                        
                        
                        <Button variant="primary">proceed.</Button>{' '}
                       
                       </MDBTypography>
                       {/* <p className="mb-0" style={{ color: "#35558a" }}>
                        Payment summary
                      </p> */}
                      {/* <hr
                        className="mt-2 mb-4"
                        style={{
                          height: "0",
                          backgroundColor: "transparent",
                          opacity: ".75",
                          borderTop: "2px dashed #9e9e9e",
                        }}
                      /> */}

                      {/* <div className="d-flex justify-content-between">
                        <p className="fw-bold mb-0">medicine quantitiy</p>
                        <p className="text-muted mb-0">15</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="small mb-0">costs</p>
                        <p className="small mb-0">$175.00</p>
                      </div>

                      <div className="d-flex justify-content-between pb-1">
                        <p className="small">Tax</p>
                        <p className="small">$200.00</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="fw-bold">Total</p>
                        <p className="fw-bold" style={{ color: "#35558a" }}>
                          $2125.00
                        </p>
                      </div> */}
                     </MDBModalBody> 

                    {/* <MDBModalFooter className="d-flex justify-content-center border-top-0 py-4">
                      <MDBBtn
                        size="lg"
                        style={{ backgroundColor: "#35558a" }}
                        className="mb-1"
                      >
                        your order will be delivered shortly, get well soon!
                      </MDBBtn>
                    </MDBModalFooter> */}
                    {/* <div className="sub">
                      <input type="submit">proceed</input>
                    </div> */}
                    


                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );

}

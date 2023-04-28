import React,{useState} from "react";
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
    const available=true;
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
      <section className="vh-100" style={{ backgroundColor: "#35558a" }}>
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
                         PATIENT NAME
                      </MDBTypography>
                      <MDBTypography
                        tag="h4"
                        className="mb-5"
                        style={{ color: "#35558a" }}
                      >
                        Thanks for your order
                      </MDBTypography>
                      <p className="mb-0" style={{ color: "#35558a" }}>
                        Payment summary
                      </p>
                      <hr
                        className="mt-2 mb-4"
                        style={{
                          height: "0",
                          backgroundColor: "transparent",
                          opacity: ".75",
                          borderTop: "2px dashed #9e9e9e",
                        }}
                      />

                      <div className="d-flex justify-content-between">
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
                      </div>
                    </MDBModalBody>

                    <MDBModalFooter className="d-flex justify-content-center border-top-0 py-4">
                      <MDBBtn
                        size="lg"
                        style={{ backgroundColor: "#35558a" }}
                        className="mb-1"
                      >
                        your order will be delivered shortly, get well soon!
                      </MDBBtn>
                    </MDBModalFooter>
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
    return (
        <div className="notavailable">
              <h3> Medicines are not available </h3>
        </div>
    )
}

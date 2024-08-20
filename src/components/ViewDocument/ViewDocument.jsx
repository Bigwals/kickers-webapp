import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ViewDocument.css'

const ViewDocument = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    {/* <Modal.Title id="contained-modal-title-vcenter">
                        DXB Car Details
                    </Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <h5 className='details'>Details</h5>
                    

                    <div className="VAT fields">
                        <span>VAT Number:</span>
                        <span>{props.ValtName}</span>
                    </div>

                    <div className="location fields">
                        <span>Location</span>
                        <span>{props.Loaction}</span>
                    </div>

                    <div className="authority">
                        <h5>Authorized Signatory</h5>

                        <div className="signatory fields">
                            <div className='name'>
                                <div className="signImg">
                                    <img src="https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg" alt="" />
                                </div>

                                <div className="signDetail">
                                    <h6>{props.name}</h6>
                                    <span>{props.email}</span>
                                </div>
                            </div>

                            <div className="position">
                                <h6>Position</h6>
                                <span>{props.position}</span>
                           

                        </div>


                        <div className="signatory fields">
                            <div className='name'>
                                <div className="signImg">
                                    <img src="https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg" alt="" />
                                </div>

                                <div className="signDetail">
                                    <h6>{props.name}</h6>
                                    <span>{props.email}</span>
                                </div>
                            </div>

                            <div className="position">
                                <h6>Position</h6>
                                <span>{props.position}</span>
                            </div>
                        </div>
                        </div>
                     
                    </div>
                    {props.showBtn &&  <div style={{width:'100%',display:'flex',justifyContent:'end'}}>
                    <div className='buttonNotification' >
          <Button id='buttonAll'>{props.btnText}</Button>
          
        </div>
        </div> }
        {props.showBtn2 && <div style={{display:'flex',justifyContent:'space-around'}}> 
            <div className="buttonNotification">
            <Button id='buttonAll'>{props.btnText2}</Button>
             </div>
            <div className="buttonNotification">
            <Button id='buttonAll'>{props.btnText3}</Button>
            </div>
        </div>}
        
                   
                    <div>

                    </div>


                </Modal.Body>

            </Modal>

        </>
    )
}

export default ViewDocument
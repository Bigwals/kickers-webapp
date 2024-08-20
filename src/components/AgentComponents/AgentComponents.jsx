import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export const AgentComponents = (props) => {
  return (
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

        </Modal.Body>
        <div style={{padding:'10px'}}>
            <h5 className='details'>Add Kickers Agent</h5>
        <p>Create a new account</p>
        <h6>Username</h6>
        <input placeholder='jhondoe1'/>
        <h6 style={{marginTop:'10PX'
        }}>Name</h6>
        <input placeholder ='Name' />
        <h6 style={{marginTop:'10PX'
        }}>Password</h6>
        <input placeholder='*****' />
        <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}> 
            <div>
                <Button id='buttonAll'>Cancel </Button>

            </div>
            <div>
            <Button id='buttonAll'>Create </Button>

            </div>
        </div>
        </div>
        </Modal>
  )
}

import React from 'react'
import "./ApprovedCard.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import Popup from '../Popup';


const ApprovedCard = ({ name, dateTime, location, documentButton, rejectbtn, acceptbtn, img, handleFunction }) => {
    const [modalShow, setModalShow] = React.useState(false)
    return (
        <>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center', gap: '20px' }}>

                <div className='outer'>
                    <div className="innerFirst">
                        <div className="innerImg">
                            <img src={img} alt="" />
                        </div>
                        <div className="innerName">
                            <h1>{name}</h1>
                            <p>{dateTime}</p>
                        </div>
                    </div>

                    <div className="location">
                        <FaMapMarkerAlt style={{ fontSize: '16px' }} />
                        <div>{location}</div>
                    </div>

                    <div className="documents">
                        <div className="firstDocument">
                            <button className='transparent' onClick={handleFunction}>{documentButton}</button>
                        </div>
{/* 
                            <ViewDocument
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            /> */}



                    </div>
                </div>
            </div>

        </>
    )
}

export default ApprovedCard
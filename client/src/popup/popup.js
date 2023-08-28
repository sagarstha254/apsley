import React, { useState }  from "react";
import './Popup.css'
function PopUp(){
    const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const closePopup=()=>{
        setPop(false)
    }
    return(
        <div className="special">
            <button onClick={handleClickOpen} className="special-offer-button">
            Special Offer
          </button>
            <div>
                {
                    popup?
                    <div className="main1">
                        <div className="popup">
                            <div className="picture">
                            <img onClick={closePopup} src="https://live.staticflickr.com/7348/13106562225_d06ed36047_b.jpg" alt="Apsley Arms Hotel" />
                            </div>
                        </div>
                    </div>:""
                }
            </div>
        </div>
    )
}
export default PopUp;
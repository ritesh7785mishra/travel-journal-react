import React from "react"
import location from "../images/location.png"
import pointer from "../images/placeholder.png"

export default function MainContent(props){
    

    return(
        <div className="main">
            <img className="main-img" src={props.imageUrl} alt="Mountfuji"/>
            <div className="side-detail">
                <div className="location">
                    <div className="pointer-country">
                        <img className="pointer-img" src={pointer} alt="google-maps pointer"/>
                        <p className="country">{props.location}</p>
                    </div>
                    <a className="map-link" target="_blank"  href={props.googleMapsUrl}>View on Google Maps</a>
                </div>

                <h1 className="title">{props.title}</h1>
                <p className="dates"><strong>{props.startDate}-{props.endDate}</strong></p>
                <p className="discription">{props.description}</p>

            </div>
        </div>
    )
}
import React from "react";
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Card(props){
   
    return (
        <> 
            <div className="Card" onClick={props.onClick}>
                <div className="title">
                    <h3 className="Card-title">{props.title}</h3>
                </div>
                <div className="desc">
                    <p className="Card-description">{props.description}</p>
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faArrowRight} id="icon-logo"/>
                </div>
            </div>
        </>
    );
}


export default Card;
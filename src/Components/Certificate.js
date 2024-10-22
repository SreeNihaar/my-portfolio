import React from 'react';
import './Certificate.css';

function Certificate(props){
    return(
        <>
            <div className="certificate">
                <div className="cert-image">
                    <img src={props.src} alt="" />
                </div>
                <div className="cert-name-div">
                    <h3 className="cert-name">
                        {props.name}
                    </h3>
                    By: <b className="company">
                        {props.company}
                    </b>
                </div>
                <div className="cert-link">
                    Link: <a href={props.link} target='_blank' rel='noreferrer'><i className="fas fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
        </>
    );
}

export default Certificate;
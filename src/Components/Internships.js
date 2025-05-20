import React from 'react';
import './Internships.css';

function Internships(props){
    return(
        <>
        <h2 className="headings" id={props.id}>Internships💼</h2>
            <div className="internship-class">
                <div className="intern" id='intern1'>
                    <h2 className="head">
                        Web Developer Intern
                    </h2>
                    <h4 className="company">
                        Main Flow Services and Technologies
                    </h4>
                    <p className="date">April'24 to June'24, Virtual</p>
                </div>
                <div className="intern" id='intern2'>
                    <h2 className="head">
                        Data Science and Machine Learning Intern
                    </h2>
                    <h4 className="company">
                        HDLC Technologies
                    </h4>
                    <p className="date">May'23 to June'23, Virtual</p>
                </div>
            </div>
        </>
    );
}

export default Internships;
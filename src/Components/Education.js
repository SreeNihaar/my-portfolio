import React from 'react';
import './Education.css';

function Education(props){
    return(
        <>
            <h2 className="headings" id={props.id}>Education🎓</h2>
            <div className="education-panel">
                <div className="education" id="undergraduate">
                    <h3>University College of Engineering Kakinada(A), JNTUK</h3>
                    <p>Kakinada, Andhra Pradesh</p>
                    <p>2021 - 2025</p>
                    <p><b>8.5 CGPA</b></p>
                </div>
                <div className="education" id="intermediate">
                    <h3>Sri Chaitanya Jr. College</h3>
                    <p>Narasaraopet, Andhra Pradesh</p>
                    <p>2019 - 2021</p>
                    <p><b>98.3 %</b></p>
                </div>
                <div className="education" id="ssc">
                    <h3>Hindu High School</h3>
                    <p>Narasaraopet, Andhra Pradesh</p>
                    <p>2018 - 2019</p>
                    <p><b>10 GPA</b></p>
                </div>
            </div>
        </>
    );
}

export default Education;
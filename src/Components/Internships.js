import React from 'react';
import './Internships.css';

function Internships(props){
    return(
        <>
        <h2 className="headings" id={props.id}>Internships💼</h2>

            <div className="internship-class">
                <div className="intern" id='intern1'>
                    <h2 className="head">
                        Engineering Intern
                    </h2>
                    <h4 className="company">
                        FactSet Research Systems Inc.
                    </h4>
                    <p className="date">January'25 to Present, Hyderabad (Onsite)</p>
                    <p className='description'> 
                        <ul>
                            <li>Worked on AWS cloud to improve scalability and performance.</li>
                            <li>Optimizing C++ code for efficient data ingestion and transmission from global stock exchanges.</li>
                            <li>Troubleshooting and resolving system migration issues while ensuring system reliability.</li>
                            <li>Working with cloud infrastructure (AWS), Jira, and internal tools to support development workflows.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Internships;
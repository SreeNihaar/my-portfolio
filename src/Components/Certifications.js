import React from 'react';
import Certificate from './Certificate.js';
import './Certifications.css';

function Certifications(props){
    return(
        <>  
            <h2 className="headings" id={props.id}>Certifications📜</h2>
            <div className="certifications-class" >
                <Certificate src="my-portfolio/Certificate images/HackerRank.png" name='SQL Intermediate Certificate of Accomplishment' company='HackerRank' link='https://www.hackerrank.com/certificates/11cf531bd285'/>
                <Certificate src="my-portfolio/Certificate images/AdvancedLearningAlgorithms.png" name='Advanced Learning Algorithms' company='Coursera' link='https://coursera.org/verify/A4YV7KDAPWL3'/>
                <Certificate src="my-portfolio/Certificate images/SmartInterviews.png" name='Smart Coder - Smart Interviews' company='Smart Interviews'  link='https://smartinterviews.in/certificate/006adb15'/>
                <Certificate src="my-portfolio/Certificate images/SupervisedMachine.png" name='Supervised Machine Learning: Regression and Classification' company='Coursera' link='https://www.coursera.org/verify/FWSWXPEQE63S'/>
                <Certificate src="my-portfolio/Certificate images/Main_Flow_Image.jpg" name='Certificate of Internship' company='Main Flow Services and Technologies' link='https://www.linkedin.com/posts/sree-nihaar-chaturvedula_webdevelopment-fullstack-html-activity-7212327839906287616-Z3F8?utm_source=share&utm_medium=member_desktop'/>
                <Certificate src="my-portfolio/Certificate images/NPTEL_Data_Science.jpg" name='Data Science for Engineers' company='NPTEL Online Certification' link='https://www.linkedin.com/posts/sree-nihaar-chaturvedula_datascience-r-nptel-activity-7186539428171898880-yk-3?utm_source=share&utm_medium=member_desktop'/>
                <Certificate src="my-portfolio/Certificate images/HDLC_Image.jpg" name='Certificate of Internship' company='HDLC Technologies' link='https://www.linkedin.com/posts/sree-nihaar-chaturvedula_machinelearning-internship-datascience-activity-7082282729572073472-AF-j?utm_source=share&utm_medium=member_desktop'/>
                <Certificate src='my-portfolio/Certificate images/NPTEL_JAVA_image.jpg' name='Programming in Java' company='NPTEL Online Certification' link='https://www.linkedin.com/posts/sree-nihaar-chaturvedula_java-nptel-activity-7067136728569942016-DMTG?utm_source=share&utm_medium=member_desktop'/>
            </div>
        </>
    );
}

export default Certifications;
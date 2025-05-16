import React from 'react';
import './AboutMe.css';

function AboutMe(){
    return(
        <>
        <h2 className='headings'>About Me🤔</h2>
        <div className="aboutme">
            <div className="aboutme-photo">
                <img src="/my images/Another_Sree_Nihaar_Photo.jpeg" alt="" id='aboutme-img'/>
            </div>
            <div className="aboutme-desc">
                <p>
                I'm <a href="https://www.linkedin.com/in/sree-nihaar-chaturvedula" target='_blank' rel='noreferrer'>Sree Nihaar Chaturvedula</a>, a dedicated programmer and developer with a passion for learning and adapting to new technologies. I have hands-on experience in web development, building responsive and interactive applications using HTML, CSS, JavaScript and React as well as applying machine learning models for data analysis. With a strong problem-solving mindset, I’ve tackled over 400 <a href="https://leetcode.com/SreeNihaar" target='_blank' rel='noreferrer'>LeetCode</a> problems and earned recognition for my academic achievements. I’m always eager to take on new challenges, enhance my skills, and contribute to innovative projects in dynamic environments.
                </p>
            </div>
        </div>
        </>
    );
}

export default AboutMe;
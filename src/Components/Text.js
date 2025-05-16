import React from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import './Text.css';

function Text(){
    const words= ['Programmer.','Problem Solver.','Web Developer.','Machine Learning Enthusiast.'];

    const [text]=useTypewriter({
        words: words,
        loop:{},
    });

    return (
        <>
        <div className="text-container">
            <div className="my-details">
                <div className='my-text'>
                    <h1>
                        Hi There!
                        I am Sree Nihaar Chaturvedula, <br />
                        I am a 
                        <span style={{fontWeight: "bold",color:'orange'}}> {text}</span>
                        <Cursor cursorColor='orange'/>
                    </h1>
                </div>
                <div className="link-panel">
                    <div className="links">
                        <a href="https://www.linkedin.com/in/sree-nihaar-chaturvedula" target='_blank' rel='noreferrer'>
                            <i className='fab fa-linkedin link-child' id='linkedin'></i>
                        </a>
                        <a href="https://github.com/SreeNihaar" target='_blank' rel='noreferrer'>
                            <i className="fab fa-github link-child" id='github' ></i>
                        </a>
                        <a href="https://www.instagram.com/sreenihaar/" target='_blank' rel='noreferrer'>
                            <i className="fab fa-instagram link-child" id='instagram'></i>
                        </a>
                        <a href="mailto:sreenihaarchaturvedula04@gmail.com" target='_blank' rel='noreferrer'>
                            <img src="./gmail.svg" className='link-child' id='gmail'  alt='gmail'/>
                        </a>
                    </div>
                </div>
                <div className="get-resume">
                    <a href="./Sree-Nihaar-Chaturvedula-Resume.pdf" download={'Sree_Nihaar_Chaturvedula_Resume.pdf'}>
                        <button id='resume-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            
            <div className="my-photo">
                <img src="./my images/NihaarPhoto.jpg" id='my-photo-img' alt="" />
            </div>
        </div>
            
        </>
    );
}

export default Text;
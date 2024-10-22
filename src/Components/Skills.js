import React from 'react';
import './Skills.css';
import 'devicon/devicon.min.css';

function Skills() {
  return (
    <>
      <div className="skill-container">
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <p>-&gt; Programming Languages: </p>
            <div className="prog-lang">
                <div className="skill-item">
                    <i className="devicon-c-plain colored my-icon"></i>
                        <span>C</span>
                </div>
                <div className="skill-item">
                    <i className="devicon-cplusplus-plain colored my-icon"></i>
                    <span>C++</span>
                </div>
                <div className="skill-item">
                    <i className="devicon-python-plain colored my-icon"></i>
                    <span>Python</span>
                </div>
                <div className="skill-item">
                    <i className="devicon-java-plain colored my-icon"></i>
                    <span>Java</span>
                </div>
            </div>
          <p>-&gt; Web Development: </p>
          <div className="web-dev">
            <div className="skill-item">
                <i className="devicon-html5-plain colored my-icon"></i>
                <span>HTML</span>
            </div>
            <div className="skill-item">
                <i className="devicon-css3-plain colored my-icon"></i>
                <span>CSS</span>
            </div>
            <div className="skill-item">
                <i className="devicon-javascript-plain colored my-icon"></i>
                <span>JavaScript</span>
            </div>
            <div className="skill-item">
                <i className="devicon-react-original colored my-icon"></i>
                <span>React</span>
            </div>
          </div>
          <p>-&gt; Data Science and Machine Learning: </p>
          <div className="tools">       
            <div className="skill-item">
                <i className="devicon-numpy-plain colored my-icon"></i>
                <span>Numpy</span>
            </div>
            <div className="skill-item">
                <i className="devicon-pandas-plain colored my-icon"></i>
                <span>Pandas</span>
            </div>
            <div className="skill-item">
                <i className="devicon-matplotlib-plain colored my-icon"></i>
                <span>MatplotLib</span>
            </div>
            <div className="skill-item">
                <i className="devicon-scikitlearn-plain colored"></i>
                <span>Scikit-Learn</span>
            </div>

          </div>
          <p>-&gt; Databases & Query Language</p>
          <div className="query-lang">
            <div className="skill-item">
            <i className="devicon-sqldeveloper-plain colored my-icon"></i>
            <span>MySQL, SQL(Intermediate)</span>
            </div>
          </div>

        </div>
        
        <div className="professional-skills">
          <h3>Professional Skills</h3>
          <div className="skill-item">
            <span>-&gt; 🌱 Adaptability </span>
          </div>
          <div className="skill-item">
            <span>-&gt; 🗣️ Communication Skills </span>
          </div>
          <div className="skill-item">
            <span>-&gt; 🧠 Problem Solving </span>
          </div>
          <div className="skill-item">
            <span>-&gt; 🧘‍♀️ Stress Management </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

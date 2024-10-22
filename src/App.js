import React from 'react';
import './App.css';
import Card from './Components/Card.js';
import AboutMe from './Components/AboutMe.js';
import Skills from './Components/Skills.js';
import Text from './Components/Text.js';
import Projects from './Components/Projects.js';
import Internships from './Components/Internships.js';
import Certifications from './Components/Certifications.js';
import Education from './Components/Education.js';
import ContactMe from './Components/ContactMe.js';

function App() {

  function navigateTo(id){
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
  }
  return (
    <>
    <div className="Main">
      <Text />
      <hr className="divider" />
      <AboutMe />
      <hr className='divider'/>
      <h2 className='headings'>My Skills💻</h2>
      <Skills />
      <hr className='divider'/>
      <div className="container">
          <Card title="Projects" description="Explore my projects" onClick={()=>navigateTo('my-projects')}/>
          <Card title="Internships" description="Explore my internship experiences" onClick={()=>navigateTo('internships')}/>
          <Card title="Certifications" description="Explore my Certifications" onClick={()=>navigateTo('certifications')}/>
          <Card title="Education" description="Explore my Education journey" onClick={()=> navigateTo('education')}/>
      </div>
      <hr className="divider" />
      <Projects id='my-projects'/>
      <hr className="divider" />
      <Internships id='internships'/>
      <hr className="divider" />
      <Certifications id='certifications'/>
      <hr className="divider" />
      <Education id='education'/>
      <hr className="divider" />
      <ContactMe />
      <hr className="divider2" />
      <div className="copyright">
        ©The Portfolio of <a href="https://linkedin.com/in/sree-nihaar-chaturvedula">Sree Nihaar Chaturvedula</a>
      </div>
      </div>    
    </>
  );
}

export default App;

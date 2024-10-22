import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'My Chess Game using HTML, CSS, JavaScript ♟️♟️',
    domain: 'Web Development',
    period: 'Jun 2024 - Jul 2024',
    description: 'Developed a fully responsive multiplayer chess game using HTML, CSS, and JavaScript, allowing two players to enjoy a classic game of chess on the same device. The project features a smooth and intuitive user interface, optimized for both desktop and mobile devices. The game offers a seamless and engaging user experience, providing an interactive way to play chess. Check out the live demo and explore the source code on GitHub.',
    tools: 'HTML, CSS, JavaScript',
    link: 'https://sreenihaar.github.io/My-Chess-Game/'
  },
  {
    id: 2,
    title: 'Rock Paper Scissors Game Using HTML, CSS, JavaScript 🪨📃✂️',
    domain: 'Web Development',
    period: 'May 2024 - May 2024',
    description: 'Developed an interactive Rock-Paper-Scissors web app using HTML, CSS, and JavaScript. Implemented game logic to handle user and computer choices, determine the winner, and dynamically update scores. Enhanced user experience with real-time visual feedback and score tracking using DOM manipulation and event handling. Deployed the project in Github.',
    tools: 'HTML, CSS, JavaScript',
    link: 'https://sreenihaar.github.io/Rock-Paper-Scissors-Game/'
  },
  {
    id: 3,
    title: 'Customer Segmentation Using K-Means Clustering 👥 📊',
    domain: 'Machine Learning',
    period: 'May 2023 - Jun 2023',
    description: 'Preprocessed and visualized customer data to identify key patterns in Age, Spending Score, and Annual Income. Applied K-means clustering to form four clusters based on Age and Spending Score and five clusters based on Annual Income and Spending Score. Utilized Python libraries (Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn) to enhance customer segmentation and support targeted marketing strategies.',
    tools: 'Python, Pandas, Numpy, Matplotlib, Scikit-Learn',
    link: 'https://github.com/SreeNihaar/Customer-Segmentation-Using-K-Means-Clustering'
  },
];

function Projects(props){
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  function handle(project){
    if(selectedProject !== project){
      const element=document.querySelector(".project-details");

      element.classList.add('animation-degree');
      setSelectedProject(project);
      setTimeout(()=>{
        element.classList.remove('animation-degree');
      },1000);
    }
  }

  return (
    <>
    <h2 className='headings' id={props.id}>My Projects🛠️</h2>
    <div className='project-panel'>
      <div className='project-index'>
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              padding: '10px',
              margin: '5px',
              borderRadius: '10%',
              cursor: 'pointer',
              backgroundColor: selectedProject.id === project.id ? '#f0f0f0' : 'transparent'
            }}
            onClick={() => handle(project)}
          >
            {project.id}
          </div>
        ))}
      </div>

      <div className='project-details' style={{ padding: '20px', width: '100%' }}>
        <h2>{selectedProject.title}</h2>
        <h4>{selectedProject.period}</h4>
        <p><b>Domain:</b> {selectedProject.domain}</p>
        <p>{selectedProject.description}</p>
        <p><b>Technologies Used:</b> {selectedProject.tools}</p>
        <a href={selectedProject.link} target='_blank' rel='noreferrer'>Link to the Project</a>
      </div>
    </div>
    </>
  );
};

export default Projects;

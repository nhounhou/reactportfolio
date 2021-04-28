import React, { useContext } from "react";
import styled from "styled-components";
import Project from "./Project";
import AlertContext from "../utils/AlertContext";
import Footer from './Footer';
import { FaGit, FaLaptopCode } from 'react-icons/fa';
import './second.css';

var tableOfHW = [
  {
    title: 'Responsive Portfolio',
    description: 'gather all the project that have been made during the BootCamp (introduction HTML and CSS)',
    image: 'images/ResponsivePortfolio.jpg',
    github: 'https://github.com/nhounhou/Portfolio',
    deploy: 'https://nhounhou.github.io/Portfolio/index.html',
    JS: 0,
    HTML: 83,
    CSS: 17,
    API: 0,
    Other: 0,
    FrameName: ''
  },
  {
    title: 'Password Generator',
    description: 'with choice of settings parameters (Introduction to JavaScript ES5)',
    image: 'images/PasswordGenerator.jpg',
    github: 'https://github.com/nhounhou/PasswordGenerator',
    deploy: 'https://nhounhou.github.io/PasswordGenerator/index.html',
    JS: 51,
    HTML: 27,
    CSS: 22,
    API: 0,
    Other: 0,
    FrameName: ''
  },
  {
    title: 'Coding Quizz',
    description: 'Quiz game base on Coding questions (Playing with DOM element)',
    image: 'images/CodeQuiz.jpg',
    github: 'https://github.com/nhounhou/CodeQuiz',
    deploy: 'https://nhounhou.github.io/CodeQuiz/',
    JS: 83,
    HTML: 12,
    CSS: 5,
    API: 0,
    Other: 0,
    FrameName: ''
},
  {
    title: 'Work Day Scheduler',
    description: 'Quiz game base on Coding questions (Playing with DOM element)',
    image: 'images/WorkDayScheduler.jpg',
    github: 'https://github.com/nhounhou/WorkDayScheduler',
    deploy: 'https://nhounhou.github.io/WorkDayScheduler/',
    JS: 55,
    HTML: 33,
    CSS: 12,
    API: 0,
    Other: 0,
    FrameName: ''
},
  {
    title: 'Weather Dashboard',
    description: 'Quiz game base on Coding questions (Playing with DOM element)',
    image: 'images/WeatherDash.jpg',
    github: 'https://github.com/nhounhou/WeatherDashBoard',
    deploy: 'https://nhounhou.github.io/WeatherDashBoard/',
    JS: 72,
    HTML: 18,
    CSS: 10,
    API: 2,
    Other: 0,
    FrameName: ''
},
  {
    title: 'Get Coupons',
    description: 'Quiz game base on Coding questions (Playing with DOM element)',
    image: 'images/Project1.jpg',
    github: 'https://github.com/Callingrapher/ProjectTheFirst',
    deploy: 'https://callingrapher.github.io/ProjectTheFirst',
    JS: 32,
    HTML: 39,
    CSS: 14,
    API: 2,
    Other: 15,
    FrameName: 'Foundation'
},
  {
    title: 'Good Readme Generator',
    description: 'Quiz game base on Coding questions (Playing with DOM element)',
    image: 'images/ReadmeGen.gif',
    github: 'https://github.com/nhounhou/ReadmeGenerator',
    deploy: 'https://nhounhou.github.io/ReadmeGenerator/',
    JS: 100,
    HTML: 0,
    CSS: 0,
    API: 0,
    Other: 0,
    FrameName: ''
},
  {
    title: 'Team Profile Generator',
    description: 'Quiz game base on Coding questions (Playing with DOM element)',
    image: 'images/teamProfile.jpg',
    github: 'https://github.com/nhounhou/TeamProfileGenerator',
    deploy: '',
    JS: 74,
    HTML: 19,
    CSS: 7,
    API: 0,
    Other: 0,
    FrameName: ''
},
  {
    title: 'Note Taker',
    description: 'Quiz game base on Coding questions (Playing with DOM element)',
    image: 'images/noteTaker.jpg',
    github: 'https://github.com/nhounhou/NoteTaker',
    deploy: 'https://bcsnotetaker.herokuapp.com/',
    JS: 70,
    HTML: 20,
    CSS: 10,
    API: 0,
    Other: 0,
    FrameName: ''
},
  {
    title: 'Employee Tracker',
    description: 'Quiz game base on Coding questions (Playing with DOM element)',
    image: 'images/employeeTracker.jpg',
    github: 'https://github.com/nhounhou/EmployeeTracker',
    deploy: '',
    JS: 100,
    HTML: 0,
    CSS: 0,
    API: 0,
    Other: 0,
    FrameName: ''
},
  {
    title: 'Eat-Da-Burger',
    description: 'Quiz game base on Coding questions (Playing with DOM element)',
    image: 'images/eatDaBurger.jpg',
    github: 'https://github.com/nhounhou/Eat-Da-Burger',
    deploy: 'https://eatdaburgerunc.herokuapp.com/',
    JS: 80,
    HTML: 6,
    CSS: 6,
    API: 0,
    Other: 0,
    FrameName: ''
},
  {
    title: 'Subscriptions Tracker',
    description: 'Quiz game base on Coding questions (Playing with DOM element)',
    image: 'images/subscriptionTracker.jpg',
    github: 'https://github.com/JaredWeaver/Subscription-Tracker',
    deploy: 'https://subscription-trkr.herokuapp.com/',
    JS: 9,
    HTML: 1,
    CSS: 20,
    API: 0,
    Other: 70,
    FrameName: 'TailWind'
},
  {
    title: 'Fitness Tracker',
    description: 'Quiz game base on Coding questions (Playing with DOM element)',
    image: 'images/workoutTracker.jpg',
    github: 'https://github.com/nhounhou/WorkoutTracker',
    deploy: 'https://workouttrackerunc.herokuapp.com/',
    JS: 59,
    HTML: 19,
    CSS: 22,
    API: 0,
    Other: 0,
    FrameName: ''
},
  {
    title: 'Progressive Budget',
    description: 'Quiz game base on Coding questions (Playing with DOM element)',
    image: 'images/quickVideo.gif',
    github: 'https://github.com/nhounhou/budgettracker',
    deploy: 'https://budgettrackerunc.herokuapp.com/',
    JS: 79,
    HTML: 14,
    CSS: 7,
    API: 0,
    Other: 0,
    FrameName: ''
},
  {
    title: 'Employee Directory',
    description: 'Quiz game base on Coding questions (Playing with DOM element)',
    image: 'images/Animation.gif',
    github: 'https://github.com/nhounhou/employee-directory',
    deploy: 'https://nhounhou.github.io/employee-directory/',
    JS: 51,
    HTML: 44,
    CSS: 5,
    API: 0,
    Other: 0,
    FrameName: ''
},
  {
    title: 'React Portfolio',
    description: 'gather all the project that have been made during the BootCamp in a React app',
    image: 'images/ResponsivePortfolio.jpg',
    github: 'https://github.com/nhounhou/Portfolio',
    deploy: 'https://nhounhou.github.io/Portfolio/index.html',
    JS: 84,
    HTML: 9,
    CSS: 7,
    API: 0,
    Other: 0,
    FrameName: ''
},
]

function Second() {
  function icone(type,num,name){
      switch (type) {
      case 'JS':
        if (num !== 0) {
          const render=`https://img.shields.io/badge/JavaScript-${num}%25-orange`
          return <img src={render} alt={type}></img>
        };
        break;
      case 'HTML':
        if (num !== 0) {
          const render=`https://img.shields.io/badge/HTML-${num}%25-brightgreen?style=plastic&logo=HTML5`
          return <img src={render} alt={type}></img>
        }
        break;
      case 'CSS':
        if (num !== 0) {
          const render=`https://img.shields.io/badge/CSS-${num}%25-blue?style=plastic&logo=CSS3`
          return <img src={render} alt={type}></img>
        }
        break;
    case 'API':
        if (num !== 0) {
          const render=`https://img.shields.io/badge/APIs-${num}-purple?style=plastic&logo=appveyor`
          return <img src={render} alt={type}></img>
        }
        break;
    case 'Other':                                        
        if (num !== 0){
          const render=`https://img.shields.io/badge/${name}-${num}%25-blue`
          return <img src={render} alt={type}></img>
        }
        break;
    }
  };

  const alert = useContext(AlertContext);

  return (
    <div className='Wrapper'>
      <span>Portfolio</span>
      <section className='portfolio'>
        {tableOfHW.map((item,index) => (
          <div className='project' key={index}>
            <row>
              <div>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <img className='HWPicture' src={item.image} width='auto' height='300px' alt={item.title}></img>
                <h4>Links</h4>
                <h5>Github <a href={item.github} target='_blank'><FaGit/> </a></h5>
                <h5>Deployment <a href={item.deploy} target='_blank'><FaLaptopCode/> </a></h5>
              </div>
              <div>
                {icone('JS',item.JS,'')}
                {icone('HTML',item.HTML,'')}
                {icone('CSS',item.CSS,'')}
                {icone('API',item.API,'')}
                {icone('Frame',item.Other,item.FrameName)}
              </div>
            </row>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

// const Wrapper = styled.div`
//   background-color: #00bfff;
//   padding: 20px;

//   span {
//     color: #fff;
//     font-size: 40px;
//   }

//   section {
//     color: #fff;
//   }
// `;

// min-height: calc(100vh - 50px);
// height: 100vh;

export default Second;

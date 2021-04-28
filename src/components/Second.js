import React, { useContext } from "react";
import Project from "./Project";
import AlertContext from "../utils/AlertContext";
import './second.css';
import { FaGit, FaLaptopCode } from 'react-icons/fa';


var tableOfHW = [
  {
    title: 'Responsive Portfolio',
    description: 'Gather all the project that have been made during the BootCamp (introduction to HTML and CSS) and also personnal information',
    image: '/images/ResponsivePortfolio.jpg',
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
    description: 'With choice of settings parameters (Introduction to JavaScript ES5)',
    image: '/images/PasswordGenerator.jpg',
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
    image: '/images/CodeQuiz.jpg',
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
    description: 'Create, Update event for the current work day (JQuery and use of dynamic DOM Element)',
    image: '/images/WorkDayScheduler.jpg',
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
    description: 'Display current weather information for a selected city, with a 5 day forecast (call OpenWeather API)',
    image: '/images/WeatherDash.jpg',
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
    description: 'Get a list of coupons, and a list of selected stores near you (Call 2 APIs and use of Foundation CSS framework)',
    image: '/images/Project1.jpg',
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
    description: 'CLI application that generate a Readme file from Github repo (introduction to Node.js)',
    image: '/images/ReadmeGen.gif',
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
    description: 'CLI application to generate a team profile web page (OOP)',
    image: '/images/teamProfile.jpg',
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
    description: 'Web application to gather miscellenious notes (Express.js)',
    image: '/images/noteTaker.jpg',
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
    description: 'CLI application to handle company Employees list (MySQL)',
    image: '/images/employeeTracker.jpg',
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
    description: 'Web application to keep track of your burgers craving (Handlebars, ORM)',
    image: '/images/eatDaBurger.jpg',
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
    description: 'Web application to manage your various subscriptions (Tailwind CSS Framework, Sequelize, Fullcalendar.io)',
    image: '/images/subscriptionTracker.jpg',
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
    description: 'Web application to keep track of your fitness routines (MongoDB, Mongoose.js)',
    image: '/images/workoutTracker.jpg',
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
    description: 'web application to manage your personnal budget (MongoDB, indexedDB)',
    image: '/images/quickVideo.gif',
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
    description: 'Web application to show the company employee list (React.js)',
    image: '/images/Animation.gif',
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
    description: 'Conversion of the previous portfolio into Recat application',
    image: '/images/ReactPortfolio.gif',
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

function Content() {
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
    case 'Frame':                                        
        if (num !== 0){
          const render=`https://img.shields.io/badge/${name}-${num}%25-blue`
          return <img src={render} alt={type}></img>
        }
        break;
    }
  };

  const { onClick, theme, display} = useContext(AlertContext)
  return (
    <div className="text-center">
      {tableOfHW.map((item,index) => (
      <button onClick={() => onClick(item, true)} className="btn btn-success mx-3">
        {item.title}
      </button>
      ))}
      <button onClick={() => onClick({}, false)} className="btn btn-outline-danger mx-3">
        Clear
      </button>

      <Project 
        style={{ opacity: display ? 1 : 0 }} 
        type={theme}
        >
        <h1><p>App Name:</p> {theme.title}</h1>
        <h2><p>Description:</p> {theme.description}</h2>
        <img src={process.env.PUBLIC_URL + theme.image} alt={theme.title} width='auto' height='300px'></img>
        <h4>Links</h4>
        <h5>Github <a href={theme.github} target='_blank'><FaGit/> </a></h5>
        <h5>Deployment <a href={theme.deploy} target='_blank'><FaLaptopCode/> </a></h5>
        <div>
          {icone('JS',theme.JS,'')}
          {icone('HTML',theme.HTML,'')}
          {icone('CSS',theme.CSS,'')}
          {icone('API',theme.API,'')}
          {icone('Frame',theme.Other,theme.FrameName)}
        </div>
      </Project>
    </div>
  );
}

export default Content;

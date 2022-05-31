// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';

// // class Counter extends React.Component{
// //   state={
// //     count:0
// //   }
// //   increment=()=>{
// //     this.setState({count:this.state.count+1});
// //   }
// //   decrement=()=>{
// //   this.setState({count:this.state.count-1});
// //   }
// //   render(){
// //     return <div>
// //       <div className='container'>
// //       <h1>Counter: {this.state.count}</h1>
// //       </div>

// //       <div>
// //       <button onClick={this.increment} className='btn'>+</button>
// //       <button onClick={this.decrement} className='btn'>-</button>
// //       </div>

// //     </div>;
// //   }
// // }
// // const display=<Counter/>;
// // ReactDOM.render(display,document.getElementById('root'));
// const nav=
//   <div className='nav-bar'>
//     <div className='logo-container'>
//     <img src='./logo192.png' alt='Logo' className='logo' />
//     <h2>React Project</h2>
//     </div>
//     <ul className='nav-items'>
//       <li>Home</li>
//       <li>About</li>
//       <li>Pricing</li>
//       <li>Contact</li>
//       <li>Games</li>
//       <li>News feeds</li>
//     </ul>
//   </div>
//   const mainContent=<div className='content-wrapper'>
//     <img src='logo.svg'/>
//     <h1>Reasons for learning React</h1>
//     <ol>
//       <li>High Community and good support team</li>
//       <li>High chances of getting a job as a React Developer</li>
//       <li>It is a pretty go JavaScript library</li>
//       <li>its is good for front end Development</li>

//     </ol>

//   </div>
//   const Footer=<div className='footer'>
//     <p> Copyrite 2022, React-Project by Josephat Juma </p>
//   </div>

//   ReactDOM.render(nav,document.getElementById('nav'))
//   ReactDOM.render(mainContent,document.getElementById('main-content'))
//   ReactDOM.render(Footer,document.getElementById('footer'))

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

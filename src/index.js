import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
 
 
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

class LoggingButton extends React.Component {
  handleClick(){
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
        Click me
      </button>
     
    );
  }
}

ReactDOM.render(
  <LoggingButton />,
  document.getElementById('root')
);
import React from "react";

// const App = () => {
//   return (
//     <div>
//       <h1>Studio Ghibli for the win!</h1>
//     </div>
//   );
// };

// const Button = { (onClick) } = {
//     handleClick = () => {
//         this.setState({loaded: |this.state.loaded});
//     };
// };

// let submitChirp = (e) => {
//     //   e.preventDefault()
//     let newChirp = {
//       userName: newUsername,
//       msg: newMessage,
//     };

//     //resetting state chirps array and adding the newChirp from input
//     setChirps([...chirps, newChirp]);
//   };

// class Button extends React.Component {
//     handleClick() {
//       console.log('this is:', this);
//     }
  
//     render() {
//       // This syntax ensures `this` is bound within handleClick
//       return (
//         <button onClick={() => this.handleClick()}>
//           Click me
//         </button>
//       );
//     }
//   }

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {text: '', inputText: '', mode:'view'};
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSave = this.handleSave.bind(this);
     
    }
    
    handleChange(e) {
      this.setState({ inputText: e.target.value });
    }
    
    handleSave() {
      this.setState({text: this.state.inputText, mode: 'view'});
    }
  
    
    renderInputField() {
      if(this.state.mode === 'view') {
        return <div></div>;
      } else {
        return (
            <p>
              <input
                onChange={this.handleChange}
                value={this.state.inputText}
              />
            </p>
        );
      }
    }
    
    renderButton() {
      if(this.state.mode === 'view') {
        return (
            <button onClick={this.handleEdit}>
              Edit
            </button>
        );
      } else {
        return (
            <button onClick={this.handleSave}>
              Save
            </button>
        );
      }
    }
    
    render () {
      return (
        <div>
          <p>Text: {this.state.text}</p>
          {this.renderInputField()}
          {this.renderButton()}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );




export default App;

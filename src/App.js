import React , {Component} from 'react';
import './App.css';
import Validation from './ValidationComponent/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    inputValue: ""
  }

  textLengthHandler = (e) => {
    this.setState({
      inputValue: e.target.value
    });

  }

  removeItemHandler = (index) => {
    const text = [...this.state.inputValue];
    text.splice(index,1);
    let updatedText = text.join('');
    this.setState({
      inputValue:updatedText
    });
  }


  render() {

    let chars = this.state.inputValue.split('').map((char, index) => {
      return <CharComponent char={char} key={index} clicked={() => this.removeItemHandler(index)}></CharComponent>
    })
    return (
      <div className="App">
        <p>{this.state.inputValue.length}</p>
        <input type="text" value={this.state.inputValue} onChange={this.textLengthHandler.bind(this)} ></input>
        <Validation textLength={this.state.inputValue.length}></Validation>
        {chars}
        
      </div>
    );
  }
  
}

export default App;

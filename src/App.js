import React, { Component } from 'react';
import TextInput from "./components/TextInput";
import TextLabel from "./components/TextLabel";

const defaultText = "Hello, world!";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: defaultText
    }
    this.changeText = this.changeText.bind(this);
  }
  
  changeText(e) {
    const value = e.target.value;

    this.setState((prevState) => {
      const newState = prevState;
      newState.text = value;
      return newState;
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <TextInput defaultValue={defaultText} onChange={this.changeText} />
        </div>
        <div>
          <TextLabel color={this.state.color}>{this.state.text}</TextLabel>
        </div>
      </div>
    );
  }
}

export default App;

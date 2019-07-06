import React, { Component } from 'react';
import TextInput from "./components/TextInput";
import TextLabel from "./components/TextLabel";
import ColorSelector from "./components/ColorSelector";

const defaultText = "Hello, world!";
const selectableColors = [
  {
    label: "black",
    colorCode: "#333333"
  },
  {
    label: "red",
    colorCode: "#cc0000"
  },
  {
    label: "blue",
    colorCode: "#0000cc"
  },
  {
    label: "green",
    colorCode: "#00cc00"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: defaultText,
      color: selectableColors[0].colorCode
    }
    this.changeText = this.changeText.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeText(e) {
    const value = e.target.value;

    this.setState((prevState) => {
      const newState = prevState;
      newState.text = value;
      return newState;
    });
  }

  changeColor(e) {
    const value = e.target.value;

    this.setState((prevState) => {
      const newState = prevState;
      newState.color = value;
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
          <ColorSelector
            selectableColors={selectableColors}
            value={this.state.color}
            onChange={this.changeColor} />
        </div>
        <div>
          <TextLabel color={this.state.color}>{this.state.text}</TextLabel>
        </div>
      </div>
    );
  }
}

export default App;

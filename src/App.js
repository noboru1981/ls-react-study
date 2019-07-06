import React from 'react';
import logo from './logo.svg';
import TextField from "@material-ui/core/TextField";

const defaultText = "Hello, world!";

function App() {
  return (
    <div className="App">
      <div>
        <TextField defaultValue={defaultText} /> 
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import TextInput from "./components/TextInput";
import TextLabel from "./components/TextLabel";

const defaultText = "Hello, world!";

function App() {
  return (
    <div className="App">
      <div>
        <TextInput defaultValue={defaultText} />
      </div>
      <div>
        <TextLabel>I am label.</TextLabel>
      </div>
    </div>
  );
}

export default App;

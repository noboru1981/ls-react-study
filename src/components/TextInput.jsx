import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

const defaultText = "Hello, world!";

function TextInput()
{
    return (
        <TextField defaultValue={defaultText} />
    );
}

export default TextInput;
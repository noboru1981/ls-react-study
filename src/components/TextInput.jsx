import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

function TextInput(props) {
    return (
        <TextField defaultValue={props.defaultText} {...props} />
    );
}

export default TextInput;
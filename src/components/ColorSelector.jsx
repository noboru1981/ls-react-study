import React from "react";
import Select from "@material-ui/core/Select";

function ColorSelector(props) {
    return (
        <Select native value={props.value} onChange={props.onChange}>
            {props.selectableColors.map((item, i) => (<option value={item.colorCode} key={i}>{item.label}</option>))}
        </Select>
    );
}

export default ColorSelector;
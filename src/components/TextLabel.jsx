import React from "react";

const TextLabel = (props) => {
    const styles = {
        color: props.color
    };
    return (
        <p style={styles}>{props.children}</p>
    );
}

export default TextLabel;
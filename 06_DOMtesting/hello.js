import React from "react"

// Passing parameters and generating of html tag
export default function Hello(props) {
    if (props.name) {
        return <h1>Hello, {props.name}!</h1>;
    } else {
        return <span>Hey, stranger</span>;
    }
}

import React from "react";
import "../css/overlay.css"

export default function Overlay(props) {
    return (
        <div className="overlay">{props.text}</div>
    )
}
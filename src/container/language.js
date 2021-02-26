import React from 'react'
import html from "../images/icon/html5.png"
import css from "../images/icon/css.png"
import js from "../images/icon/javascript.png"
import react from "../images/icon/react.png"
import json from "../images/icon/jsonfile.png"
import sass from "../images/icon/sass.png"


function language() {
    return (
        <div className="language">
            <div className="iconContainer">
                <img src={html}/>
            </div>
            <div className="iconContainer">
                <img src={css}/>
            </div>
            <div className="iconContainer">
                <img src={js}/>
            </div>
            <div className="iconContainer">
                <img src={react}/>
            </div>
            <div className="iconContainer">
                <img src={json}/>
            </div>
            <div className="iconContainer">
                <img src={sass}/>
            </div>
        </div>
    )
}

export default language;
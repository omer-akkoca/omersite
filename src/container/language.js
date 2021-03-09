import React from 'react'
import Language from "../components/languageItem"
import html from "../images/icon/html5.png"
import css from "../images/icon/css.png"
import js from "../images/icon/javascript.png"
import react from "../images/icon/react.png"
import sass from "../images/icon/sass.png"
 
function language() {
    return (
        <div className="language">
            <Language key="1" icon={html} />
            <Language key="2" icon={css} />
            <Language key="3" icon={js} />
            <Language key="4" icon={react} />
            <Language key="5" icon={sass} />
        </div>
    )
}

export default language;
import React from 'react'

function botBard() {
    const style = {
        position : "absolute",
        bottom : "0",
        left : "0",
        width : "100%",
        height : "50px",
        textAlign : "center",
        lineHeight : "50px",
        background : "black",
        color : "white",
        fontWeight : "bolder",
        letterSpacing : "2px",
        fontSize : "12px"
    }
    return (
        <div className="botBar" style={style}>
            Created by Ömer Akkoca @2021
        </div>
    )
}

export default botBard;

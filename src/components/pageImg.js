import React from 'react'

function pageImg(props) {
    
    const {img,text,name,buttonName} = props.values;

    const background = {
        background : `url(${img})`,  
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat : "no-repeat"
    }

    return (
        <div style={background} className="pageImg">
            <div className="pageImgInfo">
                <p>{text}</p>
                <a href={`#${name}`}>
                    <button className={name}>{buttonName}</button>
                </a>
            </div>
        </div>
    )
}

export default pageImg;
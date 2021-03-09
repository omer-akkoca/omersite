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

    const goPlace = () =>{
        const parentImg = document.querySelector(".pageImg");
        const parentImgHeight = parentImg.scrollHeight;
        window.scrollTo(0, parentImgHeight-25);
    }

    return (
        <div style={background} className="pageImg">
            <div className="pageImgInfo">
                <p>{text}</p>
                    <button onClick={goPlace} className={name}>{buttonName}</button>
            </div>
        </div>
    )
}

export default pageImg;
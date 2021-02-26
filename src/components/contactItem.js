import React from 'react'

function contactItem(props) {
    const {icon,text} = props;
    return (
        <div className="item">
            <i className={icon}></i>
            <p>{text}</p>
        </div> 
    )
}

export default  contactItem;
import React from 'react'

function languageItem(props) {
    const {icon} = props;
    return (
        <div className="iconContainer">
                <img src={icon}/>
            </div>
    )
}

export default languageItem;
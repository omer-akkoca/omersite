import React, { Component } from 'react'

class place extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {img,date,location,description} = this.props.value;
        return (
            <div className="place">
                <div className="placeContent">
                    <img src={img}></img>
                    <div className="placeInfo">
                        <h2>{location}</h2>
                        <div>{date}</div>
                        <p>{description}</p>
                    </div>
                </div> 
            </div>
        )
    }
}

export default place;
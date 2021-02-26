import React, { Component } from 'react'

class book extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {img,name,writer,date,text} = this.props.values;
        return (
            <div className="bookContainer">
                <div className="book">
                    <div className="img">
                        <img src={img}></img>
                    </div>
                    <div className="bookInfo">
                        <h2>{name}</h2>
                        <h3>{writer}</h3>
                        <p className="date">{date}</p>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default book;

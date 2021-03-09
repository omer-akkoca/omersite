import React, { Component } from 'react'
import img from "../images/avatar2.jpg";
import "../style/home.css"

class home extends Component {

    download =() =>{
        alert("Cv indirme henüz hazır değil.");
    }

    render() {
        return (
                <div className="home">
                        <div className="img">
                            <img src={img}></img>
                        </div>
                        <div className="home-info">
                            <h1>Ömer AKKOCA</h1>
                            <p>Yazılım Mühendisi</p>
                            <p>Web Geliştirici ve Tasarımcı</p>
                            <button onClick={this.download}>CV İndir</button>
                        </div>
                </div>
        )
    }
}

export default home;

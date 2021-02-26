import React, { Component } from 'react'
import "../style/placeVisited.css"
import PlaceJson from "../JSON/place.json"
import Place from '../components/place';
import img from "../images/place2.jpg"
import PageImg from "../components/pageImg"
import BotBar from "../container/botBar"

class placeVisited extends Component {
    render() {
        const {places}  = PlaceJson;
        return (
            <div className="placeContainer">
                <PageImg values={{
                    img : img,
                    text : "Çalışmanın önemli olduğu kadar dünyayı gezip yeni insanlarla tanışmakta " +
                    "bir o kadar önemlidir. Hadi sizinle nereleri seyahet ettiğime bakalım.",
                    name : "goPlace",
                    buttonName : "Ziyaret Edilen Yerler İçin Tıklayınız"

                }}/>
                <a className="goPlace" name="goPlace">
                    <div className="listVisit">
                        {
                            places.map(place => <Place key={place.id} value={place}/>)
                        }
                    </div>
                </a>
                <BotBar/>
            </div>
        )
    }
}


export default placeVisited;
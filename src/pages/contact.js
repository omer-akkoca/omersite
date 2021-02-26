import React, { Component } from 'react'
import "../style/contact.css"
import Item from "../components/contactItem"
import PageImg from "../components/pageImg"
import img from "../images/contact2.jpg"
import BotBar from "../container/botBar"

class contact extends Component {
    render() {
        return (
            <div className="contact">
                <PageImg values={{
                    img : img,
                    text : "Buraya kadar neler yaptığımı nasıl biri olduğumu biraz olsun anlamışsınızdır."+
                    "Şimdi eğer kafanızda herhangi bir proje var ise lütfen iletişim kurunuz.",
                    name : "goContact",
                    buttonName : "İletişim Bilgileri İçin Tıklayınız"
                }}/>
                <a name="goContact">
                    <div className="contactInfo">
                        <div className="adresContainer">
                            <Item 
                                key="1" 
                                icon="fas fa-map-marker"
                                text ="Sancaktepe / Istanbul Turkey"
                            />
                            <Item 
                                key="2" 
                                icon="fas fa-envelope"
                                text ="omerakkoca1042@gmail.com"
                            />
                            <Item 
                                key="3" 
                                icon="fas fa-phone-alt"
                                text ="(+90) 534 623 52 70"
                            />
                        </div>
                        <div className="socialContainer">
                            <Item 
                                key="4" 
                                icon="fab fa-facebook"
                                text ="/omer.akkoca.52"
                            />
                            <Item 
                                key="5" 
                                icon="fab fa-twitter"
                                text ="/omerakkoca1"
                            />
                            <Item 
                                key="6" 
                                icon="fab fa-instagram"
                                text ="/omer_akkoca"
                            />
                        </div>
                    </div>
                </a>
                <BotBar/>
            </div>
        )
    }
}


export default contact;
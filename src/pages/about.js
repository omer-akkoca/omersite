import React, { Component } from 'react'
import avatar from "../images/avatar2.jpg"
import "../style/about.css"
import PageImg from "../components/pageImg"
import img from "../images/about2.jpg"
import Language from "../container/language"
import BotBar from "../container/botBar"


class about extends Component {
    render() {
        const birtday = new Date("2000-04-17");
        const currentTime = Date.now();
        const age = Math.floor((currentTime-birtday) / (86400000 * 365));

        return (
            <div className="about">
                <PageImg values={{
                    img : img,
                    text : "Web sayfama hoşgeldin. Eminim ben kimim merak "+
                    "ediyorsundurki bu sayfaya girdin :D . O zaman seni daha fazla bekletmiyorum. "+
                    "Hadi alttaki butona tıkla.",
                    name : "goInfo",
                    buttonName : "Bilgiler İçin Tıklayınız"
                }}/>
                <a name="goInfo"/>
                <div className="top">
                    <div className="img">
                        <img src={avatar}/>
                        </div>
                    <div className="story">
                       Merhaba ben Ömer Akkoca. 2000 yılında Nisan ayının 17. gününde dünyaya geldim. Şuan {age} yaşındayım. 
                       {age} yıllık yaşamımda eğitim hayatımı aşağıda göreceksiniz. Senin için önemli 
                       olan nokta benim ne yaptığım. Evet ben bir yazılım mühendisiyim. Üniversiteye 
                       başladığımdan beri ve lise hayatımda hep web üzerine ilerlemek istemiştim. Şuanda da bu
                       kişisel sitem ile karşınızdayım.
                    </div>
                </div>
                <div className="title">Eğitim Bilgileri</div>
                <div className="education">
                   <div className="education-item">
                       <p>İlk ve Ortaokul</p>
                       <i className="fas fa-school"/>
                       <div className="dropdown-info">
                            2006 - 2014 <br/>İkbaliye İlkokul<br/>
                            ve <br/> Ortaokulu
                        </div>
                   </div>
                   <div className="education-item">
                       <p>Lise</p>
                       <i className="fas fa-graduation-cap"/>
                       <div className="dropdown-info">
                            2014 - 2016 <br/>Madenler Mesleki ve Teknik Anadolu Lisesi <br/>
                            2016 - 2017 <br/>Yakacık Mesleki ve Teknik Anadolu Lisesi <br/>
                            2017 - 2018 <br/>Açık Öğretim Mezunu
                        </div>
                   </div>
                   <div className="education-item">
                       <p>Primary School</p>
                       <i className="fas fa-university"/>
                       <div className="dropdown-info">
                            2018 - 2021 <br/>Karadeniz Teknik Üniversitesi <br/>
                            Of Teknoloji Fakültesi <br/>
                            Yazılım Mühendisliği 
                        </div>
                   </div>
                </div>
                <div className="title">Bildiğim Web Yazılım Dilleri</div>
                <Language/>
                <div className="title">Neler Yaptım?</div>
                <div className="iDid">
                    <p>Projelerimi GitHup sayfamdan görebilirsiniz.</p>
                    <p>Projeler için tıklayınız...</p>
                    <a target="_blank" href="https://github.com/omer-akkoca">
                        <i className="fab fa-github"/>
                    </a>
                </div>
                <BotBar/>
            </div>
        )
    }
}

export default about;

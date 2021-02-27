import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class navbar extends Component {
    render() {
        return (
                <div className="navbar">
                    <Link to="/omersite"><h2 className="logo">OA</h2></Link>
                    <ul className="responsiveMenu">
                        <Link to="/omersite">
                            <li>Anasayfa</li>
                        </Link>
                        <Link to="/omersite/about">
                            <li>Hakkımda</li>
                        </Link>
                            <li className="dropDown">
                                <p>İlgi Alanları</p>                      
                                <ul className="dropDownMenu">
                                    <Link to="/omersite/places-Visited"><li>Ziyaret Edilen Yerler</li></Link>
                                    <Link to="/omersite/books-Read"><li className="booksread">Okunan Kitaplar</li></Link>
                                </ul>
                            </li>
                        <Link to="/omersite/contact">                
                            <li>İletişim</li>
                        </Link>
                    </ul>
                    <i className="fas fa-bars menu"></i>
                </div>
        )
    }
}

export default navbar;

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class navbar extends Component {
    render() {
        return (
                <div className="navbar">
                    <Link to="/omer-akkoca"><h2 className="logo">OA</h2></Link>
                    <ul className="responsiveMenu">
                        <Link to="/omer-akkoca">
                            <li>Anasayfa</li>
                        </Link>
                        <Link to="/omer-akkoca/about">
                            <li>Hakkımda</li>
                        </Link>
                            <li className="dropDown">
                                <p>İlgi Alanları</p>                      
                                <ul className="dropDownMenu">
                                    <Link to="/omer-akkoca/places-Visited"><li>Ziyaret Edilen Yerler</li></Link>
                                    <Link to="/omer-akkoca/books-Read"><li className="booksread">Okunan Kitaplar</li></Link>
                                </ul>
                            </li>
                        <Link to="/omer-akkoca/contact">                
                            <li>İletişim</li>
                        </Link>
                    </ul>
                    <i className="fas fa-bars menu"></i>
                </div>
        )
    }
}

export default navbar;

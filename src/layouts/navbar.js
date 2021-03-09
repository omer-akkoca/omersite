import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class navbar extends Component {
    render() {
        return (
                <div className="navbar">
                    <Link to="/" className="option">
                        <h2 className="logo">OA</h2>
                    </Link>
                    <ul className="responsiveMenu">
                        <Link to="/" className="option">
                            <li>Anasayfa</li>
                        </Link>
                        <Link to="/About">
                            <li>Hakkımda</li>
                        </Link>
                            <li className="dropDown">
                                <p>İlgi Alanları</p>                      
                                <ul className="dropDownMenu">
                                    <Link to="/Places" className="option">
                                        <li>Ziyaret Edilen Yerler</li>
                                    </Link>
                                    <Link to="/Books" className="option">
                                        <li className="booksread">Okunan Kitaplar</li>
                                    </Link>
                                </ul>
                            </li>
                        <Link to="/Contact" className="option">                
                            <li>İletişim</li>
                        </Link>
                    </ul>
                    <i onClick={this.getResponsiveMenu} className="fas fa-bars menu"></i>
                </div>
        )
    }
}

export default navbar;

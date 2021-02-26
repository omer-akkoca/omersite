import React, { Component } from 'react'
import "../style/booksRead.css"
import img from "../images/book.jpg"
import PageImg from "../components/pageImg"
import BotBar from "../container/botBar"
import Book from "../components/book"
import BookJSON from "../JSON/books.json"

class bookRead extends Component {
    render() {
        const {books} = BookJSON;
        return (
            <div className="booksContainer">
                <PageImg values={{
                    img : img,
                    text : '"Biz zevk için harcadığımız paradan fazla, kitap için sarfetmediğimiz '+
                    'müddetçe, bu ülke hiç bir zaman medeni bir ülke olamayacaktır" der '+
                    'Elbert Hubberd.',
                    name : "goBook",
                    buttonName : "Okunmuş Kitaplar İçin Tıklayınız"
                }}/>
                <a name="goBook"/>
                <div className="showBook">
                    {
                        books.map(book => <Book key={book.id} values={{...book}}/>)
                    }
                </div>
                <BotBar/>
            </div>
        )
    }
}

export default bookRead;

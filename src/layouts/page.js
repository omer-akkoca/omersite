import React, { Component } from 'react'
import Home from "../pages/home"
import About from "../pages/about"
import Contact from "../pages/contact"
import BookRead from "../pages/bookRead"
import PlaceVisited from "../pages/placeVisited"

import {Route , Switch } from "react-router-dom";

class page extends Component {
    render() {
        return (
                    <Switch>
                        <Route exact path="/omer-akkoca" component={Home}/>
                        <Route exact path="/omer-akkoca/about" component={About}/>
                        <Route exact path="/omer-akkoca/places-Visited" component={PlaceVisited}/>
                        <Route exact path="/omer-akkoca/books-Read" component={BookRead}/>
                        <Route exact path="/omer-akkoca/contact" component={Contact}/>
                    </Switch>

        )
    }
}

export default page;
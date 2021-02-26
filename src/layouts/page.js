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
                        <Route exact path="/omer-akkoca.githup.io" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/places-Visited" component={PlaceVisited}/>
                        <Route exact path="/books-Read" component={BookRead}/>
                        <Route exact path="/contact" component={Contact}/>
                    </Switch>

        )
    }
}

export default page;
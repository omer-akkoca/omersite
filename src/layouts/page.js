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
                        <Route exact path="/omersite" component={Home}/>
                        <Route exact path="/omersite/about" component={About}/>
                        <Route exact path="/omersite/places-Visited" component={PlaceVisited}/>
                        <Route exact path="/omersite/books-Read" component={BookRead}/>
                        <Route exact path="/omersite/contact" component={Contact}/>
                    </Switch>

        )
    }
}

export default page;
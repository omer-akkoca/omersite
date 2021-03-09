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
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/About" component={About}/>
                        <Route exact path="/Places" component={PlaceVisited}/>
                        <Route exact path="/Books" component={BookRead}/>
                        <Route exact path="/Contact" component={Contact}/>
                    </Switch>

        )
    }
}

export default page;
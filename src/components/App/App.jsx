import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import Nav from "../Nav/Nav.jsx"

const App = () => {
    return (
        <Router>
            <div className={"main-wrap"}>
                <Nav />

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <main className="main">
                    <Switch>
                        <Route path="/design">
                            <Graphdesign  />
                        </Route>
                        <Route path="/print">
                            <Print />
                        </Route>
                        <Route path="/branding">
                            <Branding />
                        </Route>
                        <Route path="/ui">
                            <Interfaces />
                        </Route>
                        <Route path="/">
                            <Webdesign />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

function Webdesign() {
    return <h2>Web</h2>;
}

function Print() {
    useEffect(() => {
    })

    return <h2>Print</h2>;
}

function Graphdesign() {
    return <h2>Graph</h2>;
}

function Branding() {
    return <h2>Branding</h2>;
}

function Interfaces() {
    return <h2>UI</h2>;
}

export default App;

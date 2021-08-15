import React from "react";
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
            <div>
                <Nav />

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/">
                        <Webdesign />
                    </Route>
                    <Route path="/graphdesign">
                        <Graphdesign  />
                    </Route>
                    <Route path="/print">
                        <Print />
                    </Route>
                    <Route path="/branding">
                        <Branding />
                    </Route>
                    <Route path="/branding">
                        <Interfaces />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Print() {
    return <h2>Print</h2>;
}

function Webdesign() {
    return <h2>Web</h2>;
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

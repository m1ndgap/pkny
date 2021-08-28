import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import Nav from "../Nav/Nav.jsx"
import WebDesign from "../WebDesign/WebDesign.jsx"
import GraphDesign from "../GraphDesign/GraphDesign.jsx"
import Print from "../Print/Print.jsx"
import Branding from "../Branding/Branding.jsx"
import UI from "../UI/UI.jsx"

const App = () => {
    return (
        <Router>
            <div className={"main-wrap"}>
                <Nav />

                <main className="main">
                    <Switch>
                        <Route path="/design">
                            <GraphDesign />
                        </Route>
                        <Route path="/print">
                            <Print />
                        </Route>
                        <Route path="/branding">
                            <Branding />
                        </Route>
                        <Route path="/ui">
                            <UI />
                        </Route>
                        <Route path="/">
                            <WebDesign />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}


export default App;

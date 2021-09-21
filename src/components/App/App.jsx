import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import Nav from "../Nav/Nav.jsx"
import MainContent from "../WebDesign/MainContent.jsx"
import GraphDesign from "../GraphDesign/GraphDesign.jsx"
import Print from "../Print/Print.jsx"
import Branding from "../Branding/Branding.jsx"
import UI from "../UI/UI.jsx"
import content from "../../mocks/content.js"

const App = () => {
    return (
        <Router forceRefresh={true}>
            <div className={"main-wrap"}>
                <Nav />

                <main className="main">
                    <Switch>
                        <Route path="/design">
                            <MainContent
                                data={content.graphd}
                            />
                        </Route>
                        <Route path="/print">
                            <MainContent
                                data={content.print}
                            />
                        </Route>
                        <Route path="/branding">
                            <MainContent
                                data={content.branding}
                            />
                        </Route>
                        <Route path="/ui">
                            <MainContent
                                data={content.ui}
                            />
                        </Route>
                        <Route path="/">
                            <MainContent
                                data={content.webdesign}
                            />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}


export default App;

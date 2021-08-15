import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Web</Link>
                </li>
                <li>
                    <Link to="/graphdesign">Graph</Link>
                </li>
                <li>
                    <Link to="/print">Print</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;

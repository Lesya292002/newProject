import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import App from "./App";
import "./normalize.css"

import {BrowserRouter, Route, Routes} from "react-router-dom";
import InformAbout from "./Pages/about/InformAbout";
import Reviews from "./Pages/reviews/reviews";
import Shop from "./Pages/Shop/shop";
import Contacts from "./Pages/Contacts/Contacts"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className= "App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path = "/InformAbout" element={<InformAbout/>} />
                <Route path = "/Reviews" element={<Reviews/>} />
                <Route path = "/shop" element={<Shop/>} />
                <Route path = "/Contacts" element={<Contacts/>} />
            </Routes>
        </BrowserRouter>
    </div>
)

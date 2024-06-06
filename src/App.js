//Импорты для "Head":
import "./css/head.css"
import LogoPic from "./media/Logopic.png";
import Search from "./media/Search.png";
import Account from "./media/Account.png";
//Импорты для "Main":
import "./css/main.css"
import Reviews from "./media/Reviews.png";
import Types from "./media/Types.png"
import Aside from "./media/Aside.png"
//Импорты для "Footer":
import "./css/footer.css"
import Connection   from    "./media/Connection.png"
//

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from "react";


const App = () =>{
  return (
        <div className="App">
                <div    className="Head">
                        <div    className="Logo"><a href="/"><img src={LogoPic} alt=""/></a></div>
                        <div    className="about"><Link to="/InformAbout">О нас</Link></div>
                        <div    className="reviews"><Link to='/Reviews'>Отзывы</Link></div>
                        <div    className="contacts"><Link to='/contacts'>Контакты</Link></div>
                        <div    className="shop"><Link to='/shop'>Магазин</Link></div>
                        <div    className="HeaderIcons">
                            <div    className="Search"><img src={Search} alt=""/></div>
                            <div    className="Account"><img src={Account} alt=""/></div>
                        </div>
                </div>
                <div    className="Main">
                    <div    className="Article">
                        <div    className="ArticleSection1">
                            <p  className="p1">продажа экзотических животных</p>
                            <p  className="p2">мы предлагаем широкий асортимент редких и необычных животных</p>
                        </div>
                        <div    className="ArticleSection2">
                            <div    className="ArticleSection3"><a href="/shop" className="ButtonBuy">приобрести</a></div>
                            <div    className="ArticleSection4">
                                <div    className="ArticleSection5"><img    src={Reviews} alt=""/></div>
                                <div    className="ArticleSection6"><img    src={Types} alt=""/></div>
                            </div>
                        </div>
                    </div>
                    <div    className="Aside"><img  src={Aside}/></div>
                </div>
                <div    className="Footer">
                    <div    className="FooterSection1"><p>LACERTIAN SCALES</p></div>
                    <div    className="FooterSection2">
                        <p>О нас</p>
                        <p>Новости</p>
                        <p>Магазин</p>
                        <p>Отзывы</p>
                    </div>
                    <div    className="FooterSection3">
                        <p>+7 (951) 671-34-78</p>
                        <p>lacertian@yandex.ru</p>
                        <p>г. Краснодар, ул. Мира, д. 22</p>
                    </div>
                    <div    className="FooterSection4"><p><img   src={Connection}/></p></div>
                </div>
        </div>

  );
}

export default App;

import  React from "react";
import LogoPic from "../../media/Logopic.png";
import Search from "../../media/Search.png";
import Account from "../../media/Account.png";
import Connection from "../../media/Connection.png";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import "../../css/head.css"
import "../../css/footer.css"
import "../../css/Contacts.css"
import Shop from "../Shop/shop";
import Contacts1 from "../../media/Contacts1.png";
import Contacts2 from "../../media/Contacts2.png";
import Contacts3 from "../../media/Contacts3.png";


const Contacts = () =>{
    return (
        <div    className="Contacts">

            <div   className="Head">
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

            <div   className="ContactsBody">
                <div   className="ContactsBody1">
                <p  className="ContactsBodyP1">наши контакты</p>
                <p  className="ContactsBodyP2">Мы здесь, чтобы помочь. Пожалуйста, заполните форму ниже, и мы свяжемся с вами как можно скорее.</p>
                </div>
                <div   className="ContactsBody2">
                    <div   className="ContactsBody3"><img   src={Contacts1}  alt=""/></div>
                    <div   className="ContactsBody4"><form id="Shop" action="/apply/" method="POST">
                        <label>
                            <input  type="text" name="name" id="name"   placeholder="Ваше имя" />
                        </label>
                        <label>
                            <input  type="email" name="email" id="name"   placeholder="email"/>
                        </label>
                        <label>
                            <input  type="text" name="name" id="name"   placeholder="Объект"/>
                        </label>
                        <label>
                            <input  type="text" name="name" id="name"   placeholder="Описание"/>
                        </label>
                        <button className="ButtonContacts" type="submit">Отправить заявку</button>
                    </form></div>
                    <div   className="ContactsBody5">
                        <div   className="ContactsBody6"><img   src={Contacts2}  alt=""/></div>
                        <div   className="ContactsBody7"><img   src={Contacts3}  alt=""/></div>
                    </div>
                </div>
            </div>

            <div   className="Footer">
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
                <div    className="FooterSection4"><p><img   src={Connection} alt=""/></p></div>
            </div>

        </div>
    );
}
export default Contacts
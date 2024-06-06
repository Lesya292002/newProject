import LogoPic from "../../media/Logopic.png";
import {Link} from "react-router-dom";
import Search from "../../media/Search.png";
import Account from "../../media/Account.png";
import Connection from "../../media/Connection.png";
import React from "react";
import Shop1 from "../../media/Shop1.png";
import "../../css/head.css"
import "../../css/footer.css"
import "../../css/shop.css"
const Shop = () =>{
    return (
        <div    className="Shop">

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

            <div   className="ShopBody">
                <div className="ShopBody1"><p   className="ShopBodyP1">экзотические животные</p></div>
                <div className="ShopBody2"><img src={Shop1}/></div>
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
export default Shop

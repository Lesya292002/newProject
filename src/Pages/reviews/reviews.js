import  React from "react";
import LogoPic from "../../media/Logopic.png";
import Search from "../../media/Search.png";
import Account from "../../media/Account.png";
import Connection from "../../media/Connection.png";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import "../../css/head.css"
import "../../css/footer.css"
import Reviews1 from "../../media/Reviews1.png"
import Reviews2 from "../../media/Reviews2.png"
import "../../css/reviews.css"


const Reviews = () =>{
    return (
        <div    className="Reviews">

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

            <div   className="ReviewsBody">
                <div    className="ReviewsBody1"><p className="ReviewsBodyP1">Отзывы</p></div>
                <div    className="ReviewsBody2"><img   src={Reviews1}/></div>
                <div    className="ReviewsBody3">
                    <div    className="ReviewsBody4"><img src={Reviews2}/></div>
                    <div    className="ReviewsBody5">
                        <div    className="ReviewsBody6"><p className="ReviewsBodyP2">Мы здесь, чтобы помочь. Пожалуйста, заполните форму ниже, и мы свяжемся с вами как можно скорее.</p></div>
                        <div    className="ReviewsBody7">
                            <div    className="ReviewsBody8"><a href="оставить отзыв" className="ButtonReviews">Оставить отзыв</a></div>
                            <div    className="ReviewsBody9"><p className="ReviewsBodyP3">Отзывов:504</p></div>
                        </div>
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
export default Reviews



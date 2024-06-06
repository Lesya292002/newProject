import  React from "react";
import LogoPic from "../../media/Logopic.png";
import Search from "../../media/Search.png";
import Account from "../../media/Account.png";
import Connection from "../../media/Connection.png";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import "../../css/head.css"
import "../../css/footer.css"
import "../../css/InformAboutStyle.css"
import AboutBody1 from "../../media/AboutBody1.png"
import AboutBody2 from "../../media/AboutBody2.png"




const InformAbout = () =>{
   return(
     <div   className="InformAbout">
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

         <div   className="AboutBody">
             <div   className="AboutBody1">
                 <div   className="AboutBody2"><img src={AboutBody1}/></div>
                 <div   className="AboutBody3"><p   className="AboutBodyP1">наши преимущества</p></div>
             </div>
             <div   className="AboutBody4"><img src={AboutBody2}/></div>
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
export default InformAbout;

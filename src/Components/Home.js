import React from 'react';
import mvpBanner from '../Assets/mvp-banner.png';
import "./Home.css";
import { useHistory, BrowserRouter as Router, Switch, Route } from 'react-router-dom';




const Header = () => {

    const history = useHistory();

    const handleOrderPizza = () => {
        history.push('/pizza');
    };


    return (
        <header className="header-container">
            <h1 className="header-title">Teknolojik Yemekler</h1>
            <p className="subtitle">KOD ACIKTIRIR</p>
            <p className="subtitle">PİZZA, DOYURUR</p>
            <button id="order-pizza" onClick={handleOrderPizza}>
                ACIKTIM
            </button>
        </header>
    );
};

export default Header;
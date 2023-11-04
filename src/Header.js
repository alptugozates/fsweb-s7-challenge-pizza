import React from 'react';
import mvpBanner from './Assets/mvp-banner.png';
import "./Header.css";



const Header = () => {


    const handleButtonClick = () => {
        // Buton tıklama işlemleri burada gerçekleştirilebilir
        console.log('Butona tıklandı!');
    };

    return (
        <header className="header-container">
            <h1 className="header-title">Teknolojik Yemekler</h1>
            <p className="subtitle">KOD ACIKTIRIR</p>
            <p className="subtitle">PİZZA, DOYURUR</p>
            <button onClick={handleButtonClick} className="header-button">
                ACIKTIM
            </button>
        </header>
    );
};

export default Header;
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <h1 className="title">Teknolojik Yemekler</h1>
            <nav className="nav">
                <ul className="nav-list">
                    <Link to="/" className="nav-item" > Ana Sayfa </Link>
                    <Link to="/" className="nav-item">Seçenekler</Link>
                    <Link to="/pizza" className="nav-item-1">
                        Sipariş Oluştur
                    </Link>

                </ul>
            </nav>
        </header >
    );
};

export default Header;
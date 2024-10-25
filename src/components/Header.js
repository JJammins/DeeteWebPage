import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <header className='header'>
            <Link to="/home"><img src='에떼로고.png' className='logo'></img></Link>
            <nav className={menuOpen ? "nav-list open" : "nav-list"}>
                <ul className='nav-list'>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/order">Order</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
            <div className='hamburger' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
        </header>
    )
}

export default Header;
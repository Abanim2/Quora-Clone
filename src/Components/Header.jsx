import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <>
        <header className="container">
        <nav className='navbar'>
            <div>
                <Link to="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGZVurt8r1so9YWuK5gV3pIVuhxgzg-dvUhm4bdcUAaMZPNpu9PI9KzWPGPDB7HqUHw&usqp=CAU" alt="" width='200px' className='imgnav'/>
                </Link>
            </div>
            <div>
                <input type="text" placeholder='search for questions . . . . ' className='inputs'/>
            </div>
            <div>
                <Link to="/Addquestion">
                <button className='add'>Add questions</button>
                </Link>
            </div>
            <div>
            <Link to="/Addanswer">
                <button className='add'>Answer questions</button>
            </Link>
            </div>
            <div>
            <Link to="/Login">
                <button className='add'>Login</button>
            </Link>
            </div>
        </nav>
        </header>
        </>
    )
}
import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";

export default function Login() {
    return(
        <>
        <section className='main4'>
            <h1 className='lh'>Login</h1>
            <input type="text" placeholder='User name' className='inp1' /><br />
            <input type="password" placeholder='Password' className='inp1' /><br />
            <Link to="/">
            <button className='bl'>Login</button>
            </Link>
        </section>
        </>
    )
}
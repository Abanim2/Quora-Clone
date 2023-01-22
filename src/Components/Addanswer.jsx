import React from 'react'
import './Addanswer.css'
import { Link } from "react-router-dom";

export default function Addanswer() {
    return(
        <>
        <section className='main3'>
        <section className='leel'>
            <h1 className='sq'>Select Question</h1>
        </section>
        <section className='riir'>
            <h1 className='a'>Answer:</h1>
            <textarea className='t2'>Type your answer here. . . . . . . . . .</textarea>
        </section>
        <div className='aadd2'>
        <Link to='/'>
        <button className='add2'>Cancel</button>
        </Link>
        <Link to='/'>
        <button className='add2'>Add answer</button>
        </Link>
        </div>
        </section>
        </>
    )
}
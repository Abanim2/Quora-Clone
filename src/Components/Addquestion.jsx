import React from 'react'
import './Addquestion.css'
import { Link } from "react-router-dom";

export default function Addquestion() {
    return(
        <>
        <section className='main2'>
        <textarea className='t1'>Question: Type your question here . . . . .</textarea>
        <div className='aadd1'>
        <Link to='/'>
        <button className='add1'>Cancel</button>
        </Link>
        <Link to='/'>
        <button className='add1'>Add questions</button>
        </Link>
        </div>
        </section>
        </>
    )
}
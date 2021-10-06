import React from 'react'
import { Link } from 'react-router-dom'
import './Header.styles.css'

function Header () {
    return (
        <>
        <div className='header'>
          <img src="poppy.png" alt="poppy" className='App-logo'/>
          <Link to='/' className='trivia'>
            <h1>ANZAC <br /> TRIVIA</h1>
          </Link>
        </div>
        </>
    )
}

export default Header

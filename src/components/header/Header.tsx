import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <button><Link to="/my-words">My Words</Link></button>
            <button><Link to="/payments">Payments</Link></button>
        </nav>
    )
}

export default Header

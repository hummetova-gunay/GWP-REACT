import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
const navigate=useNavigate()
  return (
    <div>
        <header>
            <h1>Header</h1>
            <div className="buttons">
                <button onClick={()=>navigate('/')}>Home</button>
                <button onClick={()=>navigate('/about')}>About</button>
                <button onClick={()=>navigate('/contact')}>Contact</button>
                <button onClick={()=>navigate('/blog')}>Blog</button>
                <button onClick={()=>navigate(+1)}>Go next</button>
                <button onClick={()=>navigate(-1)}>Go previous</button>
            </div>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <NavLink to={'/blog'}>Blog</NavLink>
            </nav>
        </header>
    </div>
  )
}

export default Header
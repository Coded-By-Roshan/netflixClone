import React , {useState, useEffect}from 'react';
import './Nav.css';

function Nav() {
    const [show, setShow] =useState(false);
    var transitionNav = ()=>{
        if (window.scrollY > 100){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', transitionNav)
        return () => {
            window.removeEventListener('scroll', transitionNav)
        }
    }, [])
    return (
        <div className={`nav ${show && "nav-black"}`}>
            <div className="nav-contents">
            <img className="nav-logo" src="https://pngimg.com/uploads/netflix/netflix_PNG31.png"/>            
            <img className="signin-logo" src="https://www.seekpng.com/png/detail/37-373951_login-logo-de-login.png"/>            
            

            </div>
        </div>
    )
}

export default Nav

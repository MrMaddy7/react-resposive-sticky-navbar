import React,{useEffect, useState} from 'react';
import './scss/navbar.css'

function Navbar() {
    
    const [toggle, settoggle] = useState(['nav-links','burger']);
    const [scroll, setscroll] = useState('main-head');
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
    
    const handleScroll = () => {
        // setShow(window.pageYOffset > 140);
        if(window.pageYOffset > 30)
        {
            setscroll('main-head-fixed')
        }
        else if(window.pageYOffset < 10)
        {
            setscroll('main-head')
        }
        };
    
    const handleBurgerClick=()=>{
        console.log("Burger was pressed");
        if (toggle.includes('nav-links') && toggle.includes('burger')) 
        {
            const temp =['nav-links nav-open','burger toggle'] 
            settoggle(temp)
        }
        else
        {
            settoggle(['nav-links','burger'])
        }
    }
  return(
    <React.Fragment>
        <header>
            <div className={scroll}>
                <nav>
                    <h1 id="logo">LOGO</h1>
                    <ul className={toggle[0]}>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT US</a></li>
                        <li><a href="#insurance">WHY INSURANCE</a></li>
                        <li><a href="#expertise">OUR EXPERTISE</a></li>
                        <li><a href="#videos">VIDEOS</a></li>
                        <li><a href="#gallery">GALLERY</a></li>
                        <li><a href="#testimonials">TESTIMONIALS</a></li>
                        <li><a href="#contact us">CONTACT US</a></li>
                    </ul>
                <div onClick={handleBurgerClick} className={toggle[1]}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
                </nav>
            </div>
        </header>
      </React.Fragment>
  );
}

export default Navbar;

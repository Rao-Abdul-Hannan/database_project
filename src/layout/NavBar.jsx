import React, { useEffect, useState } from 'react'
import logo from "../assets/Images/WhatsApp Image 2024-12-11 at 19.13.55_76c2380c.jpg"
import "../style/navBar.css"


const NavBar = () => {
    const [charIndex, setCharIndex] = useState(0);
    let text = "Care Grammar School"
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCharIndex((prevIndex) => (prevIndex < text.length ? prevIndex + 1 : 0));
        }, 150)//every 100 milliseconds charIndex state gets incremented by 1 and string got sliced from (0, charIndex)

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [text]);

    return (
        <>
            <div>
                <nav className="navbar">
                    <div className="header">
                        <div className='p-3'><img src={logo} alt="care_logo" className='image-footer' width={100} height={60} /></div>
                        <div className="animated-line p-3">
                            <h2 className="top-heading"><span className="individual-letter">{text.slice(0, charIndex)}</span></h2>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default NavBar
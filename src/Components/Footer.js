import React from 'react'
import './Footer.css'
// import { Link } from 'react-router-dom'

function Footer() {

    function scrollToTop() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
           <button className="Footer__backToTop" onClick={scrollToTop}>Back to top</button>
                
            <div className="Footer__copyright">
                <h4 className='footerData'>Pokemon App created by &copy; Yadhu</h4>
            </div>
        </div>
    )
}

export default Footer

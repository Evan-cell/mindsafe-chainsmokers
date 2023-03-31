import React from 'react';
import backgroundImage from '../assets/welcome.png';
import svgImage from '../assets/logo.png';
import './welcome.css'
import {  Link } from "react-router-dom"
function Welcome() {
  return (
<div 
  className="welcome"
  style={{ 
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    height: '100vh', // set the height to the viewport height
    width: '100%' // set the width to 100%
  }}
>
<div class="rectangle2"
style={{
    position: 'absolute',
    width: '8.19px',
    height: '239px',
    left: '129px',
    top: '382px',
    background: '#05B661',
    borderRadius: '5.46286px', // hyphenated property name converted to camelCase
  }} 
></div>
<div class="feel"
  style={{
    position: 'absolute',
    width: '497px',
    height: '254px',
    left: '158px',
    top: '381px',
    fontFamily: 'Montserrat, sans-serif',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '101.589px',
    lineHeight: '127px',
    color: '#FFFFFF',
  }}
>Feel Stronger</div>
<div class="explore"
  style={{
    position: 'absolute',
    width: '170px',
    height: '35px',
    left: '912px',
    top: '582.67px',
    fontFamily: 'Montserrat, sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '29.215px',
    lineHeight: '35px',
    color: '#FFFFFF'
  }}
>Lets explore</div>
<div class="icon">
 <Link to='/auth'>
 <span class=" material-symbols-outlined">
        arrow_forward
        </span>
 </Link>

    </div>
    <div class="better">A better mind for a better health.</div>
    <div
    style={{
        background: `url(${svgImage})`,
        position: 'absolute',
        width: '145px',
        height: '145.79px',
        left: '567px',
        top: '103px'
      }}
    class="svg"></div>
</div>



  );
}

export default Welcome;

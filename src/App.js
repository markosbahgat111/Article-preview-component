import React, { useState } from 'react';
import './App.scss';
import drawer from './assets/images/drawers.jpg';
import person from './assets/images/avatar-michelle.jpg';
import share from './assets/images/icon-share.svg';
import facebook from './assets/images/icon-facebook.svg';
import twitter from './assets/images/icon-twitter.svg';
import pintrest from './assets/images/icon-pinterest.svg';

function App()
{
  const [show, setShow] = useState(false);

  return (
    <div className="App" onClick={() => show && setShow(false)}>
      <div className='main_img_container'><img src={drawer} alt="drawer" /></div>
      <div className='main_container'>
        <h1>Shift the overall look and feel by adding these wonderful touches to furniture in our home.</h1>
        <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. i've got some simple tips to help you make any room feel complete.</p>
        <div className='identity_container'>
          <div className='person_img'>
            <img src={person} alt="person" />
          </div>
          <p>
            Michelle Appleton
            <span>
              28 Jun 2020
            </span>
          </p>
          <div className='main_share_container'>
              <div className='share_container' id={show ? "show" : undefined}>
                <span>
                    Share
                </span>
                <img src={facebook} alt="facebook"/>
                <img src={twitter} alt="twitter"/>
                <img src={pintrest} alt="pintrest"/>
            </div>
            <div className='share_icon' onClick={() => setShow(show => !show)} id={show ? "active" : undefined}>
              <img src={share} alt="share Icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

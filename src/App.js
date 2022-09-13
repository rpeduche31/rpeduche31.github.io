import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Helmet} from 'react-helmet';

function App() {
  // useEffect(() => {
  //   (window.adsbygoogle = window.adsbygoogle || []).push({});
  // });

  return (
    <div className='App'>
      <Helmet>
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2816831416359590'
          crossOrigin='anonymous'
        ></script>
        <ins
          className='adsbygoogle'
          style={{display: 'block'}}
          data-ad-client='ca-pub-2816831416359590'
          data-ad-slot='2625787741'
          data-ad-format='auto'
          data-full-width-responsive='true'
        ></ins>
        {/* <script>{`(adsbygoogle = window.adsbygoogle || []).push({})`}</script> */}
      </Helmet>

      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        TEST
      </header>
    </div>
  );
}

export default App;

import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const NewComponent = ({slot}) => {
    useEffect(() => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    });

    return (
      <>
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2816831416359590'
          crossOrigin='anonymous'
        ></script>
        <ins
          google_adtest='on'
          className='adsbygoogle'
          style={{display: 'inline-block', width: '300px', height: '250px'}}
          data-ad-client='ca-pub-2816831416359590'
          data-ad-slot='1905934144'
          data-ad-format='auto'
          data-adtest='on'
          data-full-width-responsive='true'
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </>
    );
  };

  const ads = (
    <script
      async
      src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2816831416359590'
      crossOrigin='anonymous'
    ></script>
  );

  return (
    <div className='App'>
      <header className='App-header'>
        {ads && ads}
        <img src={logo} className='App-logo' alt='logo' />
        TEST
        <NewComponent />
      </header>
    </div>
  );
}

export default App;

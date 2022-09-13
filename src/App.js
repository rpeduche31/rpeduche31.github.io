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
          crossorigin='anonymous'
        ></script>
        <ins
          class='adsbygoogle'
          style={{display: 'block'}}
          data-ad-client='ca-pub-2816831416359590'
          data-ad-slot='2625787741'
          data-ad-format='auto'
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
      crossorigin='anonymous'
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

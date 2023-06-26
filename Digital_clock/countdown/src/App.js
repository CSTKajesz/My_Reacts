/*
import './App.css'
import React, { useState, useRef, useEffect } from 'react';
import sound from "./beep-01a.mp3"

function App() {
  const intervalRef = useRef(null);
  const audioRef = useRef(null);
  const [timer, setTimer] = useState('00');
  
  const play = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };
  
  const startTimer = () => {
    let counter = 40;
    
    const interval = setInterval(() => {
      setTimer(counter.toString().padStart(2, '0'));
      counter--;
      
      if (counter === 10) {
        play();
      }

      if (counter < 0) {
        clearInterval(interval);
        setTimer('00');
        startTimer();
      }
    }, 1000);
  };
  
  useEffect(() => {
    audioRef.current = new Audio(sound);
    console.log(audioRef.current); // Írd ki a hangobjektumot a konzolra
    startTimer();
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  
  return (
    <div className="timer">
    <h2>{timer}</h2>
    </div>
    );
  }
  
  export default App;
  */

import './App.css'
/*
import React, { useState, useRef, useEffect } from 'react';
import sound from "./beep-01a.mp3"

function App() {
  const intervalRef = useRef(null);
  const audioRef = useRef(null);
  const [timer, setTimer] = useState('00');

  const play = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play()
      .then(() => {
        // Sikeres lejátszás esetén folytathatjuk a visszaszámlálást
        startTimer();
      })
      .catch((error) => {
        // Hiba esetén logoljuk ki a hibaüzenetet
        console.log('Hiba a hang lejátszása közben:', error);
      });
  };

  const startTimer = () => {
    let counter = 40;

    const interval = setInterval(() => {
      setTimer(counter.toString().padStart(2, '0'));
      counter--;

      if (counter === 10) {
        play();
      }

      if (counter < 0) {
        clearInterval(interval);
        setTimer('00');
      }
    }, 1000);
  };

  useEffect(() => {
    audioRef.current = new Audio(sound);
    console.log(audioRef.current); // Írd ki a hangobjektumot a konzolra
    startTimer();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="timer">
      <h2>{timer}</h2>
    </div>
  );
}

export default App;

*/

import React, { useState, useRef, useEffect } from 'react';
import sound from "./beep-01a.mp3"

function App() {
  const intervalRef = useRef(null);
  const audioRef = useRef(null);
  const [timer, setTimer] = useState('00');

  const play = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const startTimer = () => {
    let counter = 40;

    const interval = setInterval(() => {
      setTimer(counter.toString().padStart(2, '0'));
      counter--;

      if (counter === 10) {
        play();
      }

      if (counter < 0) {
        clearInterval(interval);
        setTimer('00');
        startTimer();
      }
    }, 1000);
  };

  useEffect(() => {
    audioRef.current = new Audio(sound);
    console.log(audioRef.current); // Írd ki a hangobjektumot a konzolra
    startTimer();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="timer">
      <h2>{timer}</h2>
    </div>
  );
}

export default App;

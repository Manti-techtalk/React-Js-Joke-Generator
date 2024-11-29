import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import style from './Joke.module.css';

function Joke() {
  const [joke, setJoke] = useState('Loading...');
  const [feedback, setFeedback] = useState(''); // State to track feedback

  function fetchJoke() {
    axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })
      .then((response) => {
        setJoke(response.data.joke);
        setFeedback(''); // Reset feedback when a new joke is fetched
      })
      .catch((error) => {
        alert('There was an error fetching data:', error);
      });
  }

  const handleClick = () => {
    fetchJoke();
  };

  const handleThumbsUp = () => {
    setFeedback('You like it');
  };

  const handleThumbsDown = () => {
    setFeedback('You hate it');
  };

  return (
    <div className={style.all}>
      <main className={style.main}>
        <div className={style.first}>
          <h2>Joke Generator</h2>
          <p className={style.p1}><i className="fa-solid fa-eye"></i></p>
        </div>
        <div className={style.second}>
          <p className={style.joke}>{joke}</p>
        </div>
        <div className={style.third}>
          <i className="fa-solid fa-thumbs-up" onClick={handleThumbsUp}></i> 
          <i className="fa-solid fa-thumbs-down" onClick={handleThumbsDown}></i>
          <p>{feedback}</p>
        </div>
        <button className={style.btn} onClick={handleClick}>Generate</button>
      </main>
    </div>
  );
}

export default Joke;

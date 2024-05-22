import React, { useState } from 'react';
import './App.css';

const api = {
  key: '8ca5e4781d73be49378387a021b8de2b',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const iconUrl = 'http://openweathermap.org/img/w/';
const icon = 'weather.weather[0].icon';
function App() {
  const [userInput, setUserInput] = useState('');
  const [weather, setWeather] = useState({});
  const search = (event) => {
    if (event.key === 'Enter') {
      fetch(`${api.base}weather?q=${userInput}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setUserInput('');
          console.log(result);
        });
    }
  };
  const dateBuilder = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let year = d.getFullYear();
    let month = months[d.getMonth()];
    let day = days[d.getDay()];
    let date = d.getDate();
    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div
      className={
        typeof weather.main !== 'undefined'
          ? weather.main.temp < 15
            ? 'App cold'
            : 'App'
          : 'App'
      }
    >
      <div className="appContainer">
        <div className="searchContainer">
          <input
            type="text"
            className="searchInput"
            placeholder="Search"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main !== 'undefined' ? (
          <>
            <div className="locationContainer">
              <div className="location">
                <h1>
                  {weather.name}, {weather.sys.country}
                </h1>
              </div>
              <h6 className="date">{dateBuilder(new Date())}</h6>
            </div>
            <div className="weatherContainer">
              <div>
                <span className="temp">{Math.round(weather.main.temp)}</span>
                <span>°C</span>
              </div>
              {/* <div>{Math.round(weather.main.feels_like)}°C</div> */}
              {/* <div className="weather">{weather.weather[0].main}</div> */}
              <div>
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                ></img>
                <p>{weather.weather[0].description}</p>
              </div>
            </div>
          </>
        ) : (
          <div>
            <div>
                       <p>Search for weather in a specified city</p>
            </div>
          </div>
        )}
      </div>
      <p>
        Photos by{' '}
        <a href="https://unsplash.com/@niaz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Zain Bhatti
        </a>{' '}
        and{' '}
        <a href="https://unsplash.com/@mattiasmilos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Mattias Milos
        </a>
      </p>
    </div>
  );
}

export default App;
//Photo by <a href="https://unsplash.com/@niaz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zain Bhatti</a> on <a href="https://unsplash.com/photos/ReAup1bi27E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

//Photo by <a href="https://unsplash.com/@mattiasmilos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mattias Milos</a> on <a href="https://unsplash.com/photos/fObOPv-TP94?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './Form';
import GifInfo from './GifInfo';

function App() {
  const [gifData, setGifData] = useState('')
  const [gifName, setGifName] = useState('coffee')

  const handleSubmit = name => {
    setGifName(name)
  }

  useEffect(() => {
    let gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=EiywO6IliBXtK4hwJ7uqqoKxXjqbnXaL&q=${gifName}&limit=25&offset=0&rating=g&lang=en`;
    const makeApiCall = () => {
      fetch(gifUrl)
      .then(res => res.json())
      .then(data => {
        setGifData({data})
      })
    }
    makeApiCall()
  }, [gifName])

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit}/>
      <GifInfo gif={gifData}/>
    </div>
  );
}

export default App;
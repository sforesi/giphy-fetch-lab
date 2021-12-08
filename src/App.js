import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './Form';
import GifInfo from './GifInfo';

function App() {
  const [gifData, setGifData] = useState('');
  const [gifTitle, setGifTitle] = useState('')

  const handleSubmit = title => {
    console.log('Title: ', title);
    setGifTitle(title)
  };

  useEffect(() => {
    let gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=EiywO6IliBXtK4hwJ7uqqoKxXjqbnXaL&q=${gifTitle}&limit=25&offset=0&rating=g&lang=en`;
  
  const makeApiCall = () => {
    fetch(gifUrl)
    .then(res => res.json())
    .then(data =>  {
      console.log('gifData is: ', data)
      setGifData(data)
    })
  }
  makeApiCall()
}, [gifTitle])

  return (
    <div className="App">
      <h1>Check out some gifs</h1>
      <Form  handleSubmit={handleSubmit} />
      {gifData.data ? <GifInfo gif={gifData} /> : null}
    </div>
  )
}

export default App;
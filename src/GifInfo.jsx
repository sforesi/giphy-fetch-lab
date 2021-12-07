import React from 'react'

function GifInfo(props){
  console.log('This is props info: ', props.gif.data[[0]].url)
  return  (
    <div>
      <img src={props.gif.data[[0]].url} alt='gif'/>
    </div>
  )  
}

export default GifInfo
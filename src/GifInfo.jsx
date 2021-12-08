import React from 'react'

const GifInfo = ({ gif })  => {
  let url = ''
  gif.data.forEach((element)=>{
    url = element.images.original.url
  })
  return  (
    <div>
      <img src={url} alt=''/>
    </div>
  )  
}

export default GifInfo
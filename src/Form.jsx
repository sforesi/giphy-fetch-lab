import React, {useState} from "react";

function Form(props) {
  const [gifName, setGifName] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(gifName)
    setGifName('')
  };

  const handleChange = e => {
    const name = e.target.value
    setGifName(name)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="gifName"> Name: </label>
        <input 
        id="gifName"
        type="text"
        value={gifName}
        onChange={handleChange}
        />
        <input type="submit" value="Find Gif" />
      </form>
    </>
  );
}

export default Form;
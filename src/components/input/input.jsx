import React, { useState } from "react";

export function Input({value, changeValue}){

  const [text, changeText] = useState('');

  const onChange = (e) => {
    changeText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    changeValue({
      text: text,
      done: 'false',
      id: value.length,
    });
    changeText('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Fill me!" required onChange={onChange} value={text}></input>
      <button type="submit">add</button>
    </form>
  )
}
import React, { useState, useEffect } from "react";
import style from './list-item.module.css';

export function ListItem({ text, state, id, del }) {

  const [done, changeDone] = useState(state);

  return (
    <li className={style.container}>
      <input type="checkbox" value="done" onChange={(e) => { done === 'false' ? changeDone(e.target.value) : changeDone('false')}} className={style.checkbox} />
      <p className={style.item + ' ' + (done === "done" ? style.doneItem : '')}>{text}</p>
      <button onClick={() => del(id)} className={style.button}></button>
    </li>
  )
}
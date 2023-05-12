import React from "react";
import { ListItem } from "../list-item/list-item";
import style from "./list.module.css"

export function List({ items, deleteTodo }) {

  return (
    <ul className={style.container}>
      {
        items.map((el, index) => {
          return ( <ListItem text={el.text} state={'false'} id={index} key={index} del={deleteTodo} /> )
        })
      }
    </ul>
  )
}
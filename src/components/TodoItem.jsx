/* eslint-disable react/destructuring-assignment,react/no-access-state-in-setstate
  */
import React from 'react';
import styles from '../styles/TodoItem.module.css';

function TodoItem(props) {
  const { completed, id, title } = props.todo;
  return (
    <li className={styles.item}>
      <div className={styles.content}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => props.handleChangeProps(id)}
      />
      <button onClick={() => props.deleteTodoProps(id)} type="button" id="delete">
        Delete
      </button>
      <span className={completed ? 'completedStyle' : ''}>
        {title}
      </span>
      </div>
    </li>
  );
}

export default TodoItem;
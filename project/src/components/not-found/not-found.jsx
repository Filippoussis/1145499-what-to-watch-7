import React from 'react';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <section>
      <h1>Заблудились?</h1>
      <p>Извините, мы не можем найти эту страницу</p>
      <p>Вы найдете много интересного на домашней странице</p>
      <Link to="/">На главную</Link>
    </section>
  );
}

export default NotFound;

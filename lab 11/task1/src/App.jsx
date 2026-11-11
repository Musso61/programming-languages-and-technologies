
import { useState } from 'react';
import './App.css';

// Дочерний компонент карточки товара
function ProductCard({ name, price }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="product-card">
      <h2>{name}</h2>

      <p>Цена: {price.toLocaleString('ru-RU')} ₸</p>

      <p>Количество: {quantity}</p>

      <button onClick={() => setQuantity(q => q + 1)}>
        Добавить товар
      </button>

      <button
        className="reset-button"
        onClick={() => setQuantity(0)}
      >
        Сбросить
      </button>

      <h3>
        Общая стоимость: {(price * quantity).toLocaleString('ru-RU')} ₸
      </h3>
    </div>
  );
}

// Главный родительский компонент
export default function App() {
  return (
    <div className="container">
      <h1>Лабораторная работа №11</h1>

      <h2>Вариант №7 — Карточка товара</h2>

      <p>React: Props и State</p>

      <div className="products">
        <ProductCard name="Смартфон" price={150000} />
        <ProductCard name="Ноутбук" price={350000} />
        <ProductCard name="Наушники" price={25000} />
      </div>
    </div>
  );
}


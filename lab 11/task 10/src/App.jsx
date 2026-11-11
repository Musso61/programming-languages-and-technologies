
import { useState } from 'react';
import './App.css';

// Дочерний компонент товара
function ProductCard({ name, price, onAdd }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>

      <p>Цена: {price.toLocaleString('ru-RU')} ₸</p>

      <button onClick={() => onAdd(price)}>
        Добавить в корзину
      </button>
    </div>
  );
}

// Родительский компонент корзины
function ShoppingCart() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  // Добавление товара
  function addProduct(price) {
    setCount(c => c + 1);
    setTotal(t => t + price);
  }

  // Очистка корзины
  function clearCart() {
    setCount(0);
    setTotal(0);
  }

  return (
    <div className="container">
      <h1>Лабораторная работа №11</h1>

      <h2>Вариант №11 — Корзина товаров</h2>

      <p>React: Props и State</p>

      <div className="products">
        <ProductCard
          name="Ноутбук"
          price={250000}
          onAdd={addProduct}
        />

        <ProductCard
          name="Компьютерная мышь"
          price={5000}
          onAdd={addProduct}
        />

        <ProductCard
          name="Клавиатура"
          price={12000}
          onAdd={addProduct}
        />
      </div>

      <div className="cart">
        <h2>Моя корзина</h2>

        <p>Количество товаров: {count}</p>

        <h3>
          Общая сумма: {total.toLocaleString('ru-RU')} ₸
        </h3>

        <button className="clear-button" onClick={clearCart}>
          Очистить корзину
        </button>
      </div>
    </div>
  );
}

// Главный компонент
export default function App() {
  return <ShoppingCart />;
}

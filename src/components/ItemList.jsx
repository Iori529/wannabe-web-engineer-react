import { useState } from "react";
import Item from "./Item";

const ItemList = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [items, setItems] = useState([
    { name: "apple", price: 300 },
    { name: "banana", price: 200 },
    { name: "Grape", price: 2000 },
    { name: "Melon", price: 10000 },
  ]);
  return (
    //ここにItemコンポーネントを並べる
    <div>
      <h2>商品リスト</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.name}>
              <Item name={item.name} price={item.price} />
            </li>
          );
        })}
      </ul>
      <div>
        <label htmlFor="itemName">
          商品名:
          <input
            type="text"
            id="itemName"
            onChange={(e) => setItemName(e.target.value)}
            value={itemName}
          />
        </label>
        <label htmlFor="itemName">
          価格:
          <input
            type="number"
            id="itemPrice"
            onChange={(e) => setItemPrice(e.target.value)}
            value={itemPrice}
          />
        </label>
        <button
          onClick={() => {
            setItems((items) => [
              ...items,
              { name: itemName, price: itemPrice },
            ]);
          }}
        >
          追加
        </button>
      </div>
    </div>
  );
};

export default ItemList;

import React, { useState } from "react";
import Header from "./componets/Header";
import Items from "./componets/Items";
import Add from "./componets/Add";
import ItemAdd from "./componets/ItemAdd";
import Cancel from "./componets/Cancel";

const App = () => {
  const [showAdd, setShowAdd] = useState(false);
  // const [number, setNum] = useState(0);

  const [items, setItems] = useState([
    {
      name: "Iphone",
      number: 10,
    },
    {
      name: "Sumsang",
      number: 0,
    },
    {
      name: "Nokia",
      number: -0,
    },
  ]);
  //add new note
  const addItem = (item) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    //cancel save or continue typying
    const confirm = window.confirm("Do want to add this item?");
    if (confirm === true) {
      const newItem = { id, ...item };
      setItems([...items, newItem]);

      setShowAdd(false);
    } else {
      const newItem = { id, ...item };
      setItems([...items]);
    }
  };

  return (
    <>
      <div className="container">
        <Header title="Shopping App" />
        {showAdd ? (
          <Cancel onCancel={() => setShowAdd(!showAdd)} />
        ) : (
          <Add onAdd={() => setShowAdd(!showAdd)} />
        )}
        {showAdd ? (
          <ItemAdd onAdd={addItem} />
        ) : items.length > 0 ? (
          <Items items={items} />
        ) : (
          <>
            <h3>No items to show</h3>
            <br />
          </>
        )}
      </div>
    </>
  );
};

export default App;

import React from 'react';
import Hello from './Hello';
import Message from './Message';
import Counter from './Counter';
import ProductList from './ProductList';
import TodoList from './TodoList';
import DataFetch from './Datapage';
import DynamicContentComponent from './DynamicContentComponent';
import FetchRegistrations from './FetchRegistrations';
const Home = () => {
  const defaultItems = ["Book", "Pen", "Pencil"];
  const customItems = ["SamSung", "Apple", "Xiaomi"];
  const products = [
    { id: 1, name: 'Pen', price: 20 },
    { id: 2, name: 'Gel Pen', price: 30 },
    { id: 3, name: 'Ink Pen', price: 25 },
  ];
  const todos = [
    { title: 'Adding to cart', completed: false },
    { title: 'Shipping', completed: true },
    { title: 'Delivered', completed: false },
  ];
  return (
    <div>
      <FetchRegistrations/>
      {/* <Counter/>
      <DataFetch/>
      <DynamicContentComponent title="Mobile Store" items={customItems} />
      <DynamicContentComponent title="Stationary Store" items={defaultItems} />  */}
      
    </div>
  );
};
export default Home;
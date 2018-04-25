import React from 'react';
import FormItem from '../../routers/FormItemRouter';
import TodoList from '../../routers/TodoListRouter';
import Footer from '../Footer';

const App = () => (
  <div>
    <FormItem />
    <TodoList />
    <Footer />
  </div>
);

export default App;

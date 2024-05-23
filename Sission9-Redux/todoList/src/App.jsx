    import React from 'react';
    import { Provider } from 'react-redux';
    import store from './store/Store';
    import AddTodo from './assets/components/AddTodo';
    import ListTodo from './assets/components/ListTodo';


    const App = () => {
      return (
        <Provider store={store}>
          <div>
            <h1>Todo List</h1>
            <AddTodo />
            <ListTodo />
          </div>
        </Provider>
      );
    };

    export default App;

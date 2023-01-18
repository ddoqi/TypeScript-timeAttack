import "./App.css";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="header">
          <h1>나의 투두리스트</h1>
        </div>
        <InputTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;

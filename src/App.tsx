import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoContainer from "./components/TodoContainer";
import { useTodo } from "./hooks/useTodo";


function App() {
  const {
    addTodo,
    toggleTodoCompleted,
    clearCompleted,
    filteredTodo,
    setFilter,
    filter,
    todoList,
    deleteTodo,
  } = useTodo();

  return (
    <TodoContainer>
      <>
        <TodoHeader />
        <TodoForm addTodo={addTodo} />
        <TodoList deleteTodo={deleteTodo} clearCompleted={clearCompleted} filter={filter} todoList={todoList} filteredTodo={filteredTodo} setFilter={setFilter} toggleTodoCompleted={toggleTodoCompleted} />
      </>
    </TodoContainer>
  );
};

export default App

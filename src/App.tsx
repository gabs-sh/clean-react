import { FormEvent, useRef } from "react";
import { Todo } from "./entity/Todo";
import { TodoList, TodoListProps } from "./entity/TodoList";
import { useReactiveClass } from "./hooks/useReactiveClass";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  // const [todoList] = useState<TodoList>(new TodoList({}));
  const { state: todoList } = useReactiveClass<TodoListProps, TodoList>(
    TodoList
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (inputRef.current) {
      const todo = new Todo(inputRef.current.value);
      todoList.addTodo(todo);
      inputRef.current.value = "";
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit">Salvar</button>
      </form>
      <div>
        {todoList.getTodos().map((t) => (
          <div key={t.id}>
            <h1>{t.title}</h1>
            <span>done? {t.done ? "yes" : "no"}</span> <br />
            <small>Created at: {t.createdAt.toLocaleTimeString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

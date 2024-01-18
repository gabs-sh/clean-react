import { Observable } from "./Observable";
import { Todo } from "./Todo";

export abstract class ReactiveClass<T> extends Observable {
  constructor(data?: T) {
    super();
    Object.assign(this, data);
  }

  //   abstract updateState(): void;
}

export interface TodoListProps {
  _list?: Todo[];
}

export class TodoList extends ReactiveClass<TodoListProps> {
  private _list: Todo[];

  constructor({ _list }: TodoListProps) {
    super({ _list });
    this._list = [];
  }

  addTodo(todo: Todo): void {
    this._list.push(todo);
    this.notify("change");
  }

  getTodos(): Todo[] {
    return this._list;
  }
}

import { Observable } from "./Observable";
import { Todo } from "./Todo";

export class TodoList extends Observable {
  private _list: Todo[];

  constructor(...props: any[]) {
    // temporário
    super();
    this._list = [];
    Object.assign(this, ...props);
  }

  addTodo(todo: Todo): void {
    this._list.push(todo);
    this.notify("change");
  }

  getTodos(): Todo[] {
    return this._list;
  }

  getProps() {
    return {
      _list: this._list,
      observers: this.observers,
    };
  }
}

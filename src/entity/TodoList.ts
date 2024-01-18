import { Observable } from "./Observable";
import { Todo } from "./Todo";

export class TodoList extends Observable {
  private _list: Todo[];

  constructor(...props: any[]) {
    // mover para uma classe intermediaria
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
    const props = {};
    Object.keys(this).forEach((k) => (props[k] = this[k]));

    return props;
  }
}

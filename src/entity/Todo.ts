import { v4 as uuid } from "uuid";

export class Todo {
  private _done: boolean;
  private _title: string;
  private _createdAt: Date;
  private _id: string;

  constructor(title: string) {
    this.title = title;
    this._createdAt = new Date();
    this._done = false;
    this.id = uuid();
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    if (this.id) throw new Error("Id is already created");
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    if (value.length < 3) throw new Error("Invalid Title");
    this._title = value;
  }

  get done(): boolean {
    return this._done;
  }

  get createdAt(): Date {
    return this._createdAt;
  }
}

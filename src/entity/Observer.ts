type FunctionType = (data: any) => any;

export class Observer {
  private _eventName: string;
  private _cb: FunctionType;

  constructor(eventName: string, cb: FunctionType) {
    this._cb = cb;
    this._eventName = eventName;
  }

  get cb(): FunctionType {
    return this._cb;
  }

  get eventName(): string {
    return this._eventName;
  }
}
